import React, { Component } from 'react'

export default class ChatNotifications extends Component {
    render() {
        return (
            <div className="control-icon more has-items">
                <svg
                    className="olymp-chat---messages-icon"
                    xlinkHref="svg-icons/sprites/icons.svg#olymp-chat---messages-icon"
                />
                <div className="label-avatar bg-purple">2</div>

                <div className="more-dropdown more-with-triangle triangle-top-center">
                    <div className="ui-block-title ui-block-title-small">
                        <h6 className="title">Chat / Messages</h6>
                        <a href="#">Mark all as read</a>
                        <a href="#">Settings</a>
                    </div>

                    <div className="mCustomScrollbar" data-mcs-theme="dark">
                        <ul className="notification-list chat-message">
                            <li className="message-unread">
                                <div className="author-thumb">
                                    <img src="img/avatar59-sm.jpg" alt="author" />
                                </div>
                                <div className="notification-event">
                                    <a href="#" className="h6 notification-friend">
                                        Diana Jameson
    </a>
                                    <span className="chat-message-item">
                                        Hi James! It’s Diana, I just wanted to let you know that
                                        we have to reschedule...
    </span>
                                    <span className="notification-date">
                                        <time
                                            className="entry-date updated"
                                            datetime="2004-07-24T18:18">
                                            4 hours ago
      </time>
                                    </span>
                                </div>
                                <span className="notification-icon">
                                    <svg
                                        className="olymp-chat---messages-icon"
                                        xlinkHref="svg-icons/sprites/icons.svg#olymp-chat---messages-icon"
                                    />
                                </span>
                                <div className="more">
                                    <svg
                                        className="olymp-three-dots-icon"
                                        xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                                    />
                                </div>
                            </li>

                            <li>
                                <div className="author-thumb">
                                    <img src="img/avatar60-sm.jpg" alt="author" />
                                </div>
                                <div className="notification-event">
                                    <a href="#" className="h6 notification-friend">
                                        Jake Parker
    </a>
                                    <span className="chat-message-item">
                                        Great, I’ll see you tomorrow!.
    </span>
                                    <span className="notification-date">
                                        <time
                                            className="entry-date updated"
                                            datetime="2004-07-24T18:18">
                                            4 hours ago
      </time>
                                    </span>
                                </div>
                                <span className="notification-icon">
                                    <svg
                                        className="olymp-chat---messages-icon"
                                        xlinkHref="svg-icons/sprites/icons.svg#olymp-chat---messages-icon"
                                    />
                                </span>

                                <div className="more">
                                    <svg
                                        className="olymp-three-dots-icon"
                                        xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                                    />
                                </div>
                            </li>
                            <li>
                                <div className="author-thumb">
                                    <img src="img/avatar61-sm.jpg" alt="author" />
                                </div>
                                <div className="notification-event">
                                    <a href="#" className="h6 notification-friend">
                                        Elaine Dreyfuss
    </a>
                                    <span className="chat-message-item">
                                        We’ll have to check that at the office and see if the
                                        client is on board with...
    </span>
                                    <span className="notification-date">
                                        <time
                                            className="entry-date updated"
                                            datetime="2004-07-24T18:18">
                                            Yesterday at 9:56pm
      </time>
                                    </span>
                                </div>
                                <span className="notification-icon">
                                    <svg
                                        className="olymp-chat---messages-icon"
                                        xlinkHref="svg-icons/sprites/icons.svg#olymp-chat---messages-icon"
                                    />
                                </span>
                                <div className="more">
                                    <svg
                                        className="olymp-three-dots-icon"
                                        xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                                    />
                                </div>
                            </li>

                            <li className="chat-group">
                                <div className="author-thumb">
                                    <img src="img/avatar11-sm.jpg" alt="author" />
                                    <img src="img/avatar12-sm.jpg" alt="author" />
                                    <img src="img/avatar13-sm.jpg" alt="author" />
                                    <img src="img/avatar10-sm.jpg" alt="author" />
                                </div>
                                <div className="notification-event">
                                    <a href="#" className="h6 notification-friend">
                                        You, Faye, Ed &amp; Jet +3
    </a>
                                    <span className="last-message-author">Ed:</span>
                                    <span className="chat-message-item">
                                        Yeah! Seems fine by me!
    </span>
                                    <span className="notification-date">
                                        <time
                                            className="entry-date updated"
                                            datetime="2004-07-24T18:18">
                                            March 16th at 10:23am
      </time>
                                    </span>
                                </div>
                                <span className="notification-icon">
                                    <svg
                                        className="olymp-chat---messages-icon"
                                        xlinkHref="svg-icons/sprites/icons.svg#olymp-chat---messages-icon"
                                    />
                                </span>
                                <div className="more">
                                    <svg
                                        className="olymp-three-dots-icon"
                                        xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>

                    <a href="#" className="view-all bg-purple">
                        View All Messages
</a>
                </div>
            </div>
        )
    }
}
