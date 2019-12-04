import React, { Component } from 'react';
import RecommendedPages from 'components/Widget/RecommendedPages';
import FriendsSuggestions from 'components/Widget/FriendsSuggestions';
import ActivityFeed from 'components/Widget/ActivityFeed';
import { CreatePost } from 'components/CreatePost';
import Post from 'components/Post';

export default class Home extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          {/* <div className="page-has-left-panels page-has-right-panels pr-0"> */}
          <aside className='col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 order-md-2 col-sm-12 order-sm-3 col-xs-12 order-xs-2 order-1 col-12'>
            <RecommendedPages />
          </aside>
          {/* </div> */}

          <aside className='col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 order-md-1 col-sm-12 order-sm-1 col-xs-12 order-xs-1 col-12'>
            <CreatePost />
            <Post />
          </aside>

          <aside className='col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 order-md-2 col-sm-12 order-sm-2 col-xs-12 order-xs-3 col-12'>
            <FriendsSuggestions />
            <ActivityFeed />
          </aside>
        </div>
      </div>
    );
  }
}
