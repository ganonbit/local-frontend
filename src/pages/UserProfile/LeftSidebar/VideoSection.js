import React from 'react';

export default function LastVideo() {
  return (
    <div className='ui-block'>
      <div className='ui-block-title block-title-bg'>
        <h6 className='title'>Last Videos</h6>
      </div>
      <div className='ui-block-content'>
        {/* <!-- W-Latest-Video --> */}

        <ul className='widget w-last-video'>
          <li>
            <a
              href='https://vimeo.com/ondemand/viewfromabluemoon4k/147865858'
              className='play-video play-video--small'
            >
              {/* <svg className="olymp-play-icon">
									<use xlink:href="svg-icons/sprites/icons.svg#olymp-play-icon"></use>
								</svg> */}
            </a>
            <img
              src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/video8.jpg'
              alt='video'
            />
            <div className='video-content'>
              <div className='title'>System of a Revenge - Hypnotize...</div>
              <time className='published' dateTime='2017-03-24T18:18'>
                3:25
              </time>
            </div>
            <div className='overlay'></div>
          </li>
          <li>
            <a
              href='https://www.youtube.com/watch?v=AB0SPGFa480'
              className='play-video play-video--small'
            >
              {/* <svg className="olymp-play-icon">
                                    <use xlink: href="svg-icons/sprites/icons.svg#olymp-play-icon"></use>
								</svg> */}
            </a>
            <img
              src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/video7.jpg'
              alt='video'
            />
            <div className='video-content'>
              <div className='title'>Green Goo - Live at Dan’s Arena</div>
              <time className='published' dateTime='2017-03-24T18:18'>
                5:48
              </time>
            </div>
            <div className='overlay'></div>
          </li>
        </ul>

        {/* <!-- .. end W-Latest-Video --> */}
      </div>
    </div>
  );
}
