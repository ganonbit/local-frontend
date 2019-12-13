import React from 'react';

export default function Intro() {
  return (
    <>
      <div className='ui-block'>
        <div className='ui-block-title ui-block-post'>
          <h6 className='title'>About</h6>
          {/* <a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a> */}
        </div>
        <div className='ui-block-content'>
          {/* <!-- W-Personal-Info --> */}
          <ul className='widget w-personal-info item-block'>
            <li>
              <span className='text'>
                I am an avocado expert whose goal is to spread my love of
                avocados from Mexico!
              </span>
            </li>
            <li>
              <span className='title'>Created:</span>
              <span className='text'>December 5th, 2019</span>
            </li>
            <li>
              <span className='title'>Based in:</span>
              <span className='text'>Dallas, TX</span>
            </li>
          </ul>
          {/* <div className='widget w-socials'>
            <h6 className='title'>Other Networks:</h6>
            <a href='#' className='social-item bg-facebook'>
              Facebook
            </a>
            <a href='#' className='social-item bg-twitter'>
              Twitter
            </a>
          </div> */}
          
        </div>
      </div>

      <div className='ui-block-menu ui-block-menu-left'>
        <ul className='d-flex'>
          <li>
            <a href='#'>Privacy</a>
          </li>
          <li>
            <a href='#'>Terms</a>
          </li>
          <li>
            <a href='#'>Cookies</a>
          </li>
        </ul>
        <h5>Avocado Nation © 2019</h5>
        <img
          src='https://res.cloudinary.com/weare270b/image/upload/v1575849597/static/avocado-primary-logo_y2ribz.png'
          alt='avocado nation logo'
        />
      </div>
    </>
  );
}
