import React from 'react';
import { Link } from 'react-router-dom';
const MainLayout = ({ children }) => {
  return (
    <>
      <div className='main-header'>
        <div className='content-bg-wrap bg-account'></div>
        <div className='container'>
          <div className='row'>
            <div className='col col-lg-8 m-auto col-md-8 col-sm-12 col-12'>
              <div className='main-header-content'>
                <h1>Your Avo Dashboard</h1>
                <p>
                  Welcome to your account dashboard! Here, you will find
                  everything that will help you customize your Avocado Nation
                  profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12'>
            <div className='ui-block'>{children} </div>
          </div>
          <div className='col col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 col-12 responsive-display-none'>
            <div className='ui-block'>
              {/* <!-- Your Profile  --> */}
              <div className='your-profile'>
                <div className='ui-block-title ui-block-title-small'>
                  <h6 className='title'>Your PROFILE</h6>
                </div>
                <div id='accordion' role='tablist' aria-multiselectable='true'>
                  <div className='card'>
                    <div className='card-header' role='tab' id='headingOne'>
                      <h6 className='mb-0'>
                        <a
                          data-toggle='collapse'
                          data-parent='#accordion'
                          href='#collapseOne'
                          aria-expanded='true'
                          aria-controls='collapseOne'
                        >
                          Profile Settings
                          {/* <svg className="olymp-dropdown-arrow-icon">
                                                <use xlinkhref="svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"></use>
                                            </svg> */}
                        </a>
                      </h6>
                    </div>
                    <div
                      id='collapseOne'
                      className='collapse show'
                      role='tabpanel'
                      aria-labelledby='headingOne'
                    >
                      <ul className='your-profile-menu'>
                        <li>
                          <Link to='/setting'>Personal Information</Link>
                        </li>
                        <li>
                          <Link to='/settings/account'>Account Settings</Link>
                        </li>
                        <li>
                          <Link to='/settings/changepassword'>
                            Change Password
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='ui-block-title'>
                  <Link to='/settings/notification'>Notifications</Link>
                  <a href='#1' className='items-round-little bg-primary'>
                    8
                  </a>
                </div>
                <div className='ui-block-title'>
                  <Link to='/settings/friendrequest' className='h6 title'>
                    Friend Requests
                  </Link>
                  <a href='#1' className='items-round-little bg-blue'>
                    4
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainLayout;
