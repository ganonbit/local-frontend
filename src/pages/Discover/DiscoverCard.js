import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const DiscoverCard = ({ image, description, onClickHandler, index }) => {
  return (
    <div
      className='col-md-4 p-1'
      tabIndex='0'
      role='button'
      onKeyDown={() => onClickHandler(index)}
      onClick={() => onClickHandler(index)}
    >
      <div className='grid-caption-wrap'>
        <div className='grid-caption'>
          <div className='caption-detail'>
            <p>{description}</p>
          </div>
          {/* <div className='caption-ftr'>time</div> */}
        </div>
        <LazyLoadImage src={image} alt='notifi' />
      </div>
    </div>
  );
};

DiscoverCard.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.any,
  onClickHandler: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
export default DiscoverCard;
