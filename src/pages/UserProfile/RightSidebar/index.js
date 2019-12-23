import React from 'react';
import LastPhotos from './PhotoSection';
import FavouritePages from './FavouritePages';
import Friends from './Friends';
import ProfileBadges from './ProfileBadges';

export default function Right() {
  return (
    <div className='col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 order-sm-3 col-xs-12 order-xs-3 col-12'>
      <ProfileBadges />
      {/* <Friends /> */}
      <LastPhotos />
      {/* <FavouritePages /> */}
    </div>
  );
}
