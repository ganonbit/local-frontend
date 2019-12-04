import React from 'react'

export default function AvocadoGame() {
    return (
        <div className="ui-block">

            <div className="widget w-action">
                <div className="ui-block-title">
                    <img src="img/star-icon2.png" alt="" />
                    <a href="#" className="more">
                        {/* <svg className="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg> */}
                    </a>
                </div>
                <img src="img/game-remote.png" alt="Olympus" />
                <div className="content">
                    <span>Game</span>
                    <h4 className="title">What kind of <br />avocado lover are you?</h4>
                    <a href="01-LandingPage.html" className="btn btn-bg-secondary btn-md">Play Now!</a>
                </div>
            </div>

        </div>
    )
}
