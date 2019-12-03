import React from 'react';
import moment from 'moment';
import { generatePath } from 'react-router-dom';

import Avatar from 'components/Avatar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import * as Routes from 'routes';

export default function PostHeader(props) {
	const { author, createdAt } = props;
	const rawTime = parseInt(createdAt);
	const postDate = new Date(rawTime);

	return (
		<div className='post__author author vcard inline-items'>
			<a
				href={generatePath(Routes.USER_PROFILE, {
					username: author.username,
				})}
			>
				<Avatar image={author.image} />
			</a>
			<div className='author-date'>
				<a
					className='h6 post__author-name fn'
					href={generatePath(Routes.USER_PROFILE, {
						username: author.username,
					})}
				>
					{author.firstName} {author.lastName}
				</a>
				<div className='post__date'>
					<time className='published' dateTime={postDate}>
						{moment(postDate, 'YYYYMMDDHHmms').fromNow()}
					</time>
				</div>
			</div>

			<div className='more'>
				<FontAwesomeIcon
					className='olymp-three-dots-icon'
					size='lg'
					color='black'
					icon={faEllipsisV}
					style={{ height: '12px' }}
				/>
				<ul className='more-dropdown'>
					<li>
						<a href='#2'>Edit Post</a>
					</li>
					<li>
						<a href='#2'>Delete Post</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
