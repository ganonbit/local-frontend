import React from 'react'
import PostControlButton from './Common/PostControlButton'

export default function Post() {
  return (
    <div className="ui-block">
      <article className="hentry post video">
        <div className="post__author author vcard inline-items">
          <img src="img/avatar7-sm.jpg" alt="author" />

          <div className="author-date">
            <a className="h6 post__author-name fn" href="#1">
              Marina Valentine
            </a>{' '}
            shared a <a href="#1">link</a>
            <div className="post__date">
              <time className="published" dateTime="2004-07-24T18:18">
                March 4 at 2:05pm
              </time>
            </div>
          </div>

          <div className="more">
            {/* <svg className="olymp-three-dots-icon">
                            <use xlink: href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                    </svg> */}
            <ul className="more-dropdown">
              <li>
                <a href="#1">Edit Post</a>
              </li>
              <li>
                <a href="#1">Delete Post</a>
              </li>
              <li>
                <a href="#1">Turn Off Notifications</a>
              </li>
              <li>
                <a href="#1">Select as Featured</a>
              </li>
            </ul>
          </div>
        </div>

        <p>
          Hey <a href="#1">Cindi</a>, you should really check out this new song
          by Iron Maid. The next time they come to the city we should totally
          go!
        </p>

        <div className="post-video">
          <div className="video-thumb">
            <img src="img/video-youtube1.jpg" alt="photo" />
            <a
              href="https://youtube.com/watch?v=excVFQ2TWig"
              className="play-video">
              {/* <svg className="olymp-play-icon">
                                    <use xlink: href="svg-icons/sprites/icons.svg#olymp-play-icon"></use>
                        </svg> */}
            </a>
          </div>

          <div className="video-content">
            <a href="#1" className="h4 title">
              Iron Maid - ChillGroves
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
            <a href="#1" className="link-site">
              YOUTUBE.COM
            </a>
          </div>
        </div>

        <div className="post-additional-info inline-items">
          <a href="#1" className="post-add-icon inline-items">
            {/* <svg className="olymp-heart-icon">
                            <use xlink: href="svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
                    </svg> */}
            <span>18</span>
          </a>

          <ul className="friends-harmonic">
            <li>
              <a href="#1">
                <img src="img/friend-harmonic9.jpg" alt="friend" />
              </a>
            </li>
            <li>
              <a href="#1">
                <img src="img/friend-harmonic10.jpg" alt="friend" />
              </a>
            </li>
            <li>
              <a href="#1">
                <img src="img/friend-harmonic7.jpg" alt="friend" />
              </a>
            </li>
            <li>
              <a href="#1">
                <img src="img/friend-harmonic8.jpg" alt="friend" />
              </a>
            </li>
            <li>
              <a href="#1">
                <img src="img/friend-harmonic11.jpg" alt="friend" />
              </a>
            </li>
          </ul>

          <div className="names-people-likes">
            <a href="#1">Jenny</a>, <a href="#1">Robert</a> and
            <br />
            18 more liked this
          </div>

          <div className="comments-shared">
            <a href="#1" className="post-add-icon inline-items">
              {/* <svg className="olymp-speech-balloon-icon">
                                                    <use xlink: href="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon">
                            </use>
                        </svg> */}

              <span>0</span>
            </a>

            <a href="#1" className="post-add-icon inline-items">
              {/* <svg className="olymp-share-icon">
                                                <use xlink: href="svg-icons/sprites/icons.svg#olymp-share-icon"></use>
                        </svg> */}

              <span>16</span>
            </a>
          </div>
        </div>

        <PostControlButton />
      </article>
    </div>
  )
}
