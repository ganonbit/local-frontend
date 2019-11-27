import React from 'react'
import { Link } from 'react-router-dom'
import { CameraIcon } from '../icons/index'
import OverlayTriggers from '../Common/ToolTip'

const Footer = ({ toggle }) => (
  <div className="add-options-message">
    <OverlayTriggers toolTipText="ADD PHOTOS">
      <Link to="/" className="options-message" onClick={() => toggle()}>
        <CameraIcon className="olymp-camera-icon" />
      </Link>
    </OverlayTriggers>
    <button className="btn btn-primary btn-md-2">Post Status</button>
    <button className="btn btn-md-2 btn-border-think btn-transparent c-grey">
      Preview
    </button>
  </div>
)
export default Footer
