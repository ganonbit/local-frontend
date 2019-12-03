import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
function ResetPassword(props) {
	const [show, setShow] = useState(props.show);

	const handleClose = () => {
		props.handleReset();
		setShow(false);
	};
	// const handleShow = () => setShow(true);
	const [tempAPISuccess, setSuccess] = useState(false);

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Body>
					<div role='document'>
						<div className='modal-content'>
							<a
								href='123'
								className='close icon-close'
								data-dismiss='modal'
								aria-label='Close'
							>
								<svg
									className='olymp-close-icon'
									xlinkHref='svg-icons/sprites/icons.svg#olymp-close-icon'
								/>
							</a>

							<div className='modal-header'>
								<h6 className='title'>Restore your Password</h6>
							</div>

							<div className='modal-body'>
								<form>
									<p>
										Enter your email and click the send code button. You’ll
										receive a code in your email. Please use that code below to
										change the old password for a new one.
									</p>
									<div className='form-group label-floating'>
										<label className='control-label'>Your Email</label>
										<input
											className='form-control'
											placeholder=''
											type='email'
											// value="james-spiegel@yourmail.com"
										/>
									</div>
									<button
										onClick={() => {
											setTimeout(() => {
												setSuccess(true);
											}, 3000);
										}}
										className='btn btn-green btn-lg full-width'
									>
										Send me the Code
									</button>
									{tempAPISuccess ? (
										<div>
											{' '}
											<div className='form-group label-floating'>
												<label className='control-label'>Enter the Code</label>
												<input
													className='form-control'
													placeholder=''
													type='text'
													value=''
												/>
											</div>
											<div className='form-group label-floating'>
												<label className='control-label'>
													Your New Password
												</label>
												<input
													className='form-control'
													placeholder=''
													type='password'
													value='olympus'
												/>
											</div>
											<button className='btn btn-primary btn-lg full-width'>
												Change your Password!
											</button>{' '}
										</div>
									) : null}
								</form>
							</div>
						</div>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default ResetPassword;
