import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Spacing } from 'components/Layout';

const Root = styled.div`
  border-top: 1px solid ${p => p.theme.colors.grey[300]};
  border-bottom: 1px solid ${p => p.theme.colors.grey[300]};
  padding-bottom: ${p => p.theme.spacing.xs};
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: ${p => p.theme.spacing.sm};
`;

/**
 * Options for MessagePopup component
 */
const MessagePopupOptions = ({ messageId, messageAuthor }) => {
  return (
    <Root>
      <Icons>
        <Spacing right="sm" />
      </Icons>
    </Root>
  );
};

MessagePopupOptions.propTypes = {
  messageId: PropTypes.string.isRequired,
  messageAuthor: PropTypes.object.isRequired
};

export default MessagePopupOptions;
