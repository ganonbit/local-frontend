import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';

import { Container } from 'components/Layout';
import { Loading } from 'components/Loading';
import Skeleton from 'components/Skeleton';
import Message from 'components/App/Message';
import InfiniteScroll from 'components/InfiniteScroll';
import Empty from 'components/Empty';
import Head from 'components/Head';

import { useStore } from 'store';

import { GET_USER_MESSAGES } from 'graphql/message';

import { MESSAGES_PAGE_MESSAGE_LIMIT } from 'constants/DataLimit';

const Root = styled(Container)`
  margin-top: ${p => p.theme.spacing.lg};
`;

const List = styled.div`
  overflow: hidden;
  box-shadow: ${p => p.theme.shadows.sm};
  border-radius: ${p => p.theme.radius.sm};
`;

/**
 * Messages page
 */
const Messages = () => {
  const [{ auth }] = useStore();

  const variables = {
    userId: auth.user.id,
    skip: 0,
    limit: MESSAGES_PAGE_MESSAGE_LIMIT,
  };

  return (
    <Root maxWidth="md">
      <Head title={`${auth.user.username}'s Messages`} />

      <Query
        query={GET_USER_MESSAGES}
        variables={variables}
        notifyOnNetworkStatusChange
      >
        {({ data, loading, fetchMore, networkStatus, err }) => {
          if (!data) {
            return <Empty text="No messages yet." />;
          }
          if (loading && networkStatus === 1) {
            return (
              <Skeleton
                height={56}
                bottom="xxs"
                count={MESSAGES_PAGE_MESSAGE_LIMIT}
              />
            );
          }

          const { messages, count } = data.getUserMessages;

          if (!messages.length) {
            return <Empty text="No messages yet." />;
          }

          return (
            <InfiniteScroll
              data={messages}
              dataKey="getUserMessages.messages"
              count={parseInt(count)}
              variables={variables}
              fetchMore={fetchMore}
            >
              {data => {
                const showNextLoading =
                  loading && networkStatus === 3 && count !== data.length;

                return (
                  <>
                    <List>
                      {data.map(message => (
                        <Message
                          key={message.id}
                          message={message}
                          close={() => false}
                        />
                      ))}
                    </List>

                    {showNextLoading && <Loading top="lg" />}
                  </>
                );
              }}
            </InfiniteScroll>
          );
        }}
      </Query>
    </Root>
  );
};

export default Messages;
