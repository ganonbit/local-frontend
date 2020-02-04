import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Modal, ModalBody } from 'react-bootstrap';

import * as Routes from 'routes';

const AuthConfirmation = props => {
  const { show, onHide, history } = props;

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      show={show}
    >
      <div className='loginuser-modal'>
        <Modal.Header className='modal-header-title border-bottom-0 p-1'>
          <Modal.Title id='contained-modal-title-vcenter'>
            <h3 className='px-2 py-1 mb-0 d-block'>
              <b>Not Logged In</b>
            </h3>
          </Modal.Title>
        </Modal.Header>
        <ModalBody>
          <h6 className='mb-0 text-uppercase'>Please login to continue.</h6>
        </ModalBody>
        <Modal.Footer>
          <form className='needs-validation' method='post'>
            <div className='form-row'>
              <div className='col text-center d-flex justify-content-center align-items-center'>
                <Link
                  className='btn user-btn d-inline-block mx-2 py-3 px-5'
                  to={{
                    pathname: Routes.SIGN_IN,
                    state: {
                      publicPostUri: history.location.pathname,
                    },
                  }}
                >
                  Log In
                </Link>
                <button
                  type='button'
                  className='btn user-btn d-inline-block mx-2 py-3 px-5'
                  onClick={() => onHide()}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </Modal.Footer>
      </div>
    </Modal>
  );
};
AuthConfirmation.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(AuthConfirmation);
