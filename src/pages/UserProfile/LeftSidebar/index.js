import React from 'react';
import Intro from './ProfileInfo';
// import SpotifyPlayli../RightSidebar/Badges'./SpotifyPlaylist';
import TwitterFeed from './TwitterFeed';
import LastVideo from './VideoSection';

export default function Left() {
  return (
    <div className='col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 order-md-2 col-sm-6 order-sm-2 col-xs-12 col-12'>
      <Intro />

      {/* <Badges /> */}

      {/* <SpotifyPlaylist /> */}

      {/* <TwitterFeed /> */}

      {/* <LastVideo /> */}
    </div>
  );
}
