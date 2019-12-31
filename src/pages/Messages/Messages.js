import React from 'react';
import PropTypes from 'prop-types';

import NotificationMessages from './NotificationMessages';
import MessagesChat from './MessagesChat';

import { useStore } from 'store';

/**
 * Messages page
 */
const Messages = ({ match }) => {
  const [{ auth }] = useStore();

  return (
    <>
      <div class='container'>
        <div class='row'>
          <div class='col-12'>
            <div class='ui-block'>
              <div class='ui-block-title block-title-bg'>
                <h6 class='title'>Chat / Messages</h6>
              </div>

              <div class='row'>
                <NotificationMessages />
                <MessagesChat match={match} authUser={auth.user} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Messages.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Messages;
