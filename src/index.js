import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './route/App';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import { createApolloClient } from 'utils/apollo-client';
import { StoreProvider } from 'store/index';
import './assets/style/index.scss';

const { REACT_APP_API_URL, REACT_APP_WEBSOCKET_API_URL } = process.env;
// GraphQL HTTP & WebSocket (subscriptions) URL.
// If its url is not set in .env then it has same url, host and pathname


const websocketApiUrl = REACT_APP_WEBSOCKET_API_URL
  ? REACT_APP_WEBSOCKET_API_URL
  : REACT_APP_API_URL.replace('https://', 'wss://').replace('http://', 'ws://');

// Create a Apollo client
const apolloClient = createApolloClient(REACT_APP_API_URL, websocketApiUrl);
const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(
    <ApolloProvider client={apolloClient}>
      <ApolloHooksProvider client={apolloClient}>
        <StoreProvider>
          <App />
        </StoreProvider>
      </ApolloHooksProvider>
    </ApolloProvider>,
    rootElement
  );
} else {
  render(
    <ApolloProvider client={apolloClient}>
      <ApolloHooksProvider client={apolloClient}>
        <StoreProvider>
          <App />
        </StoreProvider>
      </ApolloHooksProvider>
    </ApolloProvider>,
    rootElement
  );
}
