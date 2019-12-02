import React from 'react';
import { Tooltip } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';

const ToolTip = props => <Tooltip>{props}</Tooltip>;

const OverlayTriggers = props => {
	return (
		<OverlayTrigger
			trigger='hover'
			placement={props.placement}
			delay={{ show: 0, hide: 1 }}
			overlay={ToolTip(props.toolTipText)}>
			{props.children}
		</OverlayTrigger>
	);
};

export default OverlayTriggers;
