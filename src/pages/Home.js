import React from 'react'
/**
 * That will be NewsFeed Component
 * just create to test routing and Authentication
 */

const Home = () => (
  <div className="page-has-left-panels page-has-right-panels pr-0">

    <div className="header-spacer"></div>
    <div className="container">
      <div className="row">
        {/* <!-- Main Content --> */}

        <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
          <div className="ui-block">
            {/* <!-- News Feed Form  --> */}

            <div className="news-feed-form">
              {/* <!-- Nav tabs --> */}
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active inline-items"
                    data-toggle="tab"
                    href="#home-1"
                    role="tab"
                    aria-expanded="true">
                    <svg
                      className="olymp-status-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-status-icon"
                    />

                    <span>Status</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link inline-items"
                    data-toggle="tab"
                    href="#profile-1"
                    role="tab"
                    aria-expanded="false">
                    <svg
                      className="olymp-multimedia-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-multimedia-icon"
                    />

                    <span>Multimedia</span>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link inline-items"
                    data-toggle="tab"
                    href="#blog"
                    role="tab"
                    aria-expanded="false">
                    <svg
                      className="olymp-blog-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-blog-icon"
                    />

                    <span>Blog Post</span>
                  </a>
                </li>
              </ul>

              {/* <!-- Tab panes --> */}
              <div className="tab-content">
                <div
                  className="tab-pane active"
                  id="home-1"
                  role="tabpanel"
                  aria-expanded="true">
                  <form>
                    <div className="author-thumb">
                      <img src="img/author-page.jpg" alt="author" />
                    </div>
                    <div className="form-group with-icon label-floating is-empty">
                      <label className="control-label">
                        Share what you are thinking here...
                      </label>
                      <textarea
                        className="form-control"
                        placeholder=""></textarea>
                    </div>
                    <div className="add-options-message">
                      <a
                        href="/"
                        className="options-message"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="ADD PHOTOS">
                        <svg
                          className="olymp-camera-icon"
                          data-toggle="modal"
                          data-target="#update-header-photo"
                          xlinkHref="svg-icons/sprites/icons.svg#olymp-camera-icon"
                        />
                      </a>
                      <a
                        href="/"
                        className="options-message"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="TAG YOUR FRIENDS">
                        <svg
                          className="olymp-computer-icon"
                          xlinkHref="svg-icons/sprites/icons.svg#olymp-computer-icon"
                        />
                      </a>

                      <a
                        href="/"
                        className="options-message"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="ADD LOCATION">
                        <svg
                          className="olymp-small-pin-icon"
                          xlinkHref="svg-icons/sprites/icons.svg#olymp-small-pin-icon"
                        />
                      </a>

                      <button className="btn btn-primary btn-md-2">
                        Post Status
                      </button>
                      <button className="btn btn-md-2 btn-border-think btn-transparent c-grey">
                        Preview
                      </button>
                    </div>
                  </form>
                </div>

                <div
                  className="tab-pane"
                  id="profile-1"
                  role="tabpanel"
                  aria-expanded="true">
                  <form>
                    <div className="author-thumb">
                      <img src="img/author-page.jpg" alt="author" />
                    </div>
                    <div className="form-group with-icon label-floating is-empty">
                      <label className="control-label">
                        Share what you are thinking here...
                      </label>
                      <textarea
                        className="form-control"
                        placeholder=""></textarea>
                    </div>
                    <div className="add-options-message">
                      <a
                        href="/"
                        className="options-message"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="ADD PHOTOS">
                        <svg
                          className="olymp-camera-icon"
                          data-toggle="modal"
                          data-target="#update-header-photo"
                          xlinkHref="svg-icons/sprites/icons.svg#olymp-camera-icon"
                        />
                      </a>
                      <a
                        href="/"
                        className="options-message"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="TAG YOUR FRIENDS">
                        <svg
                          className="olymp-computer-icon"
                          xlinkHref="svg-icons/sprites/icons.svg#olymp-computer-icon"
                        />
                      </a>

                      <a
                        href="/"
                        className="options-message"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="ADD LOCATION">
                        <svg
                          className="olymp-small-pin-icon"
                          xlinkHref="svg-icons/sprites/icons.svg#olymp-small-pin-icon"
                        />
                      </a>

                      <button className="btn btn-primary btn-md-2">
                        Post Status
                      </button>
                      <button className="btn btn-md-2 btn-border-think btn-transparent c-grey">
                        Preview
                      </button>
                    </div>
                  </form>
                </div>

                <div
                  className="tab-pane"
                  id="blog"
                  role="tabpanel"
                  aria-expanded="true">
                  <form>
                    <div className="author-thumb">
                      <img src="img/author-page.jpg" alt="author" />
                    </div>
                    <div className="form-group with-icon label-floating is-empty">
                      <label className="control-label">
                        Share what you are thinking here...
                      </label>
                      <textarea
                        className="form-control"
                        placeholder=""></textarea>
                    </div>
                    <div className="add-options-message">
                      <a
                        href="/"
                        className="options-message"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="ADD PHOTOS">
                        <svg
                          className="olymp-camera-icon"
                          data-toggle="modal"
                          data-target="#update-header-photo"
                          xlinkHref="svg-icons/sprites/icons.svg#olymp-camera-icon"
                        />
                      </a>
                      <a
                        href="/"
                        className="options-message"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="TAG YOUR FRIENDS">
                        <svg
                          className="olymp-computer-icon"
                          xlinkHref="svg-icons/sprites/icons.svg#olymp-computer-icon"
                        />
                      </a>

                      <a
                        href="/"
                        className="options-message"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="ADD LOCATION">
                        <svg
                          className="olymp-small-pin-icon"
                          xlinkHref="svg-icons/sprites/icons.svg#olymp-small-pin-icon"
                        />
                      </a>

                      <button className="btn btn-primary btn-md-2">
                        Post Status
                      </button>
                      <button className="btn btn-md-2 btn-border-think btn-transparent c-grey">
                        Preview
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* <!-- ... end News Feed Form  -->		 */}
          </div>

          <div id="newsfeed-items-grid">
            <div className="ui-block">
              <article className="hentry post video">
                <div className="post__author author vcard inline-items">
                  <img src="img/avatar7-sm.jpg" alt="author" />

                  <div className="author-date">
                    <a className="h6 post__author-name fn" href="/">
                      Marina Valentine
                    </a>{' '}
                    shared a <a href="/">link</a>
                    <div className="post__date">
                      <time className="published" datetime="2004-07-24T18:18">
                        March 4 at 2:05pm
                      </time>
                    </div>
                  </div>

                  <div className="more">
                    <svg
                      className="olymp-three-dots-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                    />
                    <ul className="more-dropdown">
                      <li>
                        <a href="/">Edit Post</a>
                      </li>
                      <li>
                        <a href="/">Delete Post</a>
                      </li>
                      <li>
                        <a href="/">Turn Off Notifications</a>
                      </li>
                      <li>
                        <a href="/">Select as Featured</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <p>
                  Hey <a href="/">Cindi</a>, you should really check out this
                  new song by Iron Maid. The next time they come to the city we
                  should totally go!
                </p>

                <div className="post-video">
                  <div className="video-thumb">
                    <img src="img/video-youtube1.jpg" alt="video" />
                    <a
                      href="https://youtube.com/watch?v=excVFQ2TWig"
                      className="play-video">
                      <svg
                        className="olymp-play-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-play-icon"
                      />
                    </a>
                  </div>

                  <div className="video-content">
                    <a href="/" className="h4 title">
                      Iron Maid - ChillGroves
                    </a>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur ipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua...
                    </p>
                    <a href="/" className="link-site">
                      YOUTUBE.COM
                    </a>
                  </div>
                </div>

                <div className="post-additional-info inline-items">
                  <a href="/" className="post-add-icon inline-items">
                    <svg
                      className="olymp-heart-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon"
                    />
                    <span>18</span>
                  </a>

                  <ul className="friends-harmonic">
                    <li>
                      <a href="/">
                        <img src="img/friend-harmonic9.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src="img/friend-harmonic10.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src="img/friend-harmonic7.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src="img/friend-harmonic8.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src="img/friend-harmonic11.jpg" alt="friend" />
                      </a>
                    </li>
                  </ul>

                  <div className="names-people-likes">
                    <a href="/">Jenny</a>, <a href="/">Robert</a> and
                    <br />
                    18 more liked this
                  </div>

                  <div className="comments-shared">
                    <a href="/" className="post-add-icon inline-items">
                      <svg
                        className="olymp-speech-balloon-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"
                      />

                      <span>0</span>
                    </a>

                    <a href="/" className="post-add-icon inline-items">
                      <svg
                        className="olymp-share-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-share-icon"
                      />

                      <span>16</span>
                    </a>
                  </div>
                </div>

                <div className="control-block-button post-control-button">
                  <a href="/" className="btn btn-control likes">
                    <img src="img/heart-icon.png" alt="" />
                    <div className="ripple-container"></div>
                  </a>

                  <a href="/" className="btn btn-control ratings">
                    <img src="img/star-icon2.png" alt="" />
                  </a>

                  <a href="/" className="btn btn-control share-link">
                    <img src="img/share-icon.png" alt="" />
                  </a>
                  <a href="/" className="btn btn-control comments">
                    <img src="img/comments-icon.png" alt="" />
                  </a>
                </div>
              </article>
            </div>

            <div className="ui-block">
              <article className="hentry post">
                <div className="post__author author vcard inline-items">
                  <img src="img/avatar10-sm.jpg" alt="author" />

                  <div className="author-date">
                    <a className="h6 post__author-name fn" href="/">
                      Elaine Dreyfuss
                    </a>
                    <div className="post__date">
                      <time className="published" datetime="2004-07-24T18:18">
                        9 hours ago
                      </time>
                    </div>
                  </div>

                  <div className="more">
                    <svg
                      className="olymp-three-dots-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                    />
                    <ul className="more-dropdown">
                      <li>
                        <a href="/">Edit Post</a>
                      </li>
                      <li>
                        <a href="/">Delete Post</a>
                      </li>
                      <li>
                        <a href="/">Turn Off Notifications</a>
                      </li>
                      <li>
                        <a href="/">Select as Featured</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempo incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris consequat.
                </p>

                <div className="post-additional-info inline-items">
                  <a href="/" className="post-add-icon inline-items">
                    <svg
                      className="olymp-heart-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon"
                    />
                    <span>24</span>
                  </a>

                  <ul className="friends-harmonic">
                    <li>
                      <a href="/">
                        <img src="img/friend-harmonic7.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src="img/friend-harmonic8.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src="img/friend-harmonic9.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src="img/friend-harmonic10.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src="img/friend-harmonic11.jpg" alt="friend" />
                      </a>
                    </li>
                  </ul>

                  <div className="names-people-likes">
                    <a href="/">You</a>, <a href="/">Elaine</a> and
                    <br />
                    22 more liked this
                  </div>

                  <div className="comments-shared">
                    <a href="/" className="post-add-icon inline-items">
                      <svg
                        className="olymp-speech-balloon-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"
                      />
                      <span>17</span>
                    </a>

                    <a href="/" className="post-add-icon inline-items">
                      <svg
                        className="olymp-share-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-share-icon"
                      />
                      <span>24</span>
                    </a>
                  </div>
                </div>

                <div className="control-block-button post-control-button">
                  <a href="/" className="btn btn-control likes">
                    <img src="img/heart-icon.png" alt="" />
                    <div className="ripple-container"></div>
                  </a>

                  <a href="/" className="btn btn-control ratings">
                    <img src="img/star-icon2.png" alt="" />
                  </a>

                  <a href="/" className="btn btn-control share-link">
                    <img src="img/share-icon.png" alt="" />
                  </a>
                  <a href="/" className="btn btn-control comments">
                    <img src="img/comments-icon.png" alt="" />
                  </a>
                </div>
              </article>

              {/* <!-- Comments --> */}

              <ul className="comments-list">
                <li className="comment-item">
                  <div className="post__author author vcard inline-items">
                    <img src="img/author-page.jpg" alt="author" />

                    <div className="author-date">
                      <a
                        className="h6 post__author-name fn"
                        href="02-ProfilePage.html">
                        James Spiegel
                      </a>
                      <div className="post__date">
                        <time className="published" datetime="2004-07-24T18:18">
                          38 mins ago
                        </time>
                      </div>
                    </div>

                    <a href="/" className="more">
                      <svg
                        className="olymp-three-dots-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                      />
                    </a>
                  </div>

                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium der doloremque laudantium.
                  </p>

                  <a href="/" className="post-add-icon inline-items">
                    <svg
                      className="olymp-heart-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon"
                    />
                    <span>3</span>
                  </a>
                  <a href="/" className="reply">
                    Reply
                  </a>
                </li>
                <li className="comment-item">
                  <div className="post__author author vcard inline-items">
                    <img src="img/avatar1-sm.jpg" alt="author" />

                    <div className="author-date">
                      <a className="h6 post__author-name fn" href="/">
                        Mathilda Brinker
                      </a>
                      <div className="post__date">
                        <time className="published" datetime="2004-07-24T18:18">
                          1 hour ago
                        </time>
                      </div>
                    </div>

                    <a href="/" className="more">
                      <svg
                        className="olymp-three-dots-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                      />
                    </a>
                  </div>

                  <p>
                    Ratione voluptatem sequi en lod nesciunt. Neque porro
                    quisquam est, quinder dolorem ipsum quia dolor sit amet,
                    consectetur adipisci velit en lorem ipsum duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum.
                  </p>

                  <a href="/" className="post-add-icon inline-items">
                    <svg
                      className="olymp-heart-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon"
                    />
                    <span>8</span>
                  </a>
                  <a href="/" className="reply">
                    Reply
                  </a>
                </li>
              </ul>

              {/* <!-- ... end Comments --> */}

              <a href="/" className="more-comments">
                View more comments <span>+</span>
              </a>

              {/* <!-- Comment Form  --> */}

              <form className="comment-form inline-items">
                <div className="post__author author vcard inline-items">
                  <img src="img/author-page.jpg" alt="author" />

                  <div className="form-group with-icon-right ">
                    <textarea
                      className="form-control"
                      placeholder=""></textarea>
                    <div className="add-options-message">
                      <a
                        href="/"
                        className="options-message"
                        data-toggle="modal"
                        data-target="#update-header-photo">
                        <svg
                          className="olymp-camera-icon"
                          xlinkHref="svg-icons/sprites/icons.svg#olymp-camera-icon"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <button className="btn btn-md-2 btn-primary">
                  Post Comment
                </button>

                <button className="btn btn-md-2 btn-border-think c-grey btn-transparent custom-color">
                  Cancel
                </button>
              </form>

              {/* <!-- ... end Comment Form  --> */}
            </div>

            <div className="ui-block">
              <article className="hentry post has-post-thumbnail">
                <div className="post__author author vcard inline-items">
                  <img src="img/avatar5-sm.jpg" alt="author" />

                  <div className="author-date">
                    <a className="h6 post__author-name fn" href="/">
                      Green Goo Rock
                    </a>
                    <div className="post__date">
                      <time className="published" datetime="2004-07-24T18:18">
                        March 8 at 6:42pm
                      </time>
                    </div>
                  </div>

                  <div className="more">
                    <svg
                      className="olymp-three-dots-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                    />
                    <ul className="more-dropdown">
                      <li>
                        <a href="/">Edit Post</a>
                      </li>
                      <li>
                        <a href="/">Delete Post</a>
                      </li>
                      <li>
                        <a href="/">Turn Off Notifications</a>
                      </li>
                      <li>
                        <a href="/">Select as Featured</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <p>
                  Hey guys! We are gona be playing this Saturday of{' '}
                  <a href="/">The Marina Bar</a> for their new Mystic Deer
                  Party. If you wanna hang out and have a really good time, come
                  and join us. We’l be waiting for you!
                </p>

                <div className="post-thumb">
                  <img src="img/post__thumb1.jpg" alt="Post" />
                </div>

                <div className="post-additional-info inline-items">
                  <a href="/" className="post-add-icon inline-items">
                    <svg
                      className="olymp-heart-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon"
                    />
                    <span>49</span>
                  </a>

                  <ul className="friends-harmonic">
                    <li>
                      <a href="/">
                        <img src="img/friend-harmonic9.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src="img/friend-harmonic10.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src="img/friend-harmonic7.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src="img/friend-harmonic8.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src="img/friend-harmonic11.jpg" alt="friend" />
                      </a>
                    </li>
                  </ul>

                  <div className="names-people-likes">
                    <a href="/">Jimmy</a>, <a href="/">Andrea</a> and
                    <br />
                    47 more liked this
                  </div>

                  <div className="comments-shared">
                    <a href="/" className="post-add-icon inline-items">
                      <svg
                        className="olymp-speech-balloon-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"
                      />
                      <span>264</span>
                    </a>

                    <a href="/" className="post-add-icon inline-items">
                      <svg
                        className="olymp-share-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-share-icon"
                      />
                      <span>37</span>
                    </a>
                  </div>
                </div>

                <div className="control-block-button post-control-button">
                  <a href="/" className="btn btn-control likes">
                    <img src="img/heart-icon.png" alt="" />
                    <div className="ripple-container"></div>
                  </a>

                  <a href="/" className="btn btn-control ratings">
                    <img src="img/star-icon2.png" alt="" />
                  </a>

                  <a href="/" className="btn btn-control share-link">
                    <img src="img/share-icon.png" alt="" />
                  </a>
                  <a href="/" className="btn btn-control comments">
                    <img src="img/comments-icon.png" alt="" />
                  </a>
                </div>
              </article>
            </div>

            <div className="ui-block">
              <article className="hentry post has-post-thumbnail">
                <div className="post__author author vcard inline-items">
                  <img src="img/avatar3-sm.jpg" alt="author" />

                  <div className="author-date">
                    <a className="h6 post__author-name fn" href="/">
                      Sarah Hetfield
                    </a>
                    <div className="post__date">
                      <time className="published" datetime="2004-07-24T18:18">
                        March 2 at 9:06am
                      </time>
                    </div>
                  </div>

                  <div className="more">
                    <svg
                      className="olymp-three-dots-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                    />
                    <ul className="more-dropdown">
                      <li>
                        <a href="/">Edit Post</a>
                      </li>
                      <li>
                        <a href="/">Delete Post</a>
                      </li>
                      <li>
                        <a href="/">Turn Off Notifications</a>
                      </li>
                      <li>
                        <a href="/">Select as Featured</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                  omnis iste natus error sit voluptatem accusantium doloremque.
                </p>

                <div className="post-additional-info inline-items">
                  <a href="/" className="post-add-icon inline-items">
                    <svg
                      className="olymp-heart-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon"
                    />
                    <span>0 Likes</span>
                  </a>

                  <div className="comments-shared">
                    <a href="/" className="post-add-icon inline-items">
                      <svg
                        className="olymp-speech-balloon-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"
                      />
                      <span>0 Comments</span>
                    </a>

                    <a href="/" className="post-add-icon inline-items">
                      <svg
                        className="olymp-share-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-share-icon"
                      />
                      <span>2 Shares</span>
                    </a>
                  </div>
                </div>

                <div className="control-block-button post-control-button">
                  <a href="/" className="btn btn-control likes">
                    <img src="img/heart-icon.png" alt="" />
                    <div className="ripple-container"></div>
                  </a>

                  <a href="/" className="btn btn-control ratings">
                    <img src="img/star-icon2.png" alt="" />
                  </a>

                  <a href="/" className="btn btn-control share-link">
                    <img src="img/share-icon.png" alt="" />
                  </a>
                  <a href="/" className="btn btn-control comments">
                    <img src="img/comments-icon.png" alt="" />
                  </a>
                </div>
              </article>
            </div>

            <div className="ui-block">
              <article className="hentry post has-post-thumbnail">
                <div className="post__author author vcard inline-items">
                  <img src="img/avatar2-sm.jpg" alt="author" />

                  <div className="author-date">
                    <a className="h6 post__author-name fn" href="/">
                      Nicholas Grissom
                    </a>
                    <div className="post__date">
                      <time className="published" datetime="2004-07-24T18:18">
                        March 2 at 8:34am
                      </time>
                    </div>
                  </div>

                  <div className="more">
                    <svg
                      className="olymp-three-dots-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                    />
                    <ul className="more-dropdown">
                      <li>
                        <a href="/">Edit Post</a>
                      </li>
                      <li>
                        <a href="/">Delete Post</a>
                      </li>
                      <li>
                        <a href="/">Turn Off Notifications</a>
                      </li>
                      <li>
                        <a href="/">Select as Featured</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                  omnis iste natus error sit voluptatem accusantium doloremque.
                </p>

                <div className="post-additional-info inline-items">
                  <a href="/" className="post-add-icon inline-items">
                    <svg
                      className="olymp-heart-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon"
                    />
                    <span>22</span>
                  </a>

                  <ul className="friends-harmonic">
                    <li>
                      <a href="/">
                        <img src="img/friend-harmonic9.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src="img/friend-harmonic10.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src="img/friend-harmonic7.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src="img/friend-harmonic8.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src="img/friend-harmonic11.jpg" alt="friend" />
                      </a>
                    </li>
                  </ul>

                  <div className="names-people-likes">
                    <a href="/">Jimmy</a>, <a href="/">Andrea</a> and
                    <br />
                    47 more liked this
                  </div>

                  <div className="comments-shared">
                    <a href="/" className="post-add-icon inline-items">
                      <svg
                        className="olymp-speech-balloon-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"
                      />
                      <span>0</span>
                    </a>

                    <a href="/" className="post-add-icon inline-items">
                      <svg
                        className="olymp-share-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-share-icon"
                      />
                      <span>2</span>
                    </a>
                  </div>
                </div>

                <div className="control-block-button post-control-button">
                  <a href="/" className="btn btn-control likes">
                    <img src="img/heart-icon.png" alt="" />
                    <div className="ripple-container"></div>
                  </a>

                  <a href="/" className="btn btn-control ratings">
                    <img src="img/star-icon2.png" alt="" />
                  </a>

                  <a href="/" className="btn btn-control share-link">
                    <img src="img/share-icon.png" alt="" />
                  </a>
                  <a href="/" className="btn btn-control comments">
                    <img src="img/comments-icon.png" alt="" />
                  </a>
                </div>
              </article>
            </div>
          </div>

          <a
            id="load-more-button"
            href="/"
            className="btn btn-control btn-more"
            data-load-link="items-to-load.html"
            data-container="newsfeed-items-grid">
            <svg
              className="olymp-three-dots-icon"
              xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"
            />
          </a>
        </main>

        {/* <!-- ... end Main Content --> */}

        {/* <!-- Left Sidebar --> */}

        <aside className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
          <div className="ui-block">
            {/* <!-- W-Weather --> */}

            <div className="widget w-wethear">
              <a href="/" className="more">
                <svg
                  className="olymp-three-dots-icon"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                />
              </a>

              <div className="wethear-now inline-items">
                <div className="temperature-sensor">64°</div>
                <div className="max-min-temperature">
                  <span>58°</span>
                  <span>76°</span>
                </div>

                <svg
                  className="olymp-weather-partly-sunny-icon"
                  xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-partly-sunny-icon"
                />
              </div>

              <div className="wethear-now-description">
                <div className="climate">Partly Sunny</div>
                <span>
                  Real Feel: <span>67°</span>
                </span>
                <span>
                  Chance of Rain: <span>49%</span>
                </span>
              </div>

              <ul className="weekly-forecast">
                <li>
                  <div className="day">sun</div>
                  <svg
                    className="olymp-weather-sunny-icon"
                    xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-sunny-icon"
                  />

                  <div className="temperature-sensor-day">60°</div>
                </li>

                <li>
                  <div className="day">mon</div>
                  <svg
                    className="olymp-weather-partly-sunny-icon"
                    xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-partly-sunny-icon"
                  />
                  <div className="temperature-sensor-day">58°</div>
                </li>

                <li>
                  <div className="day">tue</div>
                  <svg
                    className="olymp-weather-cloudy-icon"
                    xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-cloudy-icon"
                  />

                  <div className="temperature-sensor-day">67°</div>
                </li>

                <li>
                  <div className="day">wed</div>
                  <svg
                    className="olymp-weather-rain-icon"
                    xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-rain-icon"
                  />

                  <div className="temperature-sensor-day">70°</div>
                </li>

                <li>
                  <div className="day">thu</div>
                  <svg
                    className="olymp-weather-storm-icon"
                    xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-storm-icon"
                  />

                  <div className="temperature-sensor-day">58°</div>
                </li>

                <li>
                  <div className="day">fri</div>
                  <svg
                    className="olymp-weather-snow-icon"
                    xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-snow-icon"
                  />

                  <div className="temperature-sensor-day">68°</div>
                </li>

                <li>
                  <div className="day">sat</div>

                  <svg
                    className="olymp-weather-wind-icon-header"
                    xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-wind-icon-header"
                  />

                  <div className="temperature-sensor-day">65°</div>
                </li>
              </ul>

              <div className="date-and-place">
                <h5 className="date">Saturday, March 26th</h5>
                <div className="place">San Francisco, CA</div>
              </div>
            </div>

            {/* <!-- W-Weather -->		 */}
          </div>

          <div className="ui-block">
            {/* <!-- W-Calendar --> */}

            <div className="w-calendar">
              <div className="calendar">
                <header>
                  <h6 className="month">May</h6>
                </header>
                <table>
                  <thead>
                    <tr>
                      <td>Mon</td>
                      <td>Tue</td>
                      <td>Wed</td>
                      <td>Thu</td>
                      <td>Fri</td>
                      <td>Sat</td>
                      <td>San</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-month="12" data-day="1">
                        1
                      </td>
                      <td data-month="12" data-day="2">
                        2
                      </td>
                      <td data-month="12" data-day="3">
                        3
                      </td>
                      <td data-month="12" data-day="4">
                        4
                      </td>
                      <td data-month="12" data-day="5">
                        5
                      </td>
                      <td data-month="12" data-day="6">
                        6
                      </td>
                      <td data-month="12" data-day="7">
                        7
                      </td>
                    </tr>
                    <tr>
                      <td data-month="12" data-day="8">
                        8
                      </td>
                      <td data-month="12" data-day="9">
                        9
                      </td>
                      <td data-month="12" data-day="10">
                        10
                      </td>
                      <td data-month="12" data-day="11">
                        11
                      </td>
                      <td data-month="12" data-day="12">
                        12
                      </td>
                      <td data-month="12" data-day="13">
                        13
                      </td>
                      <td data-month="12" data-day="14">
                        14
                      </td>
                    </tr>
                    <tr>
                      <td data-month="12" data-day="15">
                        15
                      </td>
                      <td data-month="12" data-day="16">
                        16
                      </td>
                      <td data-month="12" data-day="17">
                        17
                      </td>
                      <td data-month="12" data-day="18">
                        18
                      </td>
                      <td data-month="12" data-day="19">
                        19
                      </td>
                      <td data-month="12" data-day="20">
                        20
                      </td>
                      <td data-month="12" data-day="21">
                        21
                      </td>
                    </tr>
                    <tr>
                      <td data-month="12" data-day="22">
                        22
                      </td>
                      <td data-month="12" data-day="23">
                        23
                      </td>
                      <td data-month="12" data-day="24">
                        24
                      </td>
                      <td data-month="12" data-day="25">
                        25
                      </td>
                      <td data-month="12" data-day="26">
                        26
                      </td>
                      <td data-month="12" data-day="27">
                        27
                      </td>
                      <td data-month="12" data-day="28">
                        28
                      </td>
                    </tr>
                    <tr>
                      <td data-month="12" data-day="29">
                        29
                      </td>
                      <td data-month="12" data-day="30">
                        30
                      </td>
                      <td data-month="12" data-day="31">
                        31
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* <!-- ... end W-Calendar -->		 */}
          </div>

          <div className="ui-block">
            <div className="ui-block-title block-title-bg">
              <h6 className="title">Pages You May Like</h6>
              <a href="/" className="more">
                <svg
                  className="olymp-three-dots-icon"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                />
              </a>
            </div>

            {/* <!-- W-Friend-Pages-Added --> */}

            <ul className="widget w-friend-pages-added notification-list friend-requests">
              <li className="inline-items">
                <div className="author-thumb">
                  <img src="img/avatar41-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="/" className="h6 notification-friend">
                    The Marina Bar
                  </a>
                  <span className="chat-message-item">Restaurant / Bar</span>
                </div>
                <span
                  className="notification-icon"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="ADD TO YOUR FAVS">
                  <a href="/">
                    <svg
                      className="olymp-star-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon"
                    />
                  </a>
                </span>
              </li>

              <li className="inline-items">
                <div className="author-thumb">
                  <img src="img/avatar42-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="/" className="h6 notification-friend">
                    Tapronus Rock
                  </a>
                  <span className="chat-message-item">Rock Band</span>
                </div>
                <span
                  className="notification-icon"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="ADD TO YOUR FAVS">
                  <a href="/">
                    <svg
                      className="olymp-star-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon"
                    />
                  </a>
                </span>
              </li>

              <li className="inline-items">
                <div className="author-thumb">
                  <img src="img/avatar43-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="/" className="h6 notification-friend">
                    Pixel Digital Design
                  </a>
                  <span className="chat-message-item">Company</span>
                </div>
                <span
                  className="notification-icon"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="ADD TO YOUR FAVS">
                  <a href="/">
                    <svg
                      className="olymp-star-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon"
                    />
                  </a>
                </span>
              </li>

              <li className="inline-items">
                <div className="author-thumb">
                  <img src="img/avatar44-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="/" className="h6 notification-friend">
                    Thompson’s Custom Clothing Boutique
                  </a>
                  <span className="chat-message-item">Clothing Store</span>
                </div>
                <span
                  className="notification-icon"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="ADD TO YOUR FAVS">
                  <a href="/">
                    <svg
                      className="olymp-star-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon"
                    />
                  </a>
                </span>
              </li>

              <li className="inline-items">
                <div className="author-thumb">
                  <img src="img/avatar45-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="/" className="h6 notification-friend">
                    Crimson Agency
                  </a>
                  <span className="chat-message-item">Company</span>
                </div>
                <span
                  className="notification-icon"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="ADD TO YOUR FAVS">
                  <a href="/">
                    <svg
                      className="olymp-star-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon"
                    />
                  </a>
                </span>
              </li>

              <li className="inline-items">
                <div className="author-thumb">
                  <img src="img/avatar46-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="/" className="h6 notification-friend">
                    Mannequin Angel
                  </a>
                  <span className="chat-message-item">Clothing Store</span>
                </div>
                <span
                  className="notification-icon"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="ADD TO YOUR FAVS">
                  <a href="/">
                    <svg
                      className="olymp-star-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon"
                    />
                  </a>
                </span>
              </li>
            </ul>

            {/* <!-- .. end W-Friend-Pages-Added --> */}
          </div>
        </aside>

        {/* <!-- ... end Left Sidebar --> */}

        {/* <!-- Right Sidebar --> */}

        <aside className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
          <div className="ui-block">
            {/* <!-- W-Birthsday-Alert --> */}

            <div className="widget w-birthday-alert">
              <div className="icons-block">
                <svg
                  className="olymp-cupcake-icon"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-cupcake-icon"
                />
                <a href="/" className="more">
                  <svg
                    className="olymp-three-dots-icon"
                    xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                  />
                </a>
              </div>

              <div className="content">
                <div className="author-thumb">
                  <img src="img/avatar48-sm.jpg" alt="author" />
                </div>
                <span>Today is</span>
                <a href="/" className="h4 title">
                  Marina Valentine’s Birthday!
                </a>
                <p>
                  Leave her a message with your best wishes on her profile page!
                </p>
              </div>
            </div>

            {/* <!-- ... end W-Birthsday-Alert -->			 */}
          </div>

          <div className="ui-block">
            <div className="ui-block-title block-title-bg">
              <h6 className="title">Friend Suggestions</h6>
              <a href="/" className="more">
                <svg
                  className="olymp-three-dots-icon"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                />
              </a>
            </div>

            {/* <!-- W-Action --> */}

            <ul className="widget w-friend-pages-added notification-list friend-requests">
              <li className="inline-items">
                <div className="author-thumb">
                  <img src="img/avatar38-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="/" className="h6 notification-friend">
                    Francine Smith
                  </a>
                  <span className="chat-message-item">8 Friends in Common</span>
                </div>
                <span className="notification-icon">
                  <a href="/" className="accept-request">
                    <span className="icon-add without-text">
                      <svg
                        className="olymp-happy-face-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon"
                      />
                    </span>
                  </a>
                </span>
              </li>

              <li className="inline-items">
                <div className="author-thumb">
                  <img src="img/avatar39-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="/" className="h6 notification-friend">
                    Hugh Wilson
                  </a>
                  <span className="chat-message-item">6 Friends in Common</span>
                </div>
                <span className="notification-icon">
                  <a href="/" className="accept-request">
                    <span className="icon-add without-text">
                      <svg
                        className="olymp-happy-face-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon"
                      />
                    </span>
                  </a>
                </span>
              </li>

              <li className="inline-items">
                <div className="author-thumb">
                  <img src="img/avatar40-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="/" className="h6 notification-friend">
                    Karen Masters
                  </a>
                  <span className="chat-message-item">6 Friends in Common</span>
                </div>
                <span className="notification-icon">
                  <a href="/" className="accept-request">
                    <span className="icon-add without-text">
                      <svg
                        className="olymp-happy-face-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon"
                      />
                    </span>
                  </a>
                </span>
              </li>
            </ul>

            {/* <!-- ... end W-Action --> */}
          </div>

          <div className="ui-block">
            <div className="ui-block-title block-title-bg">
              <h6 className="title">Activity Feed</h6>
              <a href="/" className="more">
                <svg
                  className="olymp-three-dots-icon"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                />
              </a>
            </div>

            {/* <!-- W-Activity-Feed --> */}

            <ul className="widget w-activity-feed notification-list">
              <li>
                <div className="author-thumb">
                  <img src="img/avatar49-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="/" className="h6 notification-friend">
                    Marina Polson
                  </a>{' '}
                  commented on Jason Mark’s{' '}
                  <a href="/" className="notification-link">
                    photo.
                  </a>
                  .
                  <span className="notification-date">
                    <time
                      className="entry-date updated"
                      datetime="2004-07-24T18:18">
                      2 mins ago
                    </time>
                  </span>
                </div>
              </li>

              <li>
                <div className="author-thumb">
                  <img src="img/avatar9-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="/" className="h6 notification-friend">
                    Jake Parker{' '}
                  </a>{' '}
                  liked Nicholas Grissom’s{' '}
                  <a href="/" className="notification-link">
                    status update.
                  </a>
                  .
                  <span className="notification-date">
                    <time
                      className="entry-date updated"
                      datetime="2004-07-24T18:18">
                      5 mins ago
                    </time>
                  </span>
                </div>
              </li>

              <li>
                <div className="author-thumb">
                  <img src="img/avatar50-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="/" className="h6 notification-friend">
                    Mary Jane Stark{' '}
                  </a>{' '}
                  added 20 new photos to her{' '}
                  <a href="/" className="notification-link">
                    gallery album.
                  </a>
                  .
                  <span className="notification-date">
                    <time
                      className="entry-date updated"
                      datetime="2004-07-24T18:18">
                      12 mins ago
                    </time>
                  </span>
                </div>
              </li>

              <li>
                <div className="author-thumb">
                  <img src="img/avatar51-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="/" className="h6 notification-friend">
                    Nicholas Grissom{' '}
                  </a>{' '}
                  updated his profile{' '}
                  <a href="/" className="notification-link">
                    photo
                  </a>
                  .
                  <span className="notification-date">
                    <time
                      className="entry-date updated"
                      datetime="2004-07-24T18:18">
                      1 hour ago
                    </time>
                  </span>
                </div>
              </li>
              <li>
                <div className="author-thumb">
                  <img src="img/avatar48-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="/" className="h6 notification-friend">
                    Marina Valentine{' '}
                  </a>{' '}
                  commented on Chris Greyson’s{' '}
                  <a href="/" className="notification-link">
                    status update
                  </a>
                  .
                  <span className="notification-date">
                    <time
                      className="entry-date updated"
                      datetime="2004-07-24T18:18">
                      1 hour ago
                    </time>
                  </span>
                </div>
              </li>

              <li>
                <div className="author-thumb">
                  <img src="img/avatar52-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="/" className="h6 notification-friend">
                    Green Goo Rock{' '}
                  </a>{' '}
                  posted a{' '}
                  <a href="/" className="notification-link">
                    status update
                  </a>
                  .
                  <span className="notification-date">
                    <time
                      className="entry-date updated"
                      datetime="2004-07-24T18:18">
                      1 hour ago
                    </time>
                  </span>
                </div>
              </li>
              <li>
                <div className="author-thumb">
                  <img src="img/avatar10-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="/" className="h6 notification-friend">
                    Elaine Dreyfuss{' '}
                  </a>{' '}
                  liked your{' '}
                  <a href="/" className="notification-link">
                    blog post
                  </a>
                  .
                  <span className="notification-date">
                    <time
                      className="entry-date updated"
                      datetime="2004-07-24T18:18">
                      2 hours ago
                    </time>
                  </span>
                </div>
              </li>

              <li>
                <div className="author-thumb">
                  <img src="img/avatar10-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="/" className="h6 notification-friend">
                    Elaine Dreyfuss{' '}
                  </a>{' '}
                  commented on your{' '}
                  <a href="/" className="notification-link">
                    blog post
                  </a>
                  .
                  <span className="notification-date">
                    <time
                      className="entry-date updated"
                      datetime="2004-07-24T18:18">
                      2 hours ago
                    </time>
                  </span>
                </div>
              </li>

              <li>
                <div className="author-thumb">
                  <img src="img/avatar53-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="/" className="h6 notification-friend">
                    Bruce Peterson{' '}
                  </a>{' '}
                  changed his{' '}
                  <a href="/" className="notification-link">
                    profile picture
                  </a>
                  .
                  <span className="notification-date">
                    <time
                      className="entry-date updated"
                      datetime="2004-07-24T18:18">
                      15 hours ago
                    </time>
                  </span>
                </div>
              </li>
            </ul>

            {/* <!-- .. end W-Activity-Feed --> */}
          </div>

          <div className="ui-block">
            {/* <!-- W-Action --> */}

            <div className="widget w-action">
              <img src="img/avocado-img.png" alt="Olympus" />
              <div className="content">
                <h4 className="title">OLYMPUS</h4>
                <span>THE BEST SOCIAL NETWORK THEME IS HERE!</span>
                <a
                  href="01-LandingPage.html"
                  className="btn btn-bg-secondary btn-md">
                  Register Now!
                </a>
              </div>
            </div>

            {/* <!-- ... end W-Action --> */}
          </div>
        </aside>

        {/* <!-- ... end Right Sidebar --> */}
      </div>
    </div>
  </div>
)
export default Home
