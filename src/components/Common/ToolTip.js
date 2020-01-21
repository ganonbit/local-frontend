import React from 'react';
import { Tooltip } from 'react-bootstrap';
import { OverlayTrigger, Popover } from 'react-bootstrap';

const ToolTip = props => <Tooltip>{props}</Tooltip>;

const OverlayTriggers = ({
  placement,
  isPostToolTip,
  toolTipText,
  children,
}) => {
  let toolTipTextList;

  if (isPostToolTip && toolTipText.length < 1) {
    toolTipTextList = <li>No Comment</li>;
  } else if (isPostToolTip && toolTipText.length < 10) {
    toolTipTextList = toolTipText.map((toolTipText, index) => (
      <li key={index}>{toolTipText.author}</li>
    ));
  } else if (isPostToolTip && toolTipText.length > 10) {
    let count = 0;
    for (const tooltipTexts of toolTipText) {
      toolTipTextList.push(<li>{tooltipTexts.author}</li>);
      count++;
      if (count > 10) {
        toolTipTextList.push(
          <li>{`and ${tooltipTexts.length -
            10} other people commented on this`}</li>
        );
      }
    }
  }

  return (
    <OverlayTrigger
      trigger='hover'
      placement={placement}
      delay={{ show: 0, hide: 1 }}
      overlay={
        !isPostToolTip ? (
          ToolTip(toolTipText)
        ) : (
          <Popover>
            <Popover.Content>
              <ul>{toolTipTextList}</ul>
            </Popover.Content>
          </Popover>
        )
      }
    >
      {children}
    </OverlayTrigger>
  );
};

export default OverlayTriggers;
