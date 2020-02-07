import React from 'react';
import { Link } from 'react-router-dom';

import * as Routes from 'routes';

const VideoSection = () => {
  function stopVideo() {
    let src = document.getElementById('video').src;
    document.getElementById('video').src = '';
    document.getElementById('video').src = src;
  }

  return (
    <div className='avocado-video-bnr welcome-video-banner mb-5'>
      <div className='container'>
        <div className='row'>
          <div className='col col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12 m-auto'>
            <div className='row'>
              <div className='col-xl-6 col-lg-6 col-md-6 mb-4'>
                <h2>Welcome to Avocado Nation,</h2>
                <p>
                  {' '}
                  a one of a kind social network with rewards for avocado fans.
                </p>
                <p>
                  We’ve hand selected some of the best avocado content out there
                  to inspire your next lunch, dinner party or appetizer and we
                  want to see your avocado masterpieces too!
                </p>
                <p>
                  So join today and start earning points for the pics you’re
                  already taking and the guac you’re already sharing.
                </p>
              </div>
              <div className='col-xl-6 col-lg-6 col-md-6 mb-4 text-center'>
                <div className='join-us text-center'>
                  <h3>
                    Create your <br />
                    own Profile!
                  </h3>
                  <div className='text-center'>
                    <Link className='text-uppercase bold' to={Routes.SIGN_UP}>
                      register Now!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='row d-flex justify-content-center align-items-center'>
              <div className='col-lg-5 col-md-5 col-sm-5 col-4'>
                <h4>press play</h4>
              </div>
              <div className='col-lg-2 col-md-2 col-sm-2 col-3 px-2'>
                <a
                  href='javascript:void(0);'
                  data-toggle='modal'
                  data-target='#myModal'
                >
                  <img
                    className='mw-100'
                    src='https://res.cloudinary.com/weare270b/image/upload/f_auto,q_auto/v1580838540/static/video-play-btn_sxo2c1-min_urt5rb.png'
                    alt=''
                  />
                </a>
              </div>
              <div className='col-lg-5 col-md-5 col-sm-5 col-5'>
                <h6>TO LEARN MORE</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='modal fade'
        id='myModal'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-xl' role='document'>
          <div className='modal-content'>
            <div className='modal-body p-2 pt-0'>
              <button
                onClick={() => stopVideo()}
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
              <div className='embed-responsive embed-responsive-16by9'>
                <iframe
                  className='embed-responsive-item'
                  src='https://www.youtube.com/embed/AB0SPGFa480'
                  id='video'
                  title='welcome video'
                  allowscriptaccess='always'
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                  loading='lazy'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoSection;
