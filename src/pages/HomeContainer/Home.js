import React from 'react';
import { CreatePost } from 'components/CreatePost';
import {
  TrendingPost,
  TrendingTopics,
  TopRatedUsers,
  AvocadoGame,
  NewsFeedAdd,
} from 'components/Widget';

import Post from 'components/Post';
import { useStore } from 'store';
const Home = () => {
  const [{ auth }] = useStore();
  return (
    <div className='container'>
      <div className='row'>
        <main class='col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12'>
          <CreatePost />
          <Post userId={auth.user.id} isAuth={true} />
        </main>
        <aside className='col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12'>
          <TrendingPost />
          <AvocadoGame />
          <NewsFeedAdd />
        </aside>

        <aside className='col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12'>
          <TrendingTopics />
          <TopRatedUsers />
        </aside>
      </div>
    </div>
  );
};
export default Home;
