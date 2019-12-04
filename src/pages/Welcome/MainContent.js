import React from 'react'
import RightSection from './RightWidgets'
import LeftSideContent from './LeftWidgets'

export default function MainContent() {
    return (
        <div className="container">

            <div className="row">

                <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">

                    <div id="newsfeed-items-grid">

                        <div className="ui-block">

                            <article className="hentry post video">

                                <div className="post__author author vcard inline-items">
                                    <img src="img/avatar7-sm.jpg" alt="author" />

                                    <div className="author-date">
                                        <a className="h6 post__author-name fn" href="#">Marina Valentine</a> shared a <a href="#">link</a>
                                        <div className="post__date">
                                            <time className="published" datetime="2004-07-24T18:18">
                                                7 hours ago
									</time>
                                        </div>
                                    </div>

                                    <div className="more">
                                        {/* <svg className="olymp-three-dots-icon">
                                <use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon">
                                    </use></svg> */}
                                        <ul className="more-dropdown">
                                            <li>
                                                <a href="#">Edit Post</a>
                                            </li>
                                            <li>
                                                <a href="#">Delete Post</a>
                                            </li>
                                            <li>
                                                <a href="#">Turn Off Notifications</a>
                                            </li>
                                            <li>
                                                <a href="#">Select as Featured</a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                                <p>Hey <a href="#">Cindi</a>, you should really check out this new song by Iron Maid. The next time they come to the city we should totally go!</p>

                                <div className="post-video">
                                    <div className="video-thumb">
                                        <img src="img/avocado-mexico3.png" alt="photo" />
                                        <a href="https://youtube.com/watch?v=excVFQ2TWig" className="play-video">
                                            <img src="img/base-img.png" alt="" />
                                        </a>
                                    </div>

                                    <div className="video-content">
                                        <a href="#" className="h4 title">Tostitos® SalsaGuac | Avocados From Mexico</a>
                                        <p>Salsa and guac are a match made in Cinco de Mayo heaven. Try this Tostitos® recipe featuring guacamole made with Avocados From Mexico...
								</p>
                                        <a href="#" className="link-site">YOUTUBE.COM</a>
                                    </div>
                                </div>

                                <div className="post-additional-info inline-items">

                                    <a href="#" className="post-add-icon inline-items">
                                        <img src="img/likes-icon.png" alt="" />
                                        <span>18</span>
                                    </a>

                                    <ul className="friends-harmonic">
                                        <li>
                                            <a href="#">
                                                <img src="img/friend-harmonic9.jpg" alt="friend" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="img/friend-harmonic10.jpg" alt="friend" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="img/friend-harmonic7.jpg" alt="friend" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="img/friend-harmonic8.jpg" alt="friend" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="img/friend-harmonic11.jpg" alt="friend" />
                                            </a>
                                        </li>
                                    </ul>

                                    <div className="names-people-likes">
                                        <a href="#">Jenny</a>, <a href="#">Robert</a> and
								<br />18 more liked this
							</div>

                                    <div className="comments-shared">
                                        <a href="#" className="post-add-icon inline-items">
                                            <img src="img/comment-img.png" alt="" />
                                            <span>0</span>
                                        </a>

                                        <a href="#" className="post-add-icon inline-items">
                                            <img src="img/share-img.png" alt="" />
                                            <span>16</span>
                                        </a>
                                    </div>


                                </div>

                                <div className="control-block-button post-control-button">

                                    <a href="#" className="btn btn-control likes">
                                        <img src="img/heart-icon.png" alt="" />
                                    </a>

                                    <a href="#" className="btn btn-control ratings">
                                        <img src="img/star-icon2.png" alt="" />
                                    </a>

                                    <a href="#" className="btn btn-control share-link">
                                        <img src="img/share-icon.png" alt="" />
                                    </a>
                                    <a href="#" className="btn btn-control comments">
                                        <img src="img/comments-icon.png" alt="" />
                                    </a>

                                </div>

                            </article>
                        </div>

                        <div className="ui-block">

                            <article className="hentry post has-post-thumbnail">

                                <div className="post__author author vcard inline-items">
                                    <img src="img/avatar5-sm.jpg" alt="author" />

                                    <div className="author-date">
                                        <a className="h6 post__author-name fn" href="#">Green Goo Rock</a>
                                        <div className="post__date">
                                            <time className="published" datetime="2004-07-24T18:18">
                                                March 8 at 6:42pm
									</time>
                                        </div>
                                    </div>

                                    <div className="more">
                                        {/* <svg className="olymp-three-dots-icon">
                                <use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg> */}
                                        <ul className="more-dropdown">
                                            <li>
                                                <a href="#">Edit Post</a>
                                            </li>
                                            <li>
                                                <a href="#">Delete Post</a>
                                            </li>
                                            <li>
                                                <a href="#">Turn Off Notifications</a>
                                            </li>
                                            <li>
                                                <a href="#">Select as Featured</a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                                <p>Hey guys! We are gona be playing this Saturday of <a href="#">The Marina Bar</a> for their new Mystic Deer Party.
                                    If you wanna hang out and have a really good time, come and join us. We’l be waiting for you!
						</p>

                                <div className="post-thumb">
                                    <img src="img/avocado-bnr.png" alt="photo" />
                                </div>

                                <div className="post-additional-info inline-items">

                                    <a href="#" className="post-add-icon inline-items">
                                        <img src="img/likes-icon.png" alt="" />
                                        <span>49</span>
                                    </a>

                                    <ul className="friends-harmonic">
                                        <li>
                                            <a href="#">
                                                <img src="img/friend-harmonic9.jpg" alt="friend" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="img/friend-harmonic10.jpg" alt="friend" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="img/friend-harmonic7.jpg" alt="friend" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="img/friend-harmonic8.jpg" alt="friend" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="img/friend-harmonic11.jpg" alt="friend" />
                                            </a>
                                        </li>
                                    </ul>

                                    <div className="names-people-likes">
                                        <a href="#">Jimmy</a>, <a href="#">Andrea</a> and
								<br />47 more liked this
							</div>


                                    <div className="comments-shared">
                                        <a href="#" className="post-add-icon inline-items">
                                            <img src="img/comment-img.png" alt="" />
                                            <span>264</span>
                                        </a>

                                        <a href="#" className="post-add-icon inline-items">
                                            <img src="img/share-img.png" alt="" />
                                            <span>37</span>
                                        </a>
                                    </div>


                                </div>

                                <div className="control-block-button post-control-button">

                                    <a href="#" className="btn btn-control likes">
                                        <img src="img/heart-icon.png" alt="" />
                                    </a>

                                    <a href="#" className="btn btn-control ratings">
                                        <img src="img/star-icon2.png" alt="" />
                                    </a>

                                    <a href="#" className="btn btn-control share-link">
                                        <img src="img/share-icon.png" alt="" />
                                    </a>
                                    <a href="#" className="btn btn-control comments">
                                        <img src="img/comments-icon.png" alt="" />
                                    </a>

                                </div>

                            </article>
                        </div>

                    </div>

                    <a id="load-more-button" href="#" className="btn btn-control btn-more" data-load-link="items-to-load.html" data-container="newsfeed-items-grid">
                        {/* <svg className="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg> */}
                    </a>
                </main>

                <LeftSideContent />

                <RightSection />
            </div>
        </div>
    )
}
