import React from 'react';
import { Link } from 'react-router-dom';
import RightSection from './RightSection';
import LeftSection from './LeftSection';
import Post from 'components/Post';
import { GET_USER_POSTS } from 'graphql/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

export default function MainContent() {
  const queryOptions = {
    query: GET_USER_POSTS,
    variables: { username: 'selma', skip: 0, limit: 5 },
    callback: 'getUserPosts',
  };
  return (
    <div className='container'>
      <div className='row'>
        <main className='col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12'>
          <div id='newsfeed-items-grid'>
            <Post queryOptions={queryOptions} isAuth={false} />
          </div>

          <Link
            id='load-more-button'
            className='btn btn-control btn-more'
            to='#'
          >
            <FontAwesomeIcon
              className='olymp-three-dots-icon'
              size='lg'
              color='white'
              icon={faEllipsisH}
            />
          </Link>
        </main>

        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
}
