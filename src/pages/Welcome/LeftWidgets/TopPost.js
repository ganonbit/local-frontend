import React from 'react'

export default function TopPost() {
    return (
        <div className="ui-block">
            <div className="ui-block-title ui-block-post">
                <h6 className="title">Top Posts</h6>
                <a href="#" className="more">
                    {/* <svg className="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg> */}
                </a>
            </div>
            <div className="ui-block-content">



                <ul className="widget w-last-video">
                    <li>
                        <a href="https://vimeo.com/ondemand/viewfromabluemoon4k/147865858" className="play-video play-video--small">
                            <img src="img/play-btn.png" alt="" />
                        </a>
                        <img className="video-bnr" src="img/avocado-mexico.png" alt="video" />
                        <div className="video-content">
                            <div className="title">System of a Revenge - Hypnotize...</div>
                            <time className="published" datetime="2017-03-24T18:18">3:25</time>
                        </div>
                        <div className="overlay"></div>
                    </li>
                    <li>
                        <a href="https://youtube.com/watch?v=excVFQ2TWig" className="play-video play-video--small">
                            <img src="img/play-btn.png" alt="" />
                        </a>
                        <img className="video-bnr" src="img/avocado-mexico2.png" alt="video" />
                        <div className="video-content">
                            <div className="title">Green Goo - Live at Dan’s Arena</div>
                            <time className="published" datetime="2017-03-24T18:18">5:48</time>
                        </div>
                        <div className="overlay"></div>
                    </li>
                    <li>
                        <img className="video-bnr" src="img/video-bnr.png" alt="video" />
                    </li>
                </ul>


            </div>
        </div>

    )
}
