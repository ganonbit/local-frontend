import React from 'react';
import {Link} from 'react-router-dom'

import * as Routes from 'routes'

const VideoSection = () => {
  return (
    <div class='avocado-video-bnr welcome-video-banner mb-5'>
      <div class='container'>
        <div class='row'>
          <div class='col col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12 m-auto'>
            <div class='row'>
              <div class='col-xl-6 col-lg-6 col-md-6 mb-4'>
                <h2>Welcome!</h2>
                <p>
                  Avocado Nation is the first of its kind social media network
                  to connect you with fellow avocado-lovers!
                </p>
                <p>
                  Join today and get rewarded for your contributions and
                  engagement with other community members! Get inspiration for
                  your next meal or party, and learn how others use this
                  versatile fruit in everyday life - all from fellow avocado
                  fans, just like you.
                </p>
              </div>
              <div class='col-xl-6 col-lg-6 col-md-6 mb-4 text-center'>
                <div class='join-us text-center'>
                  <h3>
                    Create your <br />
                    own Profile!
                  </h3>
                  <div class='text-center'>
                    <Link class='text-uppercase bold' to={Routes.SIGN_UP}>
                      register Now!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class='row d-flex justify-content-center align-items-center'>
              <div class='col-lg-5 col-md-5 col-sm-5 col-4'>
                <h4>press play</h4>
              </div>
              <div class='col-lg-2 col-md-2 col-sm-2 col-3 px-2'>
                <a href='https://www.youtube.com/watch?v=AB0SPGFa480' target="_blank">
                  <img
                    class='mw-100'
                    src='https://res.cloudinary.com/weare270b/image/upload/v1576786460/static/video-play-btn_sxo2c1.png'
                    alt=''
                  />
                </a>
              </div>
              <div class='col-lg-5 col-md-5 col-sm-5 col-5'>
                <h6>TO LEARN MORE ABOUT AVOCADO NATION</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoSection;
