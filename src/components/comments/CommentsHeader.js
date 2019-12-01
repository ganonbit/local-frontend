import React from 'react';
import moment from 'moment';
import { generatePath } from 'react-router-dom';

import Avatar from 'components/Avatar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import * as Routes from 'routes';

export default function CommentsHeader(props) {
	const { author, createdAt } = props;
	const rawTime = parseInt(createdAt);
	const commentDate = new Date(rawTime);
	console.log(author);
	console.log(author.username);

	return (
		<>
			<div className='post__author author vcard inline-items'>
				<a
					href={generatePath(Routes.USER_PROFILE, {
						username: author.username,
					})}>
					<Avatar image={author.image} />
				</a>
				<div className='author-date'>
					<a className='h6 post__author-name fn' href='#1'>
						{author.firstName} {author.lastName}
					</a>
					<div className='post__date'>
						<time className='published' dateTime={commentDate}>
							{moment(commentDate, 'YYYYMMDDHHmms').fromNow()}
						</time>
					</div>
				</div>

				<a onClick={() => alert('Hey..')} href='#1' className='more'>
					<FontAwesomeIcon
						className='olymp-three-dots-icon'
						size='sm'
						color='black'
						icon={faEllipsisV}
						style={{ height: '10px' }}
					/>
				</a>
			</div>
		</>
	);
}
