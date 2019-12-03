import React, { useState } from 'react';
import { Modal, ModalBody } from 'react-bootstrap';
import { SendIcon } from '../../icons/index';
import { MAX_POST_IMAGE_SIZE } from 'constants/ImageSize';
const UploadImageModal = ({
  isShowing,
  hide,
  toggleModel,
  handleImageUpload,
}) => {
  const [error, setError] = useState('');
  let handlePostImageSize = e => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.size >= MAX_POST_IMAGE_SIZE) {
      setError(
        `File size should be less then ${MAX_POST_IMAGE_SIZE / 1000000}MB`
      );
      return;
    }

    handleImageUpload(e);
    setError('');
  };
  return (
    <Modal
      show={isShowing}
      onHide={() => hide()}
      dialogClassName='window-popup update-header-photo'
    >
      <Modal.Header closeButton>
        <h6 className='title'>Add Photos</h6>
      </Modal.Header>
      <ModalBody>
        <div
          className=''
          id='update-header-photo'
          tabindex='-1'
          role='dialog'
          aria-labelledby='update-header-photo'
          aria-hidden='true'
        >
          <div className='' role='document'>
            <div className='modal-content'>
              <div className='modal-body'>
                <a href='#1' className='upload-photo-item'>
                  {/* <svg XlinkHref="svg-icons/sprites/icons.svg#olymp-computer-icon" /> */}
                  <div className='upload-box'>
                    <SendIcon
                      width='28'
                      color='grey[300]'
                      className='olymp-computer-icon'
                    />
                    <input
                      type='file'
                      name='image'
                      id='multi'
                      onChange={e => handlePostImageSize(e)}
                    />
                  </div>
                  <h6>Upload Photo</h6>
                  <span>Browse your computer.</span>
                  <p>{error}</p>
                </a>

                <a
                  href='#1'
                  className='upload-photo-item'
                  data-toggle='modal'
                  data-target='#choose-from-my-photo'
                >
                  <SendIcon
                    width='28'
                    color='grey[300]'
                    className='olymp-computer-icon'
                  />
                  <h6 onClick={() => toggleModel()}>Choose from My Photos</h6>
                  <span>Choose from your uploaded photos</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};
export default UploadImageModal;
