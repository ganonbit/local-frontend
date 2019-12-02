import React from 'react';
import { Modal, ModalBody } from 'react-bootstrap';
import { SendIcon } from '../../icons/index';

const UploadImageModal = ({
	isShowing,
	hide,
	toggleModel,
	handleImageUpload,
}) => (
	<Modal
		show={isShowing}
		onHide={() => hide()}
		dialogClassName='window-popup update-header-photo'>
		<Modal.Header closeButton>
			<h6 className='title'>Update Header Photo</h6>
		</Modal.Header>
		<ModalBody>
			<div
				className=''
				id='update-header-photo'
				tabindex='-1'
				role='dialog'
				aria-labelledby='update-header-photo'
				aria-hidden='true'>
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
										onChange={e => handleImageUpload(e)}
									/>
								</div>
								<h6>Upload Photo</h6>
								<span>Browse your computer.</span>
							</a>

							<a
								href='#1'
								className='upload-photo-item'
								data-toggle='modal'
								data-target='#choose-from-my-photo'>
								<SendIcon
									width='28'
									color='grey[300]'
									className='olymp-computer-icon'
								/>
								<h6 onClick={() => toggleModel()}>
									Choose from My Photos
								</h6>
								<span>Choose from your uploaded photos</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</ModalBody>
	</Modal>
);
export default UploadImageModal;
