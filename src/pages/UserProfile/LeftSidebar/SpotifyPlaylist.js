import React from 'react'

export default function SpotifyPlaylist() {
    return (
        <div className="ui-block">
            <div className="ui-block-title block-title-bg">
                <h6 className="title">My Spotify Playlist</h6>
            </div>

            {/* <!-- W-Playlist --> */}

            <ol className="widget w-playlist">
                <li className="js-open-popup" data-popup-target=".playlist-popup">
                    <div className="playlist-thumb">
                        <img src="img/playlist6.jpg" alt="thumb-composition" />
                        <div className="overlay"></div>
                        <a href="#" className="play-icon">
                            {/* <svg className="olymp-music-play-icon-big">
									<use xlink:href="svg-icons/sprites/icons-music.svg#olymp-music-play-icon-big"></use>
								</svg> */}
                        </a>
                    </div>

                    <div className="composition">
                        <a href="#" className="composition-name">The Past Starts Slow...</a>
                        <a href="#" className="composition-author">System of a Revenge</a>
                    </div>

                    <div className="composition-time">
                        <time className="published" dateTime="2017-03-24T18:18">3:22</time>
                        <div className="more">
                            {/* <svg className="olymp-three-dots-icon">
									<use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
								</svg> */}
                            <ul className="more-dropdown">
                                <li>
                                    <a href="#">Add Song to Player</a>
                                </li>
                                <li>
                                    <a href="#">Add Playlist to Player</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </li>

                <li className="js-open-popup" data-popup-target=".playlist-popup">
                    <div className="playlist-thumb">
                        <img src="img/playlist7.jpg" alt="thumb-composition" />
                        <div className="overlay"></div>
                        <a href="#" className="play-icon">
                            {/* <svg className="olymp-music-play-icon-big">
									<use xlink:href="svg-icons/sprites/icons-music.svg#olymp-music-play-icon-big"></use>
								</svg> */}
                        </a>
                    </div>

                    <div className="composition">
                        <a href="#" className="composition-name">The Pretender</a>
                        <a href="#" className="composition-author">Kung Fighters</a>
                    </div>

                    <div className="composition-time">
                        <time className="published" dateTime="2017-03-24T18:18">5:48</time>
                        <div className="more">
                            {/* <svg className="olymp-three-dots-icon">
									<use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
								</svg> */}
                            <ul className="more-dropdown">
                                <li>
                                    <a href="#">Add Song to Player</a>
                                </li>
                                <li>
                                    <a href="#">Add Playlist to Player</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </li>
                <li className="js-open-popup" data-popup-target=".playlist-popup">
                    <div className="playlist-thumb">
                        <img src="img/playlist8.jpg" alt="thumb-composition" />
                        <div className="overlay"></div>
                        <a href="#" className="play-icon">
                            {/* <svg className="olymp-music-play-icon-big">
									<use xlink:href="svg-icons/sprites/icons-music.svg#olymp-music-play-icon-big"></use>
								</svg> */}
                        </a>
                    </div>

                    <div className="composition">
                        <a href="#" className="composition-name">Blood Brothers</a>
                        <a href="#" className="composition-author">Iron Maid</a>
                    </div>

                    <div className="composition-time">
                        <time className="published" dateTime="2017-03-24T18:18">3:06</time>
                        <div className="more">
                            {/* <svg className="olymp-three-dots-icon">
									<use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
								</svg> */}
                            <ul className="more-dropdown">
                                <li>
                                    <a href="#">Add Song to Player</a>
                                </li>
                                <li>
                                    <a href="#">Add Playlist to Player</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </li>
                <li className="js-open-popup" data-popup-target=".playlist-popup">
                    <div className="playlist-thumb">
                        <img src="img/playlist9.jpg" alt="thumb-composition" />
                        <div className="overlay"></div>
                        <a href="#" className="play-icon">
                            {/* <svg className="olymp-music-play-icon-big">
									<use xlink:href="svg-icons/sprites/icons-music.svg#olymp-music-play-icon-big"></use>
								</svg> */}
                        </a>
                    </div>

                    <div className="composition">
                        <a href="#" className="composition-name">Seven Nation Army</a>
                        <a href="#" className="composition-author">The Black Stripes</a>
                    </div>

                    <div className="composition-time">
                        <time className="published" dateTime="2017-03-24T18:18">6:17</time>
                        <div className="more">
                            {/* <svg className="olymp-three-dots-icon">
									<use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
								</svg> */}
                            <ul className="more-dropdown">
                                <li>
                                    <a href="#">Add Song to Player</a>
                                </li>
                                <li>
                                    <a href="#">Add Playlist to Player</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </li>
                <li className="js-open-popup" data-popup-target=".playlist-popup">
                    <div className="playlist-thumb">
                        <img src="img/playlist10.jpg" alt="thumb-composition" />
                        <div className="overlay"></div>
                        <a href="#" className="play-icon">
                            {/* <svg className="olymp-music-play-icon-big">
									<use xlink:href="svg-icons/sprites/icons-music.svg#olymp-music-play-icon-big"></use>
								</svg> */}
                        </a>
                    </div>

                    <div className="composition">
                        <a href="#" className="composition-name">Killer Queen</a>
                        <a href="#" className="composition-author">Archiduke</a>
                    </div>

                    <div className="composition-time">
                        <time className="published" dateTime="2017-03-24T18:18">5:40</time>
                        <div className="more">
                            {/* <svg className="olymp-three-dots-icon">
									<use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
								</svg> */}
                            <ul className="more-dropdown">
                                <li>
                                    <a href="#">Add Song to Player</a>
                                </li>
                                <li>
                                    <a href="#">Add Playlist to Player</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </li>
            </ol>

            {/* <!-- .. end W-Playlist --> */}
        </div>

    )
}
