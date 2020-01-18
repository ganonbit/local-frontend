import React, { useState } from 'react';
import PostControlButton from '../Common/PostControlButton';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import PostContent from './PostContent';
import Comments from 'components/Comments/Comments';
import AddComment from 'components/Comments/AddComment';

import { useStore } from 'store';

const SinglePost = ({ post, isAuth }) => {
  const [{ auth }] = useStore();
  const [isCommentOpen, setCommentOpen] = useState(true);
  const toggleComment = () => setCommentOpen(!isCommentOpen);
  const articleClass = 'hentry post';

  return (
    <div key={post.id} className='ui-block'>
      <article className={articleClass}>
        <PostHeader
          author={post.author}
          createdAt={post.createdAt}
          postId={post.id}
          isAuth={isAuth}
          content={post.content}
          image={post.image}
          imagePublicId={post.imagePublicId}
        />
        {/* {props.newPost ? <NewPost content={props.content} /> : <PostVideo tag={props.tag} body={props.body} />} */}
        <PostContent content={post.content} image={post.image} />
        <PostFooter
          toggle={toggleComment}
          comments={post.comments}
          author={post.author}
          postId={post.id}
          likes={post.likes}
          isAuth={isAuth}
          post={post}
        />
        <PostControlButton
          toggle={toggleComment}
          comments={post.comments}
          author={post.author}
          postId={post.id}
          likes={post.likes}
          isAuth={isAuth}
          post={post}
        />
      </article>
      {isAuth && isCommentOpen && <Comments post={post} />}
      {isAuth && (
        <AddComment
          authorId={auth.user.id}
          userId={post.author.id}
          author={auth.user}
          postId={post.id}
          onCancel={toggleComment}
          user={post.author}
          post={post}
        />
      )}
    </div>
  );
};
export default SinglePost;
