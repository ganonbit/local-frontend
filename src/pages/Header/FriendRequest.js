import React from 'react'

const FriendRequest = () => {
    return (
        <div class="control-icon more has-items">
            <svg class="olymp-happy-face-icon">
                {/* <use xlink: href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use> */}
            </svg>
            <div class="label-avatar bg-blue">6</div>

            <div class="more-dropdown more-with-triangle triangle-top-center">
                <div class="ui-block-title ui-block-title-small">
                    <h6 class="title">FRIEND REQUESTS</h6>
                    <a href="#1">Find Friends</a>
                    <a href="#1">Settings</a>
                </div>

                <div class="mCustomScrollbar" data-mcs-theme="dark">
                    <ul class="notification-list friend-requests">
                        <li>
                            <div class="author-thumb">
                                <img src="img/avatar55-sm.jpg" alt="author" />
                            </div>
                            <div class="notification-event">
                                <a href="#1" class="h6 notification-friend">Tamara Romanoff</a>
                                <span class="chat-message-item">Mutual Friend: Sarah Hetfield</span>
                            </div>
                            <span class="notification-icon">
                                <a href="#1" class="accept-request">
                                    <span class="icon-add without-text">
                                        <svg class="olymp-happy-face-icon">
                                            {/* <use xlink: href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"> */}
                                            {/* </use> */}
                                        </svg>
                                    </span>
                                </a>

                                <a href="#1" class="accept-request request-del">
                                    <span class="icon-minus">
                                        <svg class="olymp-happy-face-icon">
                                            {/* <use xlink: href="svg-icons/sprites/icons.svg#olymp-happy-face-icon">
													</use> */}
                                        </svg>
                                    </span>
                                </a>

                            </span>

                            <div class="more">
                                <svg class="olymp-three-dots-icon">
                                    {/* <use xlink: href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use> */}
                                </svg>
                            </div>
                        </li>

                        <li>
                            <div class="author-thumb">
                                <img src="img/avatar56-sm.jpg" alt="author" />
                            </div>
                            <div class="notification-event">
                                <a href="#1" class="h6 notification-friend">Tony Stevens</a>
                                <span class="chat-message-item">4 Friends in Common</span>
                            </div>
                            <span class="notification-icon">
                                <a href="#1" class="accept-request">
                                    <span class="icon-add without-text">
                                        <svg class="olymp-happy-face-icon">
                                            {/* <use xlink: href="svg-icons/sprites/icons.svg#olymp-happy-face-icon">
													</use> */}
                                        </svg>
                                    </span>
                                </a>

                                <a href="#1" class="accept-request request-del">
                                    <span class="icon-minus">
                                        <svg class="olymp-happy-face-icon">
                                            {/* <use xlink: href="svg-icons/sprites/icons.svg#olymp-happy-face-icon">
													</use> */}
                                        </svg>
                                    </span>
                                </a>

                            </span>

                            <div class="more">
                                <svg class="olymp-three-dots-icon">
                                    {/* <use xlink: href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use> */}
                                </svg>
                            </div>
                        </li >

                        <li class="accepted">
                            <div class="author-thumb">
                                <img src="img/avatar57-sm.jpg" alt="author" />
                            </div>
                            <div class="notification-event">
                                You and <a href="#1" class="h6 notification-friend">Mary Jane Stark</a> just
										became friends. Write on <a href="#1" class="notification-link">her wall</a>.
									</div>
                            <span class="notification-icon">
                                <svg class="olymp-happy-face-icon">
                                    {/* <use xlink: href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use> */}
                                </svg>
                            </span>

                            <div class="more">
                                <svg class="olymp-three-dots-icon">
                                    {/* <use xlink: href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use> */}
                                </svg>
                                <svg class="olymp-little-delete">
                                    {/* <use xlink: href="svg-icons/sprites/icons.svg#olymp-little-delete"></use> */}
                                </svg>
                            </div >
                        </li >

                        <li>
                            <div class="author-thumb">
                                <img src="img/avatar58-sm.jpg" alt="author" />
                            </div>
                            <div class="notification-event">
                                <a href="#1" class="h6 notification-friend">Stagg Clothing</a>
                                <span class="chat-message-item">9 Friends in Common</span>
                            </div>
                            <span class="notification-icon">
                                <a href="#1" class="accept-request">
                                    <span class="icon-add without-text">
                                        <svg class="olymp-happy-face-icon">
                                            {/* <use xlink: href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"> */}
                                            {/* </use> */}
                                        </svg>
                                    </span>
                                </a>

                                <a href="#1" class="accept-request request-del">
                                    <span class="icon-minus">
                                        <svg class="olymp-happy-face-icon">
                                            {/* <use xlink: href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"> */}
                                            {/* </use> */}
                                        </svg>
                                    </span>
                                </a>

                            </span>

                            <div class="more">
                                <svg class="olymp-three-dots-icon">
                                    {/* <use xlink: href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use> */}
                                </svg>
                            </div >
                        </li >

                    </ul >
                </div >

                <a href="#1" class="view-all bg-blue">Check all your Events</a>
            </div >
        </div >)

}
export default FriendRequest
