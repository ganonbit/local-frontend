import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
export default function ActivityFeed() {
	return (
		<div className='ui-block'>
			<div className='ui-block-title block-title-bg'>
				<h6 className='title'>Activity Feed</h6>
				<a href='#1' className='more'>
					<FontAwesomeIcon icon={faEllipsisV} color='white' />
				</a>
			</div>

			<ul className='widget w-activity-feed notification-list'>
				<li>
					<div className='author-thumb'>
						<img src='img/avatar49-sm.jpg' alt='author' />
					</div>
					<div className='notification-event'>
						<a href='#1' className='h6 notification-friend'>
							Marina Polson
						</a>{' '}
						commented on Jason Mark’s
						<a href='#1' className='notification-link'>
							photo.
						</a>
						.
						<span className='notification-date'>
							<time className='entry-date updated' dateTime='2004-07-24T18:18'>
								2 mins ago
							</time>
						</span>
					</div>
				</li>

				<li>
					<div className='author-thumb'>
						<img src='img/avatar9-sm.jpg' alt='author' />
					</div>
					<div className='notification-event'>
						<a href='#1' className='h6 notification-friend'>
							Jake Parker{' '}
						</a>{' '}
						liked Nicholas Grissom’s{' '}
						<a href='#1' className='notification-link'>
							status update.
						</a>
						.
						<span className='notification-date'>
							<time className='entry-date updated' dateTime='2004-07-24T18:18'>
								5 mins ago
							</time>
						</span>
					</div>
				</li>

				<li>
					<div className='author-thumb'>
						<img src='img/avatar50-sm.jpg' alt='author' />
					</div>
					<div className='notification-event'>
						<a href='#1' className='h6 notification-friend'>
							Mary Jane Stark{' '}
						</a>{' '}
						added 20 new photos to her{' '}
						<a href='#1' className='notification-link'>
							gallery album.
						</a>
						.
						<span className='notification-date'>
							<time className='entry-date updated' dateTime='2004-07-24T18:18'>
								12 mins ago
							</time>
						</span>
					</div>
				</li>

				<li>
					<div className='author-thumb'>
						<img src='img/avatar51-sm.jpg' alt='author' />
					</div>
					<div className='notification-event'>
						<a href='#1' className='h6 notification-friend'>
							Nicholas Grissom{' '}
						</a>{' '}
						updated his profile{' '}
						<a href='#1' className='notification-link'>
							photo
						</a>
						.
						<span className='notification-date'>
							<time className='entry-date updated' dateTime='2004-07-24T18:18'>
								1 hour ago
							</time>
						</span>
					</div>
				</li>
				<li>
					<div className='author-thumb'>
						<img src='img/avatar48-sm.jpg' alt='author' />
					</div>
					<div className='notification-event'>
						<a href='#1' className='h6 notification-friend'>
							Marina Valentine{' '}
						</a>{' '}
						commented on Chris Greyson’s{' '}
						<a href='#1' className='notification-link'>
							status update
						</a>
						.
						<span className='notification-date'>
							<time className='entry-date updated' dateTime='2004-07-24T18:18'>
								1 hour ago
							</time>
						</span>
					</div>
				</li>

				<li>
					<div className='author-thumb'>
						<img src='img/avatar52-sm.jpg' alt='author' />
					</div>
					<div className='notification-event'>
						<a href='#1' className='h6 notification-friend'>
							Green Goo Rock{' '}
						</a>{' '}
						posted a{' '}
						<a href='#1' className='notification-link'>
							status update
						</a>
						.
						<span className='notification-date'>
							<time className='entry-date updated' dateTime='2004-07-24T18:18'>
								1 hour ago
							</time>
						</span>
					</div>
				</li>
				<li>
					<div className='author-thumb'>
						<img src='img/avatar10-sm.jpg' alt='author' />
					</div>
					<div className='notification-event'>
						<a href='#1' className='h6 notification-friend'>
							Elaine Dreyfuss{' '}
						</a>{' '}
						liked your{' '}
						<a href='#1' className='notification-link'>
							blog post
						</a>
						.
						<span className='notification-date'>
							<time className='entry-date updated' dateTime='2004-07-24T18:18'>
								2 hours ago
							</time>
						</span>
					</div>
				</li>

				<li>
					<div className='author-thumb'>
						<img src='img/avatar10-sm.jpg' alt='author' />
					</div>
					<div className='notification-event'>
						<a href='#1' className='h6 notification-friend'>
							Elaine Dreyfuss{' '}
						</a>{' '}
						commented on your{' '}
						<a href='#1' className='notification-link'>
							blog post
						</a>
						.
						<span className='notification-date'>
							<time className='entry-date updated' dateTime='2004-07-24T18:18'>
								2 hours ago
							</time>
						</span>
					</div>
				</li>

				<li>
					<div className='author-thumb'>
						<img src='img/avatar53-sm.jpg' alt='author' />
					</div>
					<div className='notification-event'>
						<a href='#1' className='h6 notification-friend'>
							Bruce Peterson{' '}
						</a>{' '}
						changed his{' '}
						<a href='#1' className='notification-link'>
							profile picture
						</a>
						.
						<span className='notification-date'>
							<time className='entry-date updated' dateTime='2004-07-24T18:18'>
								15 hours ago
							</time>
						</span>
					</div>
				</li>

				<li>
					<div className='author-thumb'>
						<img src='img/avatar52-sm.jpg' alt='author' />
					</div>
					<div className='notification-event'>
						<a href='#1' className='h6 notification-friend'>
							Green Goo Rock{' '}
						</a>{' '}
						posted a{' '}
						<a href='#1' className='notification-link'>
							status update
						</a>
						.
						<span className='notification-date'>
							<time className='entry-date updated' dateTime='2004-07-24T18:18'>
								1 hour ago
							</time>
						</span>
					</div>
				</li>
				<li>
					<div className='author-thumb'>
						<img src='img/avatar10-sm.jpg' alt='author' />
					</div>
					<div className='notification-event'>
						<a href='#1' className='h6 notification-friend'>
							Elaine Dreyfuss{' '}
						</a>{' '}
						liked your{' '}
						<a href='#1' className='notification-link'>
							blog post
						</a>
						.
						<span className='notification-date'>
							<time className='entry-date updated' dateTime='2004-07-24T18:18'>
								2 hours ago
							</time>
						</span>
					</div>
				</li>

				<li>
					<div className='author-thumb'>
						<img src='img/avatar10-sm.jpg' alt='author' />
					</div>
					<div className='notification-event'>
						<a href='#1' className='h6 notification-friend'>
							Elaine Dreyfuss{' '}
						</a>{' '}
						commented on your{' '}
						<a href='#1' className='notification-link'>
							blog post
						</a>
						.
						<span className='notification-date'>
							<time className='entry-date updated' dateTime='2004-07-24T18:18'>
								2 hours ago
							</time>
						</span>
					</div>
				</li>

				<li>
					<div className='author-thumb'>
						<img src='img/avatar53-sm.jpg' alt='author' />
					</div>
					<div className='notification-event'>
						<a href='#1' className='h6 notification-friend'>
							Bruce Peterson{' '}
						</a>{' '}
						changed his{' '}
						<a href='#1' className='notification-link'>
							profile picture
						</a>
						.
						<span className='notification-date'>
							<time className='entry-date updated' dateTime='2004-07-24T18:18'>
								15 hours ago
							</time>
						</span>
					</div>
				</li>
			</ul>
		</div>
	);
}
