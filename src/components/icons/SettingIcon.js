import React from 'react';
import theme from 'theme';
import PropTypes from 'prop-types';

/**
 * Close (X) icon
 *
 * @param {string} width
 * @param {string} color
 */
export const SettingIcon = ({ width, color }) => {
  const DEFAULT_WIDTH = '12';
  const DEFAULT_COLOR = theme.colors.primary.main;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width || DEFAULT_WIDTH}
      fill={theme.colors[color] || DEFAULT_COLOR}
      viewBox='0 0 18 18'
    >
      <path
        d='M18,9.4c0,0.3-0.1,0.5-0.1,0.8c-0.1,0.5-0.5,0.8-1,0.8c-0.2,0-0.5,0-0.7,0c-0.1,0-0.1,0-0.2,0.1
			c-0.2,0.5-0.4,0.9-0.6,1.4c0,0.1,0,0.2,0,0.2c0.2,0.2,0.4,0.3,0.5,0.5c0.4,0.4,0.4,0.8,0.1,1.2c-0.4,0.7-1,1.2-1.7,1.6
			c-0.4,0.3-0.9,0.2-1.2-0.1c-0.2-0.2-0.3-0.3-0.5-0.5c0,0-0.2-0.1-0.2,0c-0.5,0.2-0.9,0.4-1.3,0.5C11,16,11,16.1,11,16.2
			c0,0.2,0,0.5,0,0.7c0,0.5-0.3,0.9-0.8,1c-0.8,0.2-1.6,0.2-2.4,0C7.3,17.7,7,17.4,7,16.9c0-0.2,0-0.5,0-0.7C7,16.1,7,16,6.9,16
			c-0.5-0.2-0.9-0.4-1.3-0.6c-0.1,0-0.2,0-0.2,0C5.1,15.6,5,15.8,4.8,16c-0.4,0.4-0.8,0.4-1.2,0.1c-0.7-0.4-1.2-1-1.6-1.7
			C1.6,14,1.7,13.6,2,13.2c0.2-0.2,0.3-0.3,0.5-0.5c0,0,0.1-0.2,0-0.2C2.4,12,2.2,11.6,2,11.1C2,11,1.9,11,1.8,11
			c-0.2,0-0.5,0-0.7,0c-0.5,0-0.8-0.3-0.9-0.8c-0.2-0.8-0.2-1.6,0-2.4c0.1-0.5,0.5-0.7,0.9-0.7c0.2,0,0.5,0,0.7,0C1.9,7.1,2,7,2,6.9
			C2.2,6.5,2.4,6,2.6,5.6c0-0.1,0-0.2,0-0.2C2.4,5.2,2.2,5,2,4.8C1.7,4.4,1.6,4,1.9,3.6c0.4-0.7,1-1.2,1.7-1.6
			C4,1.7,4.4,1.7,4.8,2.1C5,2.2,5.2,2.4,5.3,2.6c0,0,0.2,0.1,0.2,0C6,2.4,6.4,2.2,6.9,2C7,2,7,2,7,1.9c0-0.2,0-0.5,0-0.7
			c0-0.5,0.3-0.8,0.8-0.9C8.1,0.1,8.3,0.1,8.5,0c0.3,0,0.6,0,0.8,0c0.3,0,0.5,0.1,0.8,0.1C10.7,0.3,11,0.6,11,1.1c0,0.2,0,0.5,0,0.7
			C11,2,11,2,11.1,2c0.4,0.2,0.9,0.4,1.3,0.5c0.1,0.1,0.2,0,0.3-0.1c0.2-0.2,0.4-0.4,0.6-0.6c0.3-0.3,0.7-0.3,1.1-0.1
			c0.7,0.4,1.3,1,1.7,1.7C16.4,4,16.3,4.5,16,4.8c-0.2,0.2-0.3,0.3-0.5,0.5c-0.1,0.1-0.1,0.1,0,0.2C15.6,6,15.8,6.5,16,6.9
			c0,0.1,0.1,0.1,0.2,0.1c0.2,0,0.5,0,0.7,0c0.5,0,0.9,0.3,1,0.8C17.9,8.1,18,8.3,18,8.6C18,8.8,18,9.1,18,9.4z M1.5,7.8
			c-0.1,0-0.2,0-0.3,0c-0.3,0-0.3,0.1-0.4,0.3c-0.1,0.6-0.1,1.3,0,1.9c0,0.2,0.1,0.3,0.3,0.3c0.2,0,0.5,0,0.7,0
			c0.4,0,0.7,0.2,0.8,0.6c0.2,0.4,0.3,0.9,0.5,1.3c0.2,0.4,0.1,0.7-0.2,1c-0.2,0.2-0.3,0.3-0.5,0.5c-0.1,0.1-0.2,0.2,0,0.4
			c0.4,0.6,0.8,1,1.4,1.4c0.2,0.1,0.3,0.1,0.4,0c0.2-0.2,0.4-0.4,0.5-0.5c0.3-0.2,0.6-0.3,0.9-0.2c0.5,0.2,1,0.4,1.5,0.6
			c0.3,0.1,0.5,0.4,0.5,0.7c0,0.2,0,0.5,0,0.7c0,0.2,0.1,0.3,0.3,0.4c0.7,0.1,1.3,0.1,2,0c0.2,0,0.3-0.1,0.3-0.3c0-0.3,0-0.5,0-0.8
			c0-0.3,0.2-0.6,0.5-0.7c0.5-0.2,1-0.4,1.4-0.6c0.3-0.2,0.7-0.1,1,0.2c0.2,0.2,0.3,0.3,0.5,0.5c0.2,0.2,0.2,0.2,0.4,0
			c0.6-0.4,1-0.8,1.4-1.4c0.1-0.2,0.1-0.3,0-0.4c-0.2-0.2-0.3-0.3-0.5-0.5c-0.3-0.3-0.3-0.6-0.1-1c0.2-0.4,0.4-0.9,0.5-1.3
			c0.1-0.3,0.4-0.6,0.8-0.6c0.2,0,0.5,0,0.7,0c0.2,0,0.3-0.1,0.4-0.3c0.1-0.7,0.1-1.3,0-2c0-0.2-0.1-0.3-0.3-0.3c-0.2,0-0.5,0-0.7,0
			c-0.5,0-0.7-0.2-0.9-0.6c-0.2-0.4-0.3-0.9-0.5-1.3c-0.2-0.3-0.1-0.7,0.1-1c0.2-0.2,0.3-0.3,0.5-0.5c0.2-0.2,0.2-0.3,0-0.4
			c-0.3-0.6-0.8-1-1.3-1.4c-0.2-0.2-0.3-0.1-0.5,0c-0.2,0.2-0.3,0.3-0.5,0.5c-0.2,0.2-0.5,0.3-0.8,0.2c-0.5-0.2-1-0.4-1.5-0.6
			c-0.3-0.1-0.5-0.4-0.5-0.7c0-0.2,0-0.5,0-0.7c0-0.3-0.1-0.3-0.3-0.4c-0.7-0.1-1.3-0.1-2,0C7.8,0.9,7.7,1,7.7,1.2
			c0,0.3,0,0.5,0,0.8c0,0.3-0.2,0.6-0.5,0.7c-0.5,0.2-1,0.4-1.4,0.6C5.5,3.4,5.1,3.4,4.9,3.1C4.7,2.9,4.5,2.8,4.4,2.6
			C4.2,2.4,4.1,2.4,3.9,2.5c-0.6,0.4-1,0.8-1.4,1.4c-0.1,0.2-0.1,0.3,0,0.4c0.2,0.2,0.4,0.4,0.5,0.5c0.2,0.2,0.3,0.6,0.2,0.8
			c-0.2,0.5-0.4,1-0.6,1.5C2.5,7.6,2.2,7.7,1.9,7.8C1.8,7.8,1.7,7.8,1.5,7.8z'
      />
      <path
        d='M9,13.9c-2.7,0-4.9-2.2-4.9-4.9c0-2.7,2.2-4.9,4.9-4.9c2.7,0,4.9,2.2,4.9,4.9C13.9,11.7,11.7,13.9,9,13.9z M4.8,9c0,2.3,1.9,4.2,4.2,4.2c2.3,0,4.2-1.9,4.2-4.2c0-2.3-1.9-4.2-4.2-4.2C6.7,4.8,4.8,6.7,4.8,9z'
      />
    </svg>
  );
};

SettingIcon.propTypes = {
	width: PropTypes.any,
	color: PropTypes.any
  };