import React from 'react';

export default function TwitterFeed() {
  return (
    <div className='ui-block'>
      <div className='ui-block-title block-title-bg'>
        <h6 className='title'>Twitter Feed</h6>
      </div>

      {/* <!-- W-Twitter --> */}

      <ul className='widget w-twitter'>
        <li className='twitter-item'>
          <div className='author-folder'>
            <img
              src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/twitter-avatar1.png'
              alt='avatar'
            />
            <div className='author'>
              <a href='#' className='author-name'>
                Space Cowboy
              </a>
              <a href='#' className='group'>
                @james_spiegelOK
              </a>
            </div>
          </div>
          <p>
            Tomorrow with the agency we will run 5 km for charity. Come and give
            us your support!
            <a href='#' className='link-post'>
              #Daydream5K
            </a>
          </p>
          <span className='post__date'>
            <time className='published' dateTime='2017-03-24T18:18'>
              2 hours ago
            </time>
          </span>
        </li>
        <li className='twitter-item'>
          <div className='author-folder'>
            <img
              src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/twitter-avatar1.png'
              alt='avatar'
            />
            <div className='author'>
              <a href='#' className='author-name'>
                Space Cowboy
              </a>
              <a href='#' className='group'>
                @james_spiegelOK
              </a>
            </div>
          </div>
          <p>
            Check out the new website of “The Bebop Bar”!{' '}
            <a href='#' className='link-post'>
              bytle/thbp53f
            </a>
          </p>
          <span className='post__date'>
            <time className='published' dateTime='2017-03-24T18:18'>
              16 hours ago
            </time>
          </span>
        </li>
        <li className='twitter-item'>
          <div className='author-folder'>
            <img
              src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/twitter-avatar1.png'
              alt='avatar'
            />
            <div className='author'>
              <a href='#' className='author-name'>
                Space Cowboy
              </a>
              <a href='#' className='group'>
                @james_spiegelOK
              </a>
            </div>
          </div>
          <p>
            The Sunday is the annual agency camping trip and I still haven’t got
            a tent
            <a href='#' className='link-post'>
              #TheWild #Indoors
            </a>
          </p>
          <span className='post__date'>
            <time className='published' dateTime='2017-03-24T18:18'>
              Yesterday
            </time>
          </span>
        </li>
      </ul>

      <ul className='widget w-twitter'>
        <li className='twitter-item'>
          <div className='author-folder'>
            <img
              src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/twitter-avatar1.png'
              alt='avatar'
            />
            <div className='author'>
              <a href='#1' className='author-name'>
                Space Cowboy
              </a>
              <a href='#1' className='group'>
                @james_spiegelOK
              </a>
            </div>
          </div>
          <p>
            Tomorrow with the agency we will run 5 km for charity. Come and give
            us your support!
            <a href='#1' className='link-post'>
              #Daydream5K
            </a>
          </p>
          <span className='post__date'>
            <time className='published' dateTime='2017-03-24T18:18'>
              2 hours ago
            </time>
          </span>
        </li>
        <li className='twitter-item'>
          <div className='author-folder'>
            <img
              src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/twitter-avatar1.png'
              alt='avatar'
            />
            <div className='author'>
              <a href='#1' className='author-name'>
                Space Cowboy
              </a>
              <a href='#1' className='group'>
                @james_spiegelOK
              </a>
            </div>
          </div>
          <p>
            Check out the new website of “The Bebop Bar”!{' '}
            <a href='#1' className='link-post'>
              bytle/thbp53f
            </a>
          </p>
          <span className='post__date'>
            <time className='published' dateTime='2017-03-24T18:18'>
              16 hours ago
            </time>
          </span>
        </li>
        <li className='twitter-item'>
          <div className='author-folder'>
            <img
              src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/twitter-avatar1.png'
              alt='avatar'
            />
            <div className='author'>
              <a href='#1' className='author-name'>
                Space Cowboy
              </a>
              <a href='#1' className='group'>
                @james_spiegelOK
              </a>
            </div>
          </div>
          <p>
            The Sunday is the annual agency camping trip and I still haven’t got
            a tent
            <a href='#1' className='link-post'>
              #TheWild #Indoors
            </a>
          </p>
          <span className='post__date'>
            <time className='published' dateTime='2017-03-24T18:18'>
              Yesterday
            </time>
          </span>
        </li>
      </ul>
    </div>
  );
}
