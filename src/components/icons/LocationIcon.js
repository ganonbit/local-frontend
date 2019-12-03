import React from 'react';
import theme from 'theme';

/**
 * Close (X) icon
 *
 * @param {string} width
 * @param {string} color
 */
export const LocationIcon = ({ width, color }) => {
  const DEFAULT_WIDTH = '12';
  const DEFAULT_COLOR = theme.colors.primary.main;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width || DEFAULT_WIDTH}
      fill={theme.colors[color] || DEFAULT_COLOR}
      viewBox='0 0 448.011 448.011'
    >
      <path
        d='M25,0C11.191,0,0,11.194,0,25c0,23.87,25,55,25,55s25-31.13,25-55C50,11.194,38.807,0,25,0z M25,38.8   c-7.457,0-13.5-6.044-13.5-13.5S17.543,11.8,25,11.8c7.455,0,13.5,6.044,13.5,13.5S32.455,38.8,25,38.8z'
        // fill="#221F1F"
      />
      {/* <path
        d="M50.2,32.1c-6,0-10.8,4.8-10.8,10.8c0,6,4.8,10.8,10.8,10.8c6,0,10.8-4.8,10.8-10.8   C61,37,56.2,32.1,50.2,32.1z M56.4,49.2c-1.6,1.6-3.8,2.6-6.2,2.6c-2.4,0-4.6-1-6.2-2.6c-1.6-1.6-2.6-3.8-2.6-6.2   c0-2.4,1-4.6,2.6-6.2c1.6-1.6,3.8-2.6,6.2-2.6c2.4,0,4.6,1,6.2,2.6c1.6,1.6,2.6,3.8,2.6,6.2C59,45.4,58,47.6,56.4,49.2z"
        fill="#221F1F"
      /> */}
    </svg>
  );
};
