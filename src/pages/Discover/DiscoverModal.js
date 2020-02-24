import React from 'react';

import { Modal } from 'react-bootstrap';

let DiscoverModal = ({ show, onHide, image, description }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={() => onHide(false)}
        dialogClassName='modal-xl modal-dialog-content'
        aria-labelledby='example-custom-modal-styling-title'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-custom-modal-styling-title'>
            <h5>Title</h5>
            <span>@username</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-md-7'>
              <img
                src={image}
                className='stacklapopup-quadrant-image'
                alt='img'
              />
            </div>
            <div className='col-md-5'>
              <p>{description}</p>
              <div className='post-likes'>time</div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default DiscoverModal;
