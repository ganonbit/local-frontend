import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Query } from 'react-apollo';

import { Loading } from 'components/Loading';
import { CloseIcon } from 'components/icons';
import { Spacing } from 'components/Layout';
import NotFound from 'components/NotFound';
import Head from 'components/Head';
import MessagePopupInfo from './MessagePopupInfo';
import MessagePopupOptions from './MessagePopupOptions';

import { GET_MESSAGE } from 'graphql/message';

const Root = styled.div`
  margin: 0 auto;
  margin: ${p => !p.usedInModal && p.theme.spacing.lg} 0;
  box-shadow: ${p => p.theme.shadows.sm};
  border-radius: ${p => p.theme.radius.sm};
  z-index: ${p => (p.usedInModal ? p.theme.zIndex.xl : 'inherit')};
  overflow: hidden;
  width: 100%;

  @media (min-width: ${p => p.theme.screen.md}) {
    width: auto;
  }
`;

const Container = styled.div`
  max-height: ${p => (p.usedInModal ? '600px' : 'auto')};
  overflow-y: ${p => (p.usedInModal ? 'auto' : 'inherit')};
  max-width: 1300px;
  background-color: ${p => p.theme.colors.white};
  display: flex;
  flex-direction: column;

  @media (min-width: ${p => p.theme.screen.md}) {
    flex-direction: ${p => (p.usedInModal ? 'row' : 'column')};
    max-height: ${p => (p.usedInModal ? '600px' : 'auto')};
    overflow-y: inherit;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${p => (p.usedInModal ? 'center' : 'flex-start')};
  justify-content: center;
  background-color: ${p => p.theme.colors.black};
  width: 100%;

  @media (min-width: ${p => p.theme.screen.md}) {
    max-width: 1000px;
    min-width: 500px;
    height: ${p => (p.usedInModal ? '600px' : 'auto')};
  }
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  width: ${p => !p.usedInModal && '100%'};
  max-height: ${p => (p.usedInModal ? '600px' : '100%')};
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 100%;
  background-color: ${p => p.theme.colors.white};

  @media (min-width: ${p => p.theme.screen.md}) {
    width: ${p => (p.usedInModal ? '360px' : '100%')};
    min-width: 360px;
  }
`;

const CloseModal = styled.div`
  display: block;
  position: fixed;
  right: 20px;
  top: 15px;
  cursor: pointer;
`;

const Content = styled.div`
  font-size: ${p => p.theme.font.size.xs};
  border-bottom: 1px solid ${p => p.theme.colors.grey[100]};
  padding: ${p => p.theme.spacing.xs};
`;

/**
 * Displays message with options
 * Meant to be used in Modal or Page component
 */
const MessagePopup = ({ id, closeModal, usedInModal }) => {
  return (
    <Query query={GET_MESSAGE} variables={{ id }}>
      {({ data, loading, error }) => {
        if (loading) return <Loading top="lg" />;
        if (error) return <NotFound />;

        const message = data.getMessage;

        return (
          <Root usedInModal={usedInModal}>
            <Head
              content={message.content ? message.content : `${message.author.username}'s message`}
            />

            {closeModal && (
              <CloseModal onClick={closeModal}>
                <CloseIcon width="16" color="white" />
              </CloseModal>
            )}

            <Container usedInModal={usedInModal}>
              <Left usedInModal={usedInModal}>
                <Image src={message.image} usedInModal={usedInModal} />
              </Left>

              <Right usedInModal={usedInModal}>
                <Spacing>
                  <MessagePopupInfo author={message.author} />

                  {message.content && <Content>{message.content}</Content>}
                </Spacing>

                <Spacing>
                  <MessagePopupOptions
                    messageId={message.id}
                    messageAuthor={message.author}
                  />
                </Spacing>
              </Right>
            </Container>
          </Root>
        );
      }}
    </Query>
  );
};

MessagePopup.propTypes = {
  id: PropTypes.string.isRequired,
  closeModal: PropTypes.func,
  usedInModal: PropTypes.bool.isRequired,
};

MessagePopup.defaultProps = {
  usedInModal: true,
};

export default withRouter(MessagePopup);
