import React, { useState } from 'react';
import PostControlButton from '../Common/PostControlButton';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import PostContent from './PostContent';
import Comments from 'components/Comments/Comments';
import AddComment from 'components/Comments/AddComment';

import InfiniteScroll from 'components/InfiniteScroll';

import { useStore } from 'store';
import { Query } from 'react-apollo';
export default function Post({ queryOptions, isAuth }) {
  const [{ auth }] = useStore();
  const [isCommentOpen, setCommentOpen] = useState(true);
  const toggleComment = () => setCommentOpen(!isCommentOpen);
  const articleClass = 'hentry post';
  let postData = null;
  let postsData = null;

  const singlePost = post => {
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
        {isAuth && isCommentOpen && (
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
        {isAuth && <Comments post={post} />}
      </div>
    );
  };

  return (
    <Query
      query={queryOptions.query}
      variables={queryOptions.variables}
      notifyOnNetworkStatusChange
    >
      {({ data, loading, fetchMore, networkStatus }) => {
        if (loading && networkStatus === 1) {
          return (
            <div className='d-flex justify-content-center my-2'>
              <img
                className='flex'
                src='https://res.cloudinary.com/weare270b/image/upload/v1579191490/static/loader_eyctc7.gif'
                alt='laoding .....'
              />
            </div>
          );
        }
        if (queryOptions.callback === 'getFollowedPosts') {
          postsData = data.getFollowedPosts;
        }
        if (queryOptions.callback === 'getUserPosts') {
          postsData = data.getUserPosts;
        }
        if (queryOptions.callback === 'getPost') {
          postData = data.getPost;
        }

        if (!postsData && !postData) {
          return null;
        }
        if (postsData) {
          return (
            <InfiniteScroll
              data={postsData.posts}
              dataKey={`${queryOptions.callback}.posts`}
              count={parseInt(postsData.count)}
              variables={queryOptions.variables}
              fetchMore={fetchMore}
            >
              {data => {
                const showNextLoading =
                  loading &&
                  networkStatus === 3 &&
                  parseInt(postsData.count) !== data.length;

                return (
                  <>
                    {data.map(post => {
                      return singlePost(post);
                    })}
                    {showNextLoading && (
                      <div className='d-flex justify-content-center my-2'>
                        <img
                          className='flex'
                          src='https://res.cloudinary.com/weare270b/image/upload/v1579191490/static/loader_eyctc7.gif'
                          alt='laoding .....'
                        />
                      </div>
                    )}
                  </>
                );
              }}
            </InfiniteScroll>
          );
        } else if (postData) {
          return singlePost(postData);
        }
      }}
    </Query>
  );
}
