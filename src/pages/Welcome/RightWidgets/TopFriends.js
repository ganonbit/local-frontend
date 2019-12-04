import React from 'react'

export default function Top20Friends() {
    return (
        <>
            <div className="ui-block top-users">
                <div className="ui-block-title">
                    <h6 className="title">Top 20 Users</h6>
                    <a href="#" className="more">
                        {/* <svg className="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg> */}
                    </a>
                </div>



                {/* <!-- W-Action --> */}

                <ul className="widget w-friend-pages-added notification-list friend-requests">
                    <li className="inline-items">
                        <div className="author-thumb">
                            <img src="img/avatar38-sm.jpg" alt="author" />
                        </div>
                        <div className="notification-event">
                            <a href="#" className="h6 notification-friend">Selma Avocado</a>
                            <span className="chat-message-item">82 Friends in Common</span>
                        </div>
                        <span className="notification-icon">
                            <a href="#" className="accept-request">
                                <span className="icon-add without-text">
                                    {/* <svg className="olymp-happy-face-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg> */}
                                </span>
                            </a>
                        </span>
                    </li>

                    <li className="inline-items">
                        <div className="author-thumb">
                            <img src="img/avatar38-sm.jpg" alt="author" />
                        </div>
                        <div className="notification-event">
                            <a href="#" className="h6 notification-friend">Selma Avocado</a>
                            <span className="chat-message-item">82 Friends in Common</span>
                        </div>
                        <span className="notification-icon">
                            <a href="#" className="accept-request">
                                <span className="icon-add without-text">
                                    {/* <svg className="olymp-happy-face-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg> */}
                                </span>
                            </a>
                        </span>
                    </li>
                    <li className="inline-items">
                        <div className="author-thumb">
                            <img src="img/avatar38-sm.jpg" alt="author" />
                        </div>
                        <div className="notification-event">
                            <a href="#" className="h6 notification-friend">Selma Avocado</a>
                            <span className="chat-message-item">82 Friends in Common</span>
                        </div>
                        <span className="notification-icon">
                            <a href="#" className="accept-request">
                                <span className="icon-add without-text">
                                    {/* <svg className="olymp-happy-face-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg> */}
                                </span>
                            </a>
                        </span>
                    </li>
                </ul>

                {/* <!-- ... end W-Action --> */}
            </div>
            <div className="ui-block refer-friend">
                <a className="btn btn-lg" href="#">Refer a Friend!</a>
            </div>
        </>
    )
}
