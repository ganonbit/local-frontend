import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import MessagePopup from 'components/MessagePopup';

/**
 * message detail page
 */
const Message = ({ match }) => {
  return <MessagePopup usedInModal={false} id={match.params.id} />;
};

Message.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withRouter(Message);
