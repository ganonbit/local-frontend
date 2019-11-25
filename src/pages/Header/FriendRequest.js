import React from 'react'

const FriendRequest = () => {
  return (
    <div className="control-icon more has-items">
      <svg className="olymp-happy-face-icon">
        {/* <use xlink: href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use> */}
      </svg>
      <div className="label-avatar bg-blue">6</div>

      <div className="more-dropdown more-with-triangle triangle-top-center">
        <div className="ui-block-title ui-block-title-small">
          <h6 className="title">FRIEND REQUESTS</h6>
          <a href="#1">Find Friends</a>
          <a href="#1">Settings</a>
        </div>

        <div className="mCustomScrollbar" data-mcs-theme="dark">
          <ul className="notification-list friend-requests">
            <li>
              <div className="author-thumb">
                <img src="img/avatar55-sm.jpg" alt="author" />
              </div>
              <div className="notification-event">
                <a href="#1" className="h6 notification-friend">
                  Tamara Romanoff
                </a>
                <span className="chat-message-item">
                  Mutual Friend: Sarah Hetfield
                </span>
              </div>
              <span className="notification-icon">
                <a href="#1" className="accept-request">
                  <span className="icon-add without-text">
                    <svg className="olymp-happy-face-icon">
                      {/* <use xlink: href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"> */}
                      {/* </use> */}
                    </svg>
                  </span>
                </a>

                <a href="#1" className="accept-request request-del">
                  <span className="icon-minus">
                    <svg className="olymp-happy-face-icon">
                      {/* <use xlink: href="svg-icons/sprites/icons.svg#olymp-happy-face-icon">
													</use> */}
                    </svg>
                  </span>
                </a>
              </span>

              <div className="more">
                <svg className="olymp-three-dots-icon">
                  {/* <use xlink: href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use> */}
                </svg>
              </div>
            </li>

            <li>
              <div className="author-thumb">
                <img src="img/avatar56-sm.jpg" alt="author" />
              </div>
              <div className="notification-event">
                <a href="#1" className="h6 notification-friend">
                  Tony Stevens
                </a>
                <span className="chat-message-item">4 Friends in Common</span>
              </div>
              <span className="notification-icon">
                <a href="#1" className="accept-request">
                  <span className="icon-add without-text">
                    <svg className="olymp-happy-face-icon">
                      {/* <use xlink: href="svg-icons/sprites/icons.svg#olymp-happy-face-icon">
													</use> */}
                    </svg>
                  </span>
                </a>

                <a href="#1" className="accept-request request-del">
                  <span className="icon-minus">
                    <svg className="olymp-happy-face-icon">
                      {/* <use xlink: href="svg-icons/sprites/icons.svg#olymp-happy-face-icon">
													</use> */}
                    </svg>
                  </span>
                </a>
              </span>

              <div className="more">
                <svg className="olymp-three-dots-icon">
                  {/* <use xlink: href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use> */}
                </svg>
              </div>
            </li>

            <li className="accepted">
              <div className="author-thumb">
                <img src="img/avatar57-sm.jpg" alt="author" />
              </div>
              <div className="notification-event">
                You and{' '}
                <a href="#1" className="h6 notification-friend">
                  Mary Jane Stark
                </a>{' '}
                just became friends. Write on{' '}
                <a href="#1" className="notification-link">
                  her wall
                </a>
                .
              </div>
              <span className="notification-icon">
                <svg className="olymp-happy-face-icon">
                  {/* <use xlink: href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use> */}
                </svg>
              </span>

              <div className="more">
                <svg className="olymp-three-dots-icon">
                  {/* <use xlink: href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use> */}
                </svg>
                <svg className="olymp-little-delete">
                  {/* <use xlink: href="svg-icons/sprites/icons.svg#olymp-little-delete"></use> */}
                </svg>
              </div>
            </li>

            <li>
              <div className="author-thumb">
                <img src="img/avatar58-sm.jpg" alt="author" />
              </div>
              <div className="notification-event">
                <a href="#1" className="h6 notification-friend">
                  Stagg Clothing
                </a>
                <span className="chat-message-item">9 Friends in Common</span>
              </div>
              <span className="notification-icon">
                <a href="#1" className="accept-request">
                  <span className="icon-add without-text">
                    <svg className="olymp-happy-face-icon">
                      {/* <use xlink: href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"> */}
                      {/* </use> */}
                    </svg>
                  </span>
                </a>

                <a href="#1" className="accept-request request-del">
                  <span className="icon-minus">
                    <svg className="olymp-happy-face-icon">
                      {/* <use xlink: href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"> */}
                      {/* </use> */}
                    </svg>
                  </span>
                </a>
              </span>

              <div className="more">
                <svg className="olymp-three-dots-icon">
                  {/* <use xlink: href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use> */}
                </svg>
              </div>
            </li>
          </ul>
        </div>

        <a href="#1" className="view-all bg-blue">
          Check all your Events
        </a>
      </div>
    </div>
  )
}
export default FriendRequest
