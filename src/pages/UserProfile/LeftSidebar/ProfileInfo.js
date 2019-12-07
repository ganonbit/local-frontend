import React from 'react'

export default function Intro() {
    return (
        <div className="ui-block">
            <div className="ui-block-title block-title-bg">
                <h6 className="title">Profile Intro</h6>
            </div>
            <div className="ui-block-content">

                {/* <!-- W-Personal-Info --> */}

                <ul className="widget w-personal-info item-block">
                    <li>
                        <span className="title">About Me:</span>
                        <span className="text">Hi, I’m James, I’m 36 and I work as a Digital Designer for the  “Daydreams” Agency in Pier 56.</span>
                    </li>
                    <li>
                        <span className="title">Favourite TV Shows:</span>
                        <span className="text">Breaking Good, RedDevil, People of Interest, The Running Dead, Found,  American Guy.</span>
                    </li>
                    <li>
                        <span className="title">Favourite Music Bands / Artists:</span>
                        <span className="text">Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge.</span>
                    </li>
                </ul>

                {/* <!-- .. end W-Personal-Info --> */}
                {/* <!-- W-Socials --> */}

                <div className="widget w-socials">
                    <h6 className="title">Other Social Networks:</h6>
                    <a href="#" className="social-item bg-facebook">
                        <i className="fab fa-facebook-f" aria-hidden="true"></i>
                        Facebook
                </a>
                    <a href="#" className="social-item bg-twitter">
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                        Twitter
                </a>
                    <a href="#" className="social-item bg-dribbble">
                        <i className="fab fa-dribbble" aria-hidden="true"></i>
                        Dribbble
                </a>
                </div>


                {/* <!-- ... end W-Socials --> */}
            </div>
        </div>

    )
}
