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
                    src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/top-header1.jpg'
                    alt='nature'
                  />
                )}
              </div>
              <div className='profile-section'>
                <div className='row'>
                  <div className='col col-lg-5 col-md-5 col-sm-12 col-12'>
                    <ul className='profile-menu'>
                      <li>
                        <Link to='/' className='active'>
                          Timeline
                        </Link>
                      </li>
                      <li>
                        <Link to='/'>About</Link>
                      </li>
                      <li>
                        <Link to='/'>Friends</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='col col-lg-5 ml-auto col-md-5 col-sm-12 col-12'>
                    <ul className='profile-menu'>
                      <li>
                        <Link to='/'>Photos</Link>
                      </li>
                      <li>
                        <Link to='/'>Videos</Link>
                      </li>
                      <li>
                        <div className='more'>
                          {/* <svg className="olymp-three-dots-icon"><use xlink: href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg> */}
                          <ul className='more-dropdown more-with-triangle'>
                            <li>
                              <Link to='/'>Report Profile</Link>
                            </li>
                            <li>
                              <Link to='/'>Block Profile</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='top-header-author'>
                <Link to='/' className='author-thumb'>
                  {user.image ? (
                    <img src={user.coverImage} alt='nature' />
                  ) : (
                    <img
                      src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/author-main1.jpg'
                      alt='nature'
                    />
                  )}
                </Link>
                <div className='author-content'>
                  <Link to='/' className='h4 author-name'>
                    {`${user.firstName} ${user.lastName}`}
                  </Link>
                  <div className='country'>San Francisco, CA</div>
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
