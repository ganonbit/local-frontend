import React from 'react';
import { Modal, ModalBody } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/ModalHeader';

const ChooseImage = ({ isShowing, hide }) => {
  let pictures = [
    'https://res.cloudinary.com/weare270b/image/upload/v1573196439/user/12fdd9d3-e63a-4608-8e13-191fe69ec3c3.png',
    'https://res.cloudinary.com/weare270b/image/upload/v1573196439/user/12fdd9d3-e63a-4608-8e13-191fe69ec3c3.png',
    'https://res.cloudinary.com/weare270b/image/upload/v1573196439/user/12fdd9d3-e63a-4608-8e13-191fe69ec3c3.png',
    'https://res.cloudinary.com/weare270b/image/upload/v1573196439/user/12fdd9d3-e63a-4608-8e13-191fe69ec3c3.png',
    'https://res.cloudinary.com/weare270b/image/upload/v1573196439/user/12fdd9d3-e63a-4608-8e13-191fe69ec3c3.png',
    'https://res.cloudinary.com/weare270b/image/upload/v1573196439/user/12fdd9d3-e63a-4608-8e13-191fe69ec3c3.png',
    'https://res.cloudinary.com/weare270b/image/upload/v1573196439/user/12fdd9d3-e63a-4608-8e13-191fe69ec3c3.png',
    'https://res.cloudinary.com/weare270b/image/upload/v1573196439/user/12fdd9d3-e63a-4608-8e13-191fe69ec3c3.png',
    'https://res.cloudinary.com/weare270b/image/upload/v1573196439/user/12fdd9d3-e63a-4608-8e13-191fe69ec3c3.png',
  ];
  return (
    <Modal
      show={isShowing}
      onHide={() => hide()}
      dialogClassName='modal-dialog window-popup choose-from-my-photo'
    >
      <ModalHeader>
        <h6 className='title'>Choose from My Photos</h6>

        <ul className='nav nav-tabs' role='tablist'>
          <li className='nav-item'>
            <a
              className='nav-link active'
              data-toggle='tab'
              href='#home'
              role='tab'
              aria-expanded='true'
            >
              <svg
                className='olymp-photos-icon'
                XlinkHref='svg-icons/sprites/icons.svg#olymp-photos-icon'
              />
            </a>
          </li>
          <li className='nav-item'>
            <a
              className='nav-link'
              data-toggle='tab'
              href='#profile'
              role='tab'
              aria-expanded='false'
            >
              <svg
                className='olymp-albums-icon'
                XlinkHref='svg-icons/sprites/icons.svg#olymp-albums-icon'
              />
            </a>
          </li>
        </ul>
      </ModalHeader>
      <ModalBody>
        <div className='tab-content'>
          <div
            className='tab-pane active'
            id='home'
            role='tabpanel'
            aria-expanded='true'
          >
            {pictures.map((url, index) => (
              <div
                className='choose-photo-item'
                data-mh='choose-item'
                key={index}
              >
                <div className='radio'>
                  <label className='custom-radio'>
                    <img src={url} alt='Images' />
                    <input type='radio' name='optionsRadios' />
                  </label>
                </div>
              </div>
            ))}

            <a
              href='#1'
              className='btn btn-secondary btn-lg btn--half-width'
              onClick={() => hide()}
            >
              Cancel
            </a>
            <a href='#1' className='btn btn-primary btn-lg btn--half-width'>
              Confirm Photo
            </a>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ChooseImage;
