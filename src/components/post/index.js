import React, { useState } from 'react';
import PostControlButton from '../Common/PostControlButton';
// import { GooglePlay } from '../../assets/svg-icons'
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import PostContent from './MainContent';
import Comments from 'components/comments/Comments';
import AddComment from 'components/comments/AddComment';
import { useStore } from '../../store/index';
import { Query } from 'react-apollo';
import { GET_FOLLOWED_POSTS } from '../../graphql/post';

export default function MainContent(props) {
	const [{ auth }] = useStore();
	const [isCommentOpen, setCommentOpen] = useState(false);

	let showCommentHandler = show => {
		setCommentOpen(show);
	};
	const articleClass = props.newPost ? 'hentry post' : 'hentry post video';

	const variables = {
		userId: auth.user.id,
		skip: 0,
		limit: 15,
	};

	return (
		<Query query={GET_FOLLOWED_POSTS} variables={variables}>
			{({ data, loading }) => {
				return loading === true ? (
					<h1>loading...!</h1>
				) : (
					data.getFollowedPosts.posts.map(post => {
						return (
							<div key={post.id} className='ui-block'>
								<article className={articleClass}>
									<PostHeader
										author={post.author}
										image={post.image}
										createdAt={post.createdAt}
									/>
									{/* {props.newPost ? <NewPost content={props.content} /> : <PostVideo tag={props.tag} body={props.body} />} */}
									<PostContent content={post.content} image={post.image} />
									<PostFooter
										showCommentHandler={showCommentHandler}
										post={post}
										author={post.author}
										postId={post.id}
										likes={post.likes}
									/>
								</article>
								{isCommentOpen && (
									<AddComment
										authorId={auth.user.id}
										postId={post.id}
										onCancel={showCommentHandler}
									/>
								)}

								<Comments comments={post.comments} />
							</div>
						);
					})
				);
			}}
		</Query>
	);
}
