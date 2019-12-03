import React, { Component } from 'react';

export default class AuthorPage extends Component {
	render() {
		return (
			<div className='author-page author vcard inline-items more'>
				<div className='author-thumb'>
					<img alt='author' src='img/author-page.jpg' className='avatar' />
					<span className='icon-status online'></span>
					<div className='more-dropdown more-with-triangle'>
						<div className='mCustomScrollbar' data-mcs-theme='dark'>
							<div className='ui-block-title ui-block-title-small'>
								<h6 className='title'>Your Account</h6>
							</div>

							<ul className='account-settings'>
								<li>
									<a href='29-YourAccount-AccountSettings.html'>
										<svg
											className='olymp-menu-icon'
											xlinkHref='svg-icons/sprites/icons.svg#olymp-menu-icon'
										/>

										<span>Profile Settings</span>
									</a>
								</li>
								<li>
									<a href='36-FavPage-SettingsAndCreatePopup.html'>
										<svg
											className='olymp-star-icon left-menu-icon'
											data-toggle='tooltip'
											data-placement='right'
											data-original-title='FAV PAGE'
											xlinkHref='svg-icons/sprites/icons.svg#olymp-star-icon'
										/>

										<span>Create Fav Page</span>
									</a>
								</li>
								<li>
									<a href='/login' onClick={() => localStorage.clear()}>
										<svg
											className='olymp-logout-icon'
											xlinkHref='svg-icons/sprites/icons.svg#olymp-logout-icon'
										/>

										<span>Log Out</span>
									</a>
								</li>
							</ul>

							<div className='ui-block-title ui-block-title-small'>
								<h6 className='title'>Chat Settings</h6>
							</div>

							<ul className='chat-settings'>
								<li>
									<a href='#1'>
										<span className='icon-status online'></span>
										<span>Online</span>
									</a>
								</li>
								<li>
									<a href='#1'>
										<span className='icon-status away'></span>
										<span>Away</span>
									</a>
								</li>
								<li>
									<a href='#1'>
										<span className='icon-status disconected'></span>
										<span>Disconnected</span>
									</a>
								</li>

								<li>
									<a href='#1'>
										<span className='icon-status status-invisible'></span>
										<span>Invisible</span>
									</a>
								</li>
							</ul>

							<div className='ui-block-title ui-block-title-small'>
								<h6 className='title'>Custom Status</h6>
							</div>

							<form className='form-group with-button custom-status'>
								<input
									className='form-control'
									placeholder=''
									type='text'
									defaultValue='Space Cowboy'
								/>

								<button className='bg-purple'>
									<svg
										className='olymp-check-icon'
										xlinkHref='svg-icons/sprites/icons.svg#olymp-check-icon'
									/>
								</button>
							</form>

							<div className='ui-block-title ui-block-title-small'>
								<h6 className='title'>About Olympus</h6>
							</div>

							<ul>
								<li>
									<a href='#1'>
										<span>Terms and Conditions</span>
									</a>
								</li>
								<li>
									<a href='#1'>
										<span>FAQs</span>
									</a>
								</li>
								<li>
									<a href='#1'>
										<span>Careers</span>
									</a>
								</li>
								<li>
									<a href='#1'>
										<span>Contact</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<a href='02-ProfilePage.html' className='author-name fn my-auto'>
					<div className='author-title author-title-custom'>
						James Spiegel{' '}
						{/* <svg
                            className="olymp-dropdown-arrow-icon"
                            xlinkHref="svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"
                        /> */}
					</div>
					<span className='author-subtitle author-subTitle-custom'>
						SPACE COWBOY
					</span>
				</a>
			</div>
		);
	}
}
