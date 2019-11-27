import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
export default function FriendsSuggestions() {
  return (
    <div className="ui-block">
      <div className="ui-block-title block-title-bg">
        <h6 className="title">Friend Suggestions</h6>
        <a href="#1" className="more">
          <FontAwesomeIcon icon={faEllipsisV} color="white" />
        </a>
      </div>

      <ul className="widget w-friend-pages-added notification-list friend-requests">
        <li className="inline-items">
          <div className="author-thumb">
            <img src="img/avatar38-sm.jpg" alt="author" />
          </div>
          <div className="notification-event">
            <a href="#1" className="h6 notification-friend">
              Francine Smith
            </a>
            <span className="chat-message-item">8 Friends in Common</span>
          </div>
          <span className="notification-icon">
            <a href="#1" className="accept-request">
              <span className="icon-add without-text">
                <FontAwesomeIcon icon={faSmile} color="white" />
                {/* <svg className="olymp-happy-face-icon">
                                    <use xlink: href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use>
										</svg> */}
              </span>
            </a>
          </span>
        </li>

        <li className="inline-items">
          <div className="author-thumb">
            <img src="img/avatar39-sm.jpg" alt="author" />
          </div>
          <div className="notification-event">
            <a href="#1" className="h6 notification-friend">
              Hugh Wilson
            </a>
            <span className="chat-message-item">6 Friends in Common</span>
          </div>
          <span className="notification-icon">
            <a href="#1" className="accept-request">
              <span className="icon-add without-text">
                <FontAwesomeIcon icon={faSmile} color="white" />
              </span>
            </a>
          </span>
        </li>

        <li className="inline-items">
          <div className="author-thumb">
            <img src="img/avatar40-sm.jpg" alt="author" />
          </div>
          <div className="notification-event">
            <a href="#1" className="h6 notification-friend">
              Karen Masters
            </a>
            <span className="chat-message-item">6 Friends in Common</span>
          </div>
          <span className="notification-icon">
            <a href="#1" className="accept-request">
              <span className="icon-add without-text">
                <FontAwesomeIcon icon={faSmile} color="white" />
              </span>
            </a>
          </span>
        </li>
      </ul>
    </div>
  )
}
