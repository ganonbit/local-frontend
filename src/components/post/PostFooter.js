import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faShare } from '@fortawesome/free-solid-svg-icons';

import Like from 'components/Like';

const PostFooter = props => {
	return (
		<div className='post-additional-info inline-items'>
			<span className='post-add-icon inline-items'>
				<Like
					user={props.post.author}
					postId={props.post.id}
					likes={props.post.likes}
				/>
				<span>{props.post.likes.length}</span>
			</span>

			<div className='comments-shared'>
				<a href='#1' className='post-add-icon inline-items'>
					<FontAwesomeIcon
						icon={faComment}
						onClick={() => props.showCommentHandler(true)}
					/>

					<span>{props.post.comments.length}</span>
				</a>

				<a
					onClick={() => {
						alert('share');
					}}
					href='#1'
					className='post-add-icon inline-items'>
					<FontAwesomeIcon icon={faShare} />

					<span>{props.numShares}</span>
				</a>
			</div>
		</div>
	);
};

export default PostFooter;
