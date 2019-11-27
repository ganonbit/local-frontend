import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
export default class Notifications extends Component {
  render() {
    return (
      <div className="icon-outer">
        <div className="control-icon more has-items">
          <FontAwesomeIcon icon={faBell} color="white" />
          <div className="label-avatar bg-primary">8</div>

          <div className="more-dropdown more-with-triangle triangle-top-center">
            <div className="ui-block-title ui-block-title-small">
              <h6 className="title">Notifications</h6>
              <a href="#1">Mark all as read</a>
              <a href="#1">Settings</a>
            </div>

            <div className="mCustomScrollbar" data-mcs-theme="dark">
              <ul className="notification-list">
                <li>
                  <div className="author-thumb">
                    <img src="img/avatar62-sm.jpg" alt="author" />
                  </div>
                  <div className="notification-event">
                    <div>
                      <a href="#1" className="h6 notification-friend">
                        Mathilda Brinker
                      </a>{' '}
                      commented on your new{' '}
                      <a href="#1" className="notification-link">
                        profile status
                      </a>
                    </div>
                    <span className="notification-date">
                      <time
                        className="entry-date updated"
                        dateTime="2004-07-24T18:18">
                        4 hours ago
                      </time>
                    </span>
                  </div>
                  <span className="notification-icon">
                    <svg
                      className="olymp-comments-post-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon"
                    />
                  </span>

                  <div className="more">
                    <svg
                      className="olymp-three-dots-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                    />
                    <svg
                      className="olymp-little-delete"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-little-delete"
                    />
                  </div>
                </li>

                <li className="un-read">
                  <div className="author-thumb">
                    <img src="img/avatar63-sm.jpg" alt="author" />
                  </div>
                  <div className="notification-event">
                    <div>
                      You and{' '}
                      <a href="#1" className="h6 notification-friend">
                        Nicholas Grissom
                      </a>{' '}
                      just became friends. Write on{' '}
                      <a href="#1" className="notification-link">
                        his wall
                      </a>
                      .
                    </div>
                    <span className="notification-date">
                      <time
                        className="entry-date updated"
                        dateTime="2004-07-24T18:18">
                        9 hours ago
                      </time>
                    </span>
                  </div>
                  <span className="notification-icon">
                    <svg
                      className="olymp-happy-face-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon"
                    />
                  </span>

                  <div className="more">
                    <svg
                      className="olymp-three-dots-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                    />
                    <svg
                      className="olymp-little-delete"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-little-delete"
                    />
                  </div>
                </li>

                <li className="with-comment-photo">
                  <div className="author-thumb">
                    <img src="img/avatar64-sm.jpg" alt="author" />
                  </div>
                  <div className="notification-event">
                    <div>
                      <a href="#1" className="h6 notification-friend">
                        Sarah Hetfield
                      </a>{' '}
                      commented on your{' '}
                      <a href="#1" className="notification-link">
                        photo
                      </a>
                      .
                    </div>
                    <span className="notification-date">
                      <time
                        className="entry-date updated"
                        dateTime="2004-07-24T18:18">
                        Yesterday at 5:32am
                      </time>
                    </span>
                  </div>
                  <span className="notification-icon">
                    <svg
                      className="olymp-comments-post-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-comments-post-icon"
                    />
                  </span>
                </li>
              </ul>
            </div>

            <a href="#1" className="view-all bg-primary">
              View All Notifications
            </a>
          </div>
        </div>
      </div>
    )
  }
}
