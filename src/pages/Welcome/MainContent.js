import React from 'react';
import { Link } from 'react-router-dom';
import RightSection from './RightSection';
import LeftSection from './LeftSection';
import Post from 'components/Post';

export default function MainContent() {
  return (
    <div className='container'>
      <div className='row'>
        <main className='col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12'>
          <div id='newsfeed-items-grid'>
            <Post userId='5de5a8847da0b58ef0fb2263' isAuth={false} />
          </div>

          <Link
            id='load-more-button'
            className='btn btn-control btn-more'
            to=''
          ></Link>
        </main>

        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
}
