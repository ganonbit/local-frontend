import React from 'react';
import { Link } from 'react-router-dom';
import { CameraIcon } from '../icons/index';
import OverlayTriggers from '../Common/ToolTip';

const Footer = ({ toggle, imagePreview }) => (
  <div className='add-options-message'>
    <OverlayTriggers toolTipText='ADD PHOTO'>
      <div className='options-message' onClick={() => toggle()}>
        <CameraIcon className='olymp-camera-icon' />
      </div>
    </OverlayTriggers>
    <button className='btn btn-primary btn-md-2'>
      Share Your Avocado Love
    </button>
  </div>
);
export default Footer;
