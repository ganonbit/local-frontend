import React from 'react';
import OverlayTriggers from '../Common/ToolTip';

const SidebarContent = ({ onSetSidebarOpen }) => {
	return (
		<div className='fixed-sidebar-left sidebar--small' id='sidebar-left'>
			<a href='02-ProfilePage.html' className='logo'>
				<div className='img-wrap'>
					<img src='img/avocado-img.png' alt='Olympus' />
				</div>
			</a>

			<div className='mCustomScrollbarr' data-mcs-theme='dark'>
				<ul className='left-menu'>
					<li>
						<a href='#1' className='js-sidebar-open'>
							<OverlayTriggers
								toolTipText='OPEN MENU'
								placement='right'>
								<img
									src='img/menu-img.png'
									alt='OPEN MENU'
									onClick={() =>
										onSetSidebarOpen(
											true,
											'fixed-sidebar open'
										)
									}
								/>
							</OverlayTriggers>
						</a>
					</li>
					<li>
						<a href='03-Newsfeed.html'>
							<OverlayTriggers
								toolTipText='NEWSFEED'
								placement='right'>
								<img
									src='img/avocado-icon.png'
									alt=''
									id='UncontrolledTooltipSidebar'
								/>
							</OverlayTriggers>
						</a>
					</li>
					<li>
						<a href='16-FavPagesFeed.html'>
							<OverlayTriggers
								toolTipText='FAV PAGE'
								placement='right'>
								<img src='img/search-icon.png' alt='' />
							</OverlayTriggers>
						</a>
					</li>
					<li>
						<a href='17-FriendGroups.html'>
							<OverlayTriggers
								toolTipText='FRIEND GROUPS'
								placement='right'>
								<img src='img/star-icon.png' alt='' />
							</OverlayTriggers>
						</a>
					</li>
					<li>
						<a href='18-MusicAndPlaylists.html'>
							<OverlayTriggers
								toolTipText='MUSIC PLAYLISTS'
								placement='right'>
								<img src='img/chat-icon.png' alt='' />
							</OverlayTriggers>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default SidebarContent;
