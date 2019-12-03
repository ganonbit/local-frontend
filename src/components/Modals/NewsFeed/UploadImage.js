import React from 'react';
import { Modal, ModalBody } from 'react-bootstrap';
import { SendIcon } from '../../icons/index';

const UploadImageModal = ({ isShowing, hide, handleImageUpload }) => (
	<Modal
		show={isShowing}
		onHide={() => hide()}
		dialogClassName='window-popup update-header-photo'
	>
		<Modal.Header closeButton>
			<h6 className='title'>Upload Photo</h6>
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
							<div className='upload-photo-item'>
								{/* <svg XlinkHref="svg-icons/sprites/icons.svg#olymp-computer-icon" /> */}
								<div className='upload-box'>
									<SendIcon
										width='50'
										color='grey[300]'
										className='olymp-computer-icon'
									/>
									<input
										type='file'
										id='multi'
										onChange={e => handleImageUpload(e)}
									/>
								</div>
								<h6>Upload Photo</h6>
								<span>Browse your computer.</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</ModalBody>
	</Modal>
);
export default UploadImageModal;
