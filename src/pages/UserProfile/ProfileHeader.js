import React from 'react';
import { Link } from 'react-router-dom';
const ProfileHeader = ({ user }) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
          <div className='ui-block'>
            <div className='top-header'>
              <div className='top-header-thumb'>
                {user.coverImage ? (
                  <img src={user.coverImage} alt='nature' />
                ) : (
                  <img
                    src='https://res.cloudinary.com/weare270b/image/upload/v1576214852/static/profile-bg_edozor.png'
                    alt='nature'
                  />
                )}
              </div>
              <div className='top-header-author'>
                <Link to='/' className='author-thumb'>
                  {user.image ? (
                    <img src={user.image} alt='nature' />
                  ) : (
                    <img
                      src='https://res.cloudinary.com/weare270b/image/upload/v1576220262/static/Image_from_iOS_1_bnaxnc.jpg'
                      alt='nature'
                    />
                  )}
                </Link>
                <div className='author-content'>
                  <Link to='/' className='h4 author-name'>
                    {`${user.firstName} ${user.lastName}`}
                  </Link>
                  <div className='author-location'>{user.username}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileHeader;
