import React, { useState, prevState, setState } from 'react';
import { useMediaQuery } from 'react-responsive';

// import { Tabb } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faComment,
  faBell,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

import Search from '../../components/Search';
import Default, { Mobile } from '../../components/Wrappers/Queries';
import Notifications from './Notifications';
import ChatNotifications from './ChatNotifications';
import AuthorPage from './AuthorPage';

const NavItem = ({ children, active }) => {
  return (
    <li className='nav-item'>
      <div className={active ? 'nav-link active' : 'nav-link'}>{children}</div>
    </li>
  );
};

const DesktopNav = ({ refetch, auth }) => {
  return (
    <Default>
      <Search refetch={refetch} auth={auth} />
      <div className='control-block'>
        <ChatNotifications />
        <Notifications refetch={refetch} isMobile={false} />
        <AuthorPage user={auth.user} />
      </div>
    </Default>
  );
};

// REBUILD THE NAVIGATION USING BOOTSTRAP PANES / TABS
export const MobileNav = ({ refetch, auth, mobileToggle, status }) => {
  const [navRequestActive, setNavRequestState] = useState(false);
  const [navChatActive, setNavChatState] = useState(false);
  const [navNotificationActive, setNavNotificationState] = useState(false);
  const [navSearchActive, setNavSearchState] = useState(false);

  return (
    <Mobile>
      {!mobileToggle && (
        <div class='header-content-wrapper'>
          <ul class='nav nav-tabs mobile-app-tabs' role='tablist'>
            <li class='nav-item'>
              <a
                class={navRequestActive ? 'nav-link active' : 'nav-link'}
                data-toggle='tab'
                href='#request'
                role='tab'
                onClick={() => setNavRequestState(!navRequestActive)}
              >
                <div class='control-icon has-items'>
                  R <div class='label-avatar bg-blue'>6</div>
                </div>
              </a>
            </li>

            <li class='nav-item'>
              <a
                class={navChatActive ? 'nav-link active' : 'nav-link'}
                data-toggle='tab'
                href='#chat'
                role='tab'
                onClick={() => setNavChatState(!navChatActive)}
              >
                <div class='control-icon has-items'>
                  C <div class='label-avatar bg-purple'>2</div>
                </div>
              </a>
            </li>

            <li class='nav-item'>
              <a
                class='nav-link'
                data-toggle='tab'
                href='#notification'
                role='tab'
              >
                <div class='control-icon has-items'>
                  N <div class='label-avatar bg-primary'>8</div>
                </div>
              </a>
            </li>

            <li class='nav-item'>
              <a class='nav-link' data-toggle='tab' href='#search' role='tab'>
                S{' '}
              </a>
            </li>
          </ul>
        </div>
      )}
      {mobileToggle && (
        <div class='tab-content tab-content-responsive'>
          <div
            class={'tab-pane ' + (navRequestActive && 'active')}
            id='request'
            role='tabpanel'
          >
            <div class='mCustomScrollbar' data-mcs-theme='dark'>
              <div class='ui-block-title ui-block-title-small'>
                <h6 class='title'>FRIEND REQUESTS</h6>
                <a href='#'>Find Friends</a>
                <a href='#'>Settings</a>
              </div>
              <ul class='notification-list friend-requests'>
                <li>
                  <div class='notification-event'>
                    <a href='#' class='h6 notification-friend'>
                      Tamara Romanoff
                    </a>
                    <span class='chat-message-item'>
                      Mutual Friend: Sarah Hetfield
                    </span>
                  </div>
                  <span class='notification-icon'>
                    <a href='#' class='accept-request'>
                      <span class='icon-add without-text'>heart </span>
                    </a>

                    <a href='#' class='accept-request request-del'>
                      <span class='icon-minus'>heart </span>
                    </a>
                  </span>

                  <div class='more'>close </div>
                </li>
                <li>
                  <div class='notification-event'>
                    <a href='#' class='h6 notification-friend'>
                      Tony Stevens
                    </a>
                    <span class='chat-message-item'>4 Friends in Common</span>
                  </div>
                  <span class='notification-icon'>
                    <a href='#' class='accept-request'>
                      <span class='icon-add without-text'>heart </span>
                    </a>

                    <a href='#' class='accept-request request-del'>
                      <span class='icon-minus'>heart </span>
                    </a>
                  </span>

                  <div class='more'>close </div>
                </li>
                <li class='accepted'>
                  <div class='notification-event'>
                    You and{' '}
                    <a href='#' class='h6 notification-friend'>
                      Mary Jane Stark
                    </a>{' '}
                    just became friends. Write on{' '}
                    <a href='#' class='notification-link'>
                      her wall
                    </a>
                    .
                  </div>
                  <span class='notification-icon'>heart </span>

                  <div class='more'>close </div>
                </li>
                <li>
                  <div class='notification-event'>
                    <a href='#' class='h6 notification-friend'>
                      Stagg Clothing
                    </a>
                    <span class='chat-message-item'>9 Friends in Common</span>
                  </div>
                  <span class='notification-icon'>
                    <a href='#' class='accept-request'>
                      <span class='icon-add without-text'>heart </span>
                    </a>

                    <a href='#' class='accept-request request-del'>
                      <span class='icon-minus'>heart </span>
                    </a>
                  </span>

                  <div class='more'>close </div>
                </li>
              </ul>
              <a href='#' class='view-all bg-blue'>
                Check all your Events
              </a>
            </div>
          </div>

          <div class='tab-pane ' id='chat' role='tabpanel'>
            <div class='mCustomScrollbar' data-mcs-theme='dark'>
              <div class='ui-block-title ui-block-title-small'>
                <h6 class='title'>Chat / Messages</h6>
                <a href='#'>Mark all as read</a>
                <a href='#'>Settings</a>
              </div>

              <ul class='notification-list chat-message'>
                <li class='message-unread'>
                  <div class='notification-event'>
                    <a href='#' class='h6 notification-friend'>
                      Diana Jameson
                    </a>
                    <span class='chat-message-item'>
                      Hi James! It’s Diana, I just wanted to let you know that
                      we have to reschedule...
                    </span>
                    <span class='notification-date'>
                      <time
                        class='entry-date updated'
                        datetime='2004-07-24T18:18'
                      >
                        4 hours ago
                      </time>
                    </span>
                  </div>
                  <span class='notification-icon'>heart </span>
                  <div class='more'>close </div>
                </li>

                <li>
                  <div class='notification-event'>
                    <a href='#' class='h6 notification-friend'>
                      Jake Parker
                    </a>
                    <span class='chat-message-item'>
                      Great, I’ll see you tomorrow!.
                    </span>
                    <span class='notification-date'>
                      <time
                        class='entry-date updated'
                        datetime='2004-07-24T18:18'
                      >
                        4 hours ago
                      </time>
                    </span>
                  </div>
                  <span class='notification-icon'>heart </span>

                  <div class='more'>close </div>
                </li>
                <li>
                  <div class='notification-event'>
                    <a href='#' class='h6 notification-friend'>
                      Elaine Dreyfuss
                    </a>
                    <span class='chat-message-item'>
                      We’ll have to check that at the office and see if the
                      client is on board with...
                    </span>
                    <span class='notification-date'>
                      <time
                        class='entry-date updated'
                        datetime='2004-07-24T18:18'
                      >
                        Yesterday at 9:56pm
                      </time>
                    </span>
                  </div>
                  <span class='notification-icon'>heart </span>
                  <div class='more'>close </div>
                </li>

                <li class='chat-group'>
                  <div class='author-thumb'>
                    <img src='img/avatar11-sm.jpg' alt='author' />
                    <img src='img/avatar12-sm.jpg' alt='author' />
                    <img src='img/avatar13-sm.jpg' alt='author' />
                    <img src='img/avatar10-sm.jpg' alt='author' />
                  </div>
                  <div class='notification-event'>
                    <a href='#' class='h6 notification-friend'>
                      You, Faye, Ed &amp; Jet +3
                    </a>
                    <span class='last-message-author'>Ed:</span>
                    <span class='chat-message-item'>
                      Yeah! Seems fine by me!
                    </span>
                    <span class='notification-date'>
                      <time
                        class='entry-date updated'
                        datetime='2004-07-24T18:18'
                      >
                        March 16th at 10:23am
                      </time>
                    </span>
                  </div>
                  <span class='notification-icon'>heart </span>
                  <div class='more'>close</div>
                </li>
              </ul>

              <a href='#' class='view-all bg-purple'>
                View All Messages
              </a>
            </div>
          </div>

          <div class='tab-pane ' id='notification' role='tabpanel'>
            <div class='mCustomScrollbar' data-mcs-theme='dark'>
              <div class='ui-block-title ui-block-title-small'>
                <h6 class='title'>Notifications</h6>
                <a href='#'>Mark all as read</a>
                <a href='#'>Settings</a>
              </div>

              <ul class='notification-list'>
                <li>
                  <div class='notification-event'>
                    <div>
                      <a href='#' class='h6 notification-friend'>
                        Mathilda Brinker
                      </a>{' '}
                      commented on your new{' '}
                      <a href='#' class='notification-link'>
                        profile status
                      </a>
                      .
                    </div>
                    <span class='notification-date'>
                      <time
                        class='entry-date updated'
                        datetime='2004-07-24T18:18'
                      >
                        4 hours ago
                      </time>
                    </span>
                  </div>
                  <span class='notification-icon'>heart </span>

                  <div class='more'>close </div>
                </li>

                <li class='un-read'>
                  <div class='notification-event'>
                    <div>
                      You and{' '}
                      <a href='#' class='h6 notification-friend'>
                        Nicholas Grissom
                      </a>{' '}
                      just became friends. Write on{' '}
                      <a href='#' class='notification-link'>
                        his wall
                      </a>
                      .
                    </div>
                    <span class='notification-date'>
                      <time
                        class='entry-date updated'
                        datetime='2004-07-24T18:18'
                      >
                        9 hours ago
                      </time>
                    </span>
                  </div>
                  <span class='notification-icon'>heart </span>

                  <div class='more'>close </div>
                </li>

                <li class='with-comment-photo'>
                  <div class='notification-event'>
                    <div>
                      <a href='#' class='h6 notification-friend'>
                        Sarah Hetfield
                      </a>{' '}
                      commented on your{' '}
                      <a href='#' class='notification-link'>
                        photo
                      </a>
                      .
                    </div>
                    <span class='notification-date'>
                      <time
                        class='entry-date updated'
                        datetime='2004-07-24T18:18'
                      >
                        Yesterday at 5:32am
                      </time>
                    </span>
                  </div>
                  <span class='notification-icon'>heart </span>

                  <div class='comment-photo'>
                    <span>
                      “She looks incredible in that outfit! We should see
                      each...”
                    </span>
                  </div>

                  <div class='more'>close </div>
                </li>

                <li>
                  <div class='notification-event'>
                    <div>
                      <a href='#' class='h6 notification-friend'>
                        Green Goo Rock
                      </a>{' '}
                      invited you to attend to his event Goo in{' '}
                      <a href='#' class='notification-link'>
                        Gotham Bar
                      </a>
                      .
                    </div>
                    <span class='notification-date'>
                      <time
                        class='entry-date updated'
                        datetime='2004-07-24T18:18'
                      >
                        March 5th at 6:43pm
                      </time>
                    </span>
                  </div>
                  <span class='notification-icon'>heart </span>

                  <div class='more'>close </div>
                </li>

                <li>
                  <div class='notification-event'>
                    <div>
                      <a href='#' class='h6 notification-friend'>
                        James Summers
                      </a>{' '}
                      commented on your new{' '}
                      <a href='#' class='notification-link'>
                        profile status
                      </a>
                      .
                    </div>
                    <span class='notification-date'>
                      <time
                        class='entry-date updated'
                        datetime='2004-07-24T18:18'
                      >
                        March 2nd at 8:29pm
                      </time>
                    </span>
                  </div>
                  <span class='notification-icon'>heart </span>

                  <div class='more'>delete</div>
                </li>
              </ul>

              <a href='#' class='view-all bg-primary'>
                View All Notifications
              </a>
            </div>
          </div>

          <div class='tab-pane ' id='search' role='tabpanel'>
            <form class='search-bar w-search notification-list friend-requests'>
              <div class='form-group with-button'>
                <input
                  class='form-control js-user-search'
                  placeholder='Search here people or pages...'
                  type='text'
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </Mobile>
  );
};

export default DesktopNav;

/* <Nav justify variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav> */

/* <ul className='nav nav-tabs mobile-app-tabs' role='tablist'>
  <NavItem active={true}>
    <FontAwesomeIcon
      size='2x'
      color='white'
      icon={faHome}
      style={{ height: '24px', marginTop: '5px' }}
    />
  </NavItem>
  <NavItem active={false}>
    <ChatNotifications />
  </NavItem>
  <NavItem active={false}>
    <a href='#notifications' data-toggle='tab' role='tab' selected='true'>
      <FontAwesomeIcon
        size='2x'
        color='white'
        icon={faBell}
        style={{ height: '24px', marginTop: '5px' }}
      />
    </a>
  </NavItem>
  <NavItem active={false}>
    <Search refetch={refetch} auth={auth} />
  </NavItem>
</ul>; */
