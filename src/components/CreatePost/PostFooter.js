import React from 'react';
import { Link } from 'react-router-dom';
import { CameraIcon } from '../icons/index';
import OverlayTriggers from '../Common/ToolTip';

const Footer = ({ toggle, imagePreview }) => (
  <div className='add-options-message'>
    <OverlayTriggers toolTipText='ADD PHOTO'>
      <Link to='/' className='options-message' onClick={() => toggle()}>
        <CameraIcon className='olymp-camera-icon' />
      </Link>
    </OverlayTriggers>
    {/* <span className='comments-thumbnail ml-5'>
      {imagePreview && <img src={imagePreview} alt='' />}
    </span> */}
    <button className='btn btn-primary btn-md-2'>
      Share Your Avocado Love
    </button>
  </div>
);
export default Footer;
