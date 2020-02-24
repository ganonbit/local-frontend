import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const DiscoverCard = ({ image, description, onClickHandler }) => {
  return (
    <div
      className='col-md-4 p-1'
      onClick={() => onClickHandler(image, description)}
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

export default DiscoverCard;
