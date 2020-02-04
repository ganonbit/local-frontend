import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { ApolloLink, Observable, split } from 'apollo-link';
import { createPersistedQueryLink } from 'apollo-link-persisted-queries';
import { BatchHttpLink } from 'apollo-link-batch-http';
import { createUploadLink } from 'apollo-upload-client';
import { getMainDefinition } from 'apollo-utilities';
import { WebSocketLink } from 'apollo-link-ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { withClientState } from 'apollo-link-state';
import { persistCache } from 'apollo-cache-persist';

/**
 * Creates a Apollo Link, that adds authentication token to request
 */
const createAuthLink = () => {
  const request = async (operation) => {
    const token = localStorage.getItem('token');
    operation.setContext({
      http: {
        includeExtensions: true,
        includeQuery: false
      },
      headers: {
        authorization: token,
      },
    });
  };

  return new ApolloLink(
    (operation, forward) => new Observable((observer) => {
      let handle;
      Promise.resolve(operation)
        .then(oper => request(oper))
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer)
          });
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) handle.unsubscribe();
      };
    })
  );
};

/**
 * Helper functions that handles error cases
 */
const handleErrors = () => {
  return onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      console.error({ graphQLErrors });
    }
    if (networkError) {
      console.error({ networkError});
    }
  });
};

/**
 * Creates a Apollo Client
 *
 * @param {string} apiUrl, GraphQL api url
 * @param {string} websocketApiUrl, GraphQL WebSocket api url
 */

export const createApolloClient = (apiUrl, websocketApiUrl) => {
  const cache = new InMemoryCache();
  const errorLink = handleErrors();

  try {
    persistCache({
      cache: cache,
      storage: window.localStorage
    });
  } catch (error) {
    console.error('Error restoring Apollo cache', error);
  }

  const GRAPHQL_ENDPOINT = 'ws://localhost:4000/graphql';

  const client = new SubscriptionClient(GRAPHQL_ENDPOINT, {
    uri: websocketApiUrl,
    options: {
      reconnect: true,
      timeout: 60000,
      connectionParams: {
        authorization: authToken,
      },
    },
  });

  const authLink = createAuthLink();
  const httpLink = new BatchHttpLink({
    uri: GRAPHQL_ENDPOINT
  });
  const uploadLink = createUploadLink({ uri: apiUrl }); // Upload link also creates an HTTP link

  // Create WebSocket link
  const authToken = localStorage.getItem('token');
  const wsLink = process.browser
  ? new WebSocketLink(client): () => {
    console.log('SSR');
  };

  // Temporary fix for early websocket closure resulting in websocket connections not being instantiated
  // https://github.com/apollographql/subscriptions-transport-ws/issues/377

  wsLink.subscriptionClient.maxConnectTimeGenerator.duration = () =>
    wsLink.subscriptionClient.maxConnectTimeGenerator.max;

  // Split links, so we can send data to each link
  // depending on what kind of operation is being sent
  const terminatingLink = split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query);
      return (
        kind === 'OperationDefinition'
        && operation === 'subscription'
        && process.browser
      );
    },
    wsLink,
    uploadLink,
    httpLink
  );

  const link = ApolloLink.from([
    errorLink, 
    authLink, 
    withClientState({
      defaults: {
        isConnected: true
      },
      resolvers: {
        Mutation: {
          updateNetworkStatus: (_, { isConnected }, { cache }) => {
            cache.writeData({ data: { isConnected } });
            return null;
          }
        }
      },
      cache
    }),
    createPersistedQueryLink().concat(terminatingLink)
  ]);
  

  return new ApolloClient({
    link: link,
    cache: cache,
  });
};
