import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Root = styled.div`
  width: ${p => (p.size ? `${p.size}px` : '40px')};
  height: ${p => (p.size ? `${p.size}px` : '40px')};
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Avatar = ({ size, image }) => (
  <Root size={size}>
    {image ? (
      <Image src={image} />
    ) : (
      <Image src='https://res.cloudinary.com/weare270b/image/upload/v1576220262/static/Image_from_iOS_1_bnaxnc.jpg' />
    )}
  </Root>
);

Avatar.propTypes = {
  size: PropTypes.number,
  image: PropTypes.string,
};

export default Avatar;
