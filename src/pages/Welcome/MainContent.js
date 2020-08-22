import React from 'react';
import { withRouter } from 'react-router-dom';
import RightSection from './RightSection';
import LeftSection from './LeftSection';
import Post from 'components/Post';
import { GET_USER_POSTS } from 'graphql/user';
import { GET_POST } from 'graphql/post';

function MainContent({ match }) {
  let isPublicPost = match.params.id;

  const queryOptions = {
    query: isPublicPost ? GET_POST : GET_USER_POSTS,
    variables: isPublicPost
      ? { id: isPublicPost }
      : { username: 'admin', skip: 0, limit: 5 },
    callback: isPublicPost ? 'getPost' : 'getUserPosts',
  };
  return (
    <div className='container'>
      <div className='row'>
        <main className='col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12'>
          <div id='newsfeed-items-grid'>
            <Post queryOptions={queryOptions} isAuth={false} />
          </div>
        </main>
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
}

export default withRouter(MainContent);
