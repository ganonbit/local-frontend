import React from 'react'
/**
 * That will be NewsFeed Component
 * just create to test routing and Authentication
 */

const Home = () => (
  
  <div className="page-has-left-panels page-has-right-panels pr-0">
    <div className="fixed-sidebar">
      <div className="fixed-sidebar-left sidebar--small" id="sidebar-left">
        <a href="02-ProfilePage.html" className="logo">
          <div className="img-wrap">
            <img src="img/avocado-img.png" alt="Olympus" />
          </div>
        </a>

        <div className="mCustomScrollbar" data-mcs-theme="dark">
          <ul className="left-menu">
            <li>
              <a href="#" className="js-sidebar-open">
                <img
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="OPEN MENU"
                  src="img/menu-img.png"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="03-Newsfeed.html">
                <img
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="NEWSFEED"
                  src="img/avocado-icon.png"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="16-FavPagesFeed.html">
                <img
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="FAV PAGE"
                  src="img/search-icon.png"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="17-FriendGroups.html">
                <img
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="FRIEND GROUPS"
                  src="img/star-icon.png"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="18-MusicAndPlaylists.html">
                <img
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="MUSIC&amp;PLAYLISTS"
                  src="img/chat-icon.png"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="fixed-sidebar-left sidebar--large" id="sidebar-left-1">
        <a href="02-ProfilePage.html" className="logo">
          <div className="img-wrap">
            <img src="img/avocado-img.png" alt="Olympus" />
          </div>
          <div className="title-block">
            <h6 className="logo-title">olympus</h6>
          </div>
        </a>

        <div className="mCustomScrollbar" data-mcs-theme="dark">
          <ul className="left-menu">
            <li>
              <a href="#" className="js-sidebar-open">
                <svg
                  className="olymp-close-icon left-menu-icon"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-close-icon"
                />
                <span className="left-menu-title">Collapse Menu</span>
              </a>
            </li>
            <li>
              <a href="03-Newsfeed.html">
                <svg
                  className="olymp-newsfeed-icon left-menu-icon"
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="NEWSFEED"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-newsfeed-icon"
                />
                <span className="left-menu-title">Newsfeed</span>
              </a>
            </li>
            <li>
              <a href="16-FavPagesFeed.html">
                <svg
                  className="olymp-star-icon left-menu-icon"
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="FAV PAGE"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon"
                />
                <span className="left-menu-title">Fav Pages Feed</span>
              </a>
            </li>
            <li>
              <a href="17-FriendGroups.html">
                <svg
                  className="olymp-happy-faces-icon left-menu-icon"
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="FRIEND GROUPS"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-faces-icon"
                />
                <span className="left-menu-title">Friend Groups</span>
              </a>
            </li>
            <li>
              <a href="18-MusicAndPlaylists.html">
                <svg
                  className="olymp-headphones-icon left-menu-icon"
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="MUSIC&PLAYLISTS"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-headphones-icon"
                />
                <span className="left-menu-title">Music & Playlists</span>
              </a>
            </li>
            <li>
              <a href="19-WeatherWidget.html">
                <svg
                  className="olymp-weather-icon left-menu-icon"
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="WEATHER APP"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-weather-icon"
                />
                <span className="left-menu-title">Weather App</span>
              </a>
            </li>
            <li>
              <a href="20-CalendarAndEvents-MonthlyCalendar.html">
                <svg
                  className="olymp-calendar-icon left-menu-icon"
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="CALENDAR AND EVENTS"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-calendar-icon"
                />
                <span className="left-menu-title">Calendar and Events</span>
              </a>
            </li>
            <li>
              <a href="24-CommunityBadges.html">
                <svg
                  className="olymp-badge-icon left-menu-icon"
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="Community Badges"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-badge-icon"
                />
                <span className="left-menu-title">Community Badges</span>
              </a>
            </li>
            <li>
              <a href="25-FriendsBirthday.html">
                <svg
                  className="olymp-cupcake-icon left-menu-icon"
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="Friends Birthdays"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-cupcake-icon"
                />
                <span className="left-menu-title">Friends Birthdays</span>
              </a>
            </li>
            <li>
              <a href="26-Statistics.html">
                <svg
                  className="olymp-stats-icon left-menu-icon"
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="Account Stats"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-stats-icon"
                />
                <span className="left-menu-title">Account Stats</span>
              </a>
            </li>
            <li>
              <a href="27-ManageWidgets.html">
                <svg
                  className="olymp-manage-widgets-icon left-menu-icon"
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="Manage Widgets"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-manage-widgets-icon"
                />
                <span className="left-menu-title">Manage Widgets</span>
              </a>
            </li>
          </ul>

          <div className="profile-completion">
            <div className="skills-item">
              <div className="skills-item-info">
                <span className="skills-item-title">Profile Completion</span>
                <span className="skills-item-count">
                  <span
                    className="count-animate"
                    data-speed="1000"
                    data-refresh-interval="50"
                    data-to="76"
                    data-from="0"></span>
                  <span className="units">76%</span>
                </span>
              </div>
              <div className="skills-item-meter">
                <span
                  className="skills-item-meter-active bg-primary"
                  style={{ width: '76%' }}></span>
              </div>
            </div>

            <span>
              Complete <a href="#">your profile</a> so people can know more
              about you!
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="fixed-sidebar fixed-sidebar-responsive">
      <div
        className="fixed-sidebar-left sidebar--small"
        id="sidebar-left-responsive">
        <a href="#" className="logo js-sidebar-open">
          <img src="img/avocado-img.png" alt="Olympus" />
        </a>
      </div>

      <div
        className="fixed-sidebar-left sidebar--large"
        id="sidebar-left-1-responsive">
        <a href="#" className="logo">
          <div className="img-wrap">
            <img src="img/avocado-img.png" alt="Olympus" />
          </div>
        </a>

        <div className="mCustomScrollbar" data-mcs-theme="dark">
          <div className="control-block">
            <div className="author-page author vcard inline-items">
              <div className="author-thumb">
                <img alt="author" src="img/author-page.jpg" className="avatar" />
                <span className="icon-status online"></span>
              </div>
              <a href="02-ProfilePage.html" className="author-name fn">
                <div className="author-title">
                  James Spiegel{' '}
                  <svg
                    className="olymp-dropdown-arrow-icon"
                    xlinkHref="svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"
                  />
                </div>
                <span className="author-subtitle">SPACE COWBOY</span>
              </a>
            </div>
          </div>

          <div className="ui-block-title ui-block-title-small">
            <h6 className="title">MAIN SECTIONS</h6>
          </div>

          <ul className="left-menu">
            <li>
              <a href="#" className="js-sidebar-open">
                <svg
                  className="olymp-close-icon left-menu-icon"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-close-icon"
                />
                <span className="left-menu-title">Collapse Menu</span>
              </a>
            </li>
            <li>
              <a href="mobile-index.html">
                <svg
                  className="olymp-newsfeed-icon left-menu-icon"
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="NEWSFEED"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-newsfeed-icon"
                />
                <span className="left-menu-title">Newsfeed</span>
              </a>
            </li>
            <li>
              <a href="Mobile-28-YourAccount-PersonalInformation.html">
                <svg
                  className="olymp-star-icon left-menu-icon"
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="FAV PAGE"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon"
                />
                <span className="left-menu-title">Fav Pages Feed</span>
              </a>
            </li>
            <li>
              <a href="mobile-29-YourAccount-AccountSettings.html">
                <svg
                  className="olymp-happy-faces-icon left-menu-icon"
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="FRIEND GROUPS"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-faces-icon"
                />
                <span className="left-menu-title">Friend Groups</span>
              </a>
            </li>
            <li>
              <a href="Mobile-30-YourAccount-ChangePassword.html">
                <svg
                  className="olymp-headphones-icon left-menu-icon"
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="MUSIC&PLAYLISTS"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-headphones-icon"
                />
                <span className="left-menu-title">Music & Playlists</span>
              </a>
            </li>
            <li>
              <a href="Mobile-31-YourAccount-HobbiesAndInterests.html">
                <svg
                  className="olymp-weather-icon left-menu-icon"
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="WEATHER APP"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-weather-icon"
                />
                <span className="left-menu-title">Weather App</span>
              </a>
            </li>
            <li>
              <a href="Mobile-32-YourAccount-EducationAndEmployement.html">
                <svg
                  className="olymp-calendar-icon left-menu-icon"
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="CALENDAR AND EVENTS"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-calendar-icon"
                />
                <span className="left-menu-title">Calendar and Events</span>
              </a>
            </li>
            <li>
              <a href="Mobile-33-YourAccount-Notifications.html">
                <svg
                  className="olymp-badge-icon left-menu-icon"
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="Community Badges"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-badge-icon"
                />
                <span className="left-menu-title">Community Badges</span>
              </a>
            </li>
            <li>
              <a href="Mobile-34-YourAccount-ChatMessages.html">
                <svg
                  className="olymp-cupcake-icon left-menu-icon"
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="Friends Birthdays"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-cupcake-icon"
                />
                <span className="left-menu-title">Friends Birthdays</span>
              </a>
            </li>
            <li>
              <a href="Mobile-35-YourAccount-FriendsRequests.html">
                <svg
                  className="olymp-stats-icon left-menu-icon"
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="Account Stats"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-stats-icon"
                />
                <span className="left-menu-title">Account Stats</span>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  className="olymp-manage-widgets-icon left-menu-icon"
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="Manage Widgets"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-manage-widgets-icon"
                />
                <span className="left-menu-title">Manage Widgets</span>
              </a>
            </li>
          </ul>

          <div className="ui-block-title ui-block-title-small">
            <h6 className="title">YOUR ACCOUNT</h6>
          </div>

          <ul className="account-settings">
            <li>
              <a href="#">
                <svg
                  className="olymp-menu-icon"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-menu-icon"
                />

                <span>Profile Settings</span>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  className="olymp-star-icon left-menu-icon"
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="FAV PAGE"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon"
                />

                <span>Create Fav Page</span>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  className="olymp-logout-icon"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-logout-icon"
                />

                <span>Log Out</span>
              </a>
            </li>
          </ul>

          <div className="ui-block-title ui-block-title-small">
            <h6 className="title">About Olympus</h6>
          </div>

          <ul className="about-olympus">
            <li>
              <a href="#">
                <span>Terms and Conditions</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>FAQs</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Careers</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <header className="header" id="site-header">
      <div className="page-title">
        <a href="#">
          <img src="img/avocado-logo.png" alt="" />
        </a>
      </div>

      <div className="header-content-wrapper">
        <form className="search-bar w-search notification-list friend-requests">
          <div className="form-group with-button">
            <input
              className="form-control js-user-search"
              placeholder="Search here people or pages..."
              type="text"
            />
            <button>
              <svg
                className="olymp-magnifying-glass-icon"
                xlinkHref="svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon"
              />
            </button>
          </div>
        </form>

        {/* <a href="#" className="link-find-friend">
          Find Friends
        </a> */}

        <div className="control-block">
          {/* <div className="control-icon more has-items">
            <svg
              className="olymp-happy-face-icon"
              xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon"
            />
            <div className="label-avatar bg-blue">6</div>

            <div className="more-dropdown more-with-triangle triangle-top-center">
              <div className="ui-block-title ui-block-title-small">
                <h6 className="title">FRIEND REQUESTS</h6>
                <a href="#">Find Friends</a>
                <a href="#">Settings</a>
              </div>

              <div className="mCustomScrollbar" data-mcs-theme="dark">
                <ul className="notification-list friend-requests">
                  <li>
                    <div className="author-thumb">
                      <img src="img/avatar55-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">
                        Tamara Romanoff
                      </a>
                      <span className="chat-message-item">
                        Mutual Friend: Sarah Hetfield
                      </span>
                    </div>
                    <span className="notification-icon">
                      <a href="#" className="accept-request">
                        <span className="icon-add without-text">
                          <svg
                            className="olymp-happy-face-icon"
                            xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon"
                          />
                        </span>
                      </a>

                      <a href="#" className="accept-request request-del">
                        <span className="icon-minus">
                          <svg
                            className="olymp-happy-face-icon"
                            xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon"
                          />
                        </span>
                      </a>
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
                      <img src="img/avatar56-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">
                        Tony Stevens
                      </a>
                      <span className="chat-message-item">4 Friends in Common</span>
                    </div>
                    <span className="notification-icon">
                      <a href="#" className="accept-request">
                        <span className="icon-add without-text">
                          <svg
                            className="olymp-happy-face-icon"
                            xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon"
                          />
                        </span>
                      </a>

                      <a href="#" className="accept-request request-del">
                        <span className="icon-minus">
                          <svg
                            className="olymp-happy-face-icon"
                            xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon"
                          />
                        </span>
                      </a>
                    </span>

                    <div className="more">
                      <svg
                        className="olymp-three-dots-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                      />
                    </div>
                  </li>

                  <li className="accepted">
                    <div className="author-thumb">
                      <img src="img/avatar57-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      You and{' '}
                      <a href="#" className="h6 notification-friend">
                        Mary Jane Stark
                      </a>{' '}
                      just became friends. Write on{' '}
                      <a href="#" className="notification-link">
                        her wall
                      </a>
                      .
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

                  <li>
                    <div className="author-thumb">
                      <img src="img/avatar58-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">
                        Stagg Clothing
                      </a>
                      <span className="chat-message-item">9 Friends in Common</span>
                    </div>
                    <span className="notification-icon">
                      <a href="#" className="accept-request">
                        <span className="icon-add without-text">
                          <svg
                            className="olymp-happy-face-icon"
                            xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon"
                          />
                        </span>
                      </a>

                      <a href="#" className="accept-request request-del">
                        <span className="icon-minus">
                          <svg
                            className="olymp-happy-face-icon"
                            xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon"
                          />
                        </span>
                      </a>
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

              <a href="#" className="view-all bg-blue">
                Check all your Events
              </a>
            </div>
          </div> */}

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

          <div className="control-icon more has-items">
            <svg
              className="olymp-thunder-icon"
              xlinkHref="svg-icons/sprites/icons.svg#olymp-thunder-icon"
            />

            <div className="label-avatar bg-primary">8</div>

            <div className="more-dropdown more-with-triangle triangle-top-center">
              <div className="ui-block-title ui-block-title-small">
                <h6 className="title">Notifications</h6>
                <a href="#">Mark all as read</a>
                <a href="#">Settings</a>
              </div>

              <div className="mCustomScrollbar" data-mcs-theme="dark">
                <ul className="notification-list">
                  <li>
                    <div className="author-thumb">
                      <img src="img/avatar62-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <div>
                        <a href="#" className="h6 notification-friend">
                          Mathilda Brinker
                        </a>{' '}
                        commented on your new{' '}
                        <a href="#" className="notification-link">
                          profile status
                        </a>
                        .
                      </div>
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
                        <a href="#" className="h6 notification-friend">
                          Nicholas Grissom
                        </a>{' '}
                        just became friends. Write on{' '}
                        <a href="#" className="notification-link">
                          his wall
                        </a>
                        .
                      </div>
                      <span className="notification-date">
                        <time
                          className="entry-date updated"
                          datetime="2004-07-24T18:18">
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
                        <a href="#" className="h6 notification-friend">
                          Sarah Hetfield
                        </a>{' '}
                        commented on your{' '}
                        <a href="#" className="notification-link">
                          photo
                        </a>
                        .
                      </div>
                      <span className="notification-date">
                        <time
                          className="entry-date updated"
                          datetime="2004-07-24T18:18">
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

                    <div className="comment-photo">
                      <img src="img/comment-photo1.jpg" alt="photo" />
                      <span>
                        “She looks incredible in that outfit! We should see
                        each...”
                      </span>
                    </div>

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

                  <li>
                    <div className="author-thumb">
                      <img src="img/avatar65-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <div>
                        <a href="#" className="h6 notification-friend">
                          Green Goo Rock
                        </a>{' '}
                        invited you to attend to his event Goo in{' '}
                        <a href="#" className="notification-link">
                          Gotham Bar
                        </a>
                        .
                      </div>
                      <span className="notification-date">
                        <time
                          className="entry-date updated"
                          datetime="2004-07-24T18:18">
                          March 5th at 6:43pm
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

                  <li>
                    <div className="author-thumb">
                      <img src="img/avatar66-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <div>
                        <a href="#" className="h6 notification-friend">
                          James Summers
                        </a>{' '}
                        commented on your new{' '}
                        <a href="#" className="notification-link">
                          profile status
                        </a>
                        .
                      </div>
                      <span className="notification-date">
                        <time
                          className="entry-date updated"
                          datetime="2004-07-24T18:18">
                          March 2nd at 8:29pm
                        </time>
                      </span>
                    </div>
                    <span className="notification-icon">
                      <svg
                        className="olymp-heart-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon"
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
                </ul>
              </div>

              <a href="#" className="view-all bg-primary">
                View All Notifications
              </a>
            </div>
          </div>

          <div className="author-page author vcard inline-items more">
            <div className="author-thumb">
              <img alt="author" src="img/author-page.jpg" className="avatar" />
              <span className="icon-status online"></span>
              <div className="more-dropdown more-with-triangle">
                <div className="mCustomScrollbar" data-mcs-theme="dark">
                  <div className="ui-block-title ui-block-title-small">
                    <h6 className="title">Your Account</h6>
                  </div>

                  <ul className="account-settings">
                    <li>
                      <a href="29-YourAccount-AccountSettings.html">
                        <svg
                          className="olymp-menu-icon"
                          xlinkHref="svg-icons/sprites/icons.svg#olymp-menu-icon"
                        />

                        <span>Profile Settings</span>
                      </a>
                    </li>
                    <li>
                      <a href="36-FavPage-SettingsAndCreatePopup.html">
                        <svg
                          className="olymp-star-icon left-menu-icon"
                          data-toggle="tooltip"
                          data-placement="right"
                          data-original-title="FAV PAGE"
                          xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon"
                        />

                        <span>Create Fav Page</span>
                      </a>
                    </li>
                    <li>
                      <a href="/login"
                      onClick={()=>localStorage.clear()}
                      >
                        <svg
                          className="olymp-logout-icon"
                          xlinkHref="svg-icons/sprites/icons.svg#olymp-logout-icon"
                        />

                        <span>Log Out</span>
                      </a>
                    </li>
                  </ul>

                  <div className="ui-block-title ui-block-title-small">
                    <h6 className="title">Chat Settings</h6>
                  </div>

                  <ul className="chat-settings">
                    <li>
                      <a href="#">
                        <span className="icon-status online"></span>
                        <span>Online</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-status away"></span>
                        <span>Away</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-status disconected"></span>
                        <span>Disconnected</span>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <span className="icon-status status-invisible"></span>
                        <span>Invisible</span>
                      </a>
                    </li>
                  </ul>

                  <div className="ui-block-title ui-block-title-small">
                    <h6 className="title">Custom Status</h6>
                  </div>

                  <form className="form-group with-button custom-status">
                    <input
                      className="form-control"
                      placeholder=""
                      type="text"
                      value="Space Cowboy"
                    />

                    <button className="bg-purple">
                      <svg
                        className="olymp-check-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-check-icon"
                      />
                    </button>
                  </form>

                  <div className="ui-block-title ui-block-title-small">
                    <h6 className="title">About Olympus</h6>
                  </div>

                  <ul>
                    <li>
                      <a href="#">
                        <span>Terms and Conditions</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>FAQs</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Careers</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Contact</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <a href="02-ProfilePage.html" className="author-name fn">
              <div className="author-title">
                James Spiegel{' '}
                <svg
                  className="olymp-dropdown-arrow-icon"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"
                />
              </div>
              <span className="author-subtitle">SPACE COWBOY</span>
            </a>
          </div>
        </div>
      </div>
    </header>
<div className="header-spacer"></div>
    <div className="container">
      <div className="row">
        {/* <!-- Main Content --> */}

        <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
          <div className="ui-block">
            {/* <!-- News Feed Form  --> */}

            <div className="news-feed-form">
              {/* <!-- Nav tabs --> */}
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active inline-items"
                    data-toggle="tab"
                    href="#home-1"
                    role="tab"
                    aria-expanded="true">
                    <svg
                      className="olymp-status-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-status-icon"
                    />

                    <span>Status</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link inline-items"
                    data-toggle="tab"
                    href="#profile-1"
                    role="tab"
                    aria-expanded="false">
                    <svg
                      className="olymp-multimedia-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-multimedia-icon"
                    />

                    <span>Multimedia</span>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link inline-items"
                    data-toggle="tab"
                    href="#blog"
                    role="tab"
                    aria-expanded="false">
                    <svg
                      className="olymp-blog-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-blog-icon"
                    />

                    <span>Blog Post</span>
                  </a>
                </li>
              </ul>

              {/* <!-- Tab panes --> */}
              <div className="tab-content">
                <div
                  className="tab-pane active"
                  id="home-1"
                  role="tabpanel"
                  aria-expanded="true">
                  <form>
                    <div className="author-thumb">
                      <img src="img/author-page.jpg" alt="author" />
                    </div>
                    <div className="form-group with-icon label-floating is-empty">
                      <label className="control-label">
                        Share what you are thinking here...
                      </label>
                      <textarea className="form-control" placeholder=""></textarea>
                    </div>
                    <div className="add-options-message">
                      <a
                        href="#"
                        className="options-message"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="ADD PHOTOS">
                        <svg
                          className="olymp-camera-icon"
                          data-toggle="modal"
                          data-target="#update-header-photo"
                          xlinkHref="svg-icons/sprites/icons.svg#olymp-camera-icon"
                        />
                      </a>
                      <a
                        href="#"
                        className="options-message"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="TAG YOUR FRIENDS">
                        <svg
                          className="olymp-computer-icon"
                          xlinkHref="svg-icons/sprites/icons.svg#olymp-computer-icon"
                        />
                      </a>

                      <a
                        href="#"
                        className="options-message"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="ADD LOCATION">
                        <svg
                          className="olymp-small-pin-icon"
                          xlinkHref="svg-icons/sprites/icons.svg#olymp-small-pin-icon"
                        />
                      </a>

                      <button className="btn btn-primary btn-md-2">
                        Post Status
                      </button>
                      <button className="btn btn-md-2 btn-border-think btn-transparent c-grey">
                        Preview
                      </button>
                    </div>
                  </form>
                </div>

                <div
                  className="tab-pane"
                  id="profile-1"
                  role="tabpanel"
                  aria-expanded="true">
                  <form>
                    <div className="author-thumb">
                      <img src="img/author-page.jpg" alt="author" />
                    </div>
                    <div className="form-group with-icon label-floating is-empty">
                      <label className="control-label">
                        Share what you are thinking here...
                      </label>
                      <textarea className="form-control" placeholder=""></textarea>
                    </div>
                    <div className="add-options-message">
                      <a
                        href="#"
                        className="options-message"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="ADD PHOTOS">
                        <svg
                          className="olymp-camera-icon"
                          data-toggle="modal"
                          data-target="#update-header-photo"
                          xlinkHref="svg-icons/sprites/icons.svg#olymp-camera-icon"
                        />
                      </a>
                      <a
                        href="#"
                        className="options-message"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="TAG YOUR FRIENDS">
                        <svg
                          className="olymp-computer-icon"
                          xlinkHref="svg-icons/sprites/icons.svg#olymp-computer-icon"
                        />
                      </a>

                      <a
                        href="#"
                        className="options-message"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="ADD LOCATION">
                        <svg
                          className="olymp-small-pin-icon"
                          xlinkHref="svg-icons/sprites/icons.svg#olymp-small-pin-icon"
                        />
                      </a>

                      <button className="btn btn-primary btn-md-2">
                        Post Status
                      </button>
                      <button className="btn btn-md-2 btn-border-think btn-transparent c-grey">
                        Preview
                      </button>
                    </div>
                  </form>
                </div>

                <div
                  className="tab-pane"
                  id="blog"
                  role="tabpanel"
                  aria-expanded="true">
                  <form>
                    <div className="author-thumb">
                      <img src="img/author-page.jpg" alt="author" />
                    </div>
                    <div className="form-group with-icon label-floating is-empty">
                      <label className="control-label">
                        Share what you are thinking here...
                      </label>
                      <textarea className="form-control" placeholder=""></textarea>
                    </div>
                    <div className="add-options-message">
                      <a
                        href="#"
                        className="options-message"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="ADD PHOTOS">
                        <svg
                          className="olymp-camera-icon"
                          data-toggle="modal"
                          data-target="#update-header-photo"
                          xlinkHref="svg-icons/sprites/icons.svg#olymp-camera-icon"
                        />
                      </a>
                      <a
                        href="#"
                        className="options-message"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="TAG YOUR FRIENDS">
                        <svg
                          className="olymp-computer-icon"
                          xlinkHref="svg-icons/sprites/icons.svg#olymp-computer-icon"
                        />
                      </a>

                      <a
                        href="#"
                        className="options-message"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="ADD LOCATION">
                        <svg
                          className="olymp-small-pin-icon"
                          xlinkHref="svg-icons/sprites/icons.svg#olymp-small-pin-icon"
                        />
                      </a>

                      <button className="btn btn-primary btn-md-2">
                        Post Status
                      </button>
                      <button className="btn btn-md-2 btn-border-think btn-transparent c-grey">
                        Preview
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* <!-- ... end News Feed Form  -->		 */}
          </div>

          <div id="newsfeed-items-grid">
            <div className="ui-block">
              <article className="hentry post video">
                <div className="post__author author vcard inline-items">
                  <img src="img/avatar7-sm.jpg" alt="author" />

                  <div className="author-date">
                    <a className="h6 post__author-name fn" href="#">
                      Marina Valentine
                    </a>{' '}
                    shared a <a href="#">link</a>
                    <div className="post__date">
                      <time className="published" datetime="2004-07-24T18:18">
                        March 4 at 2:05pm
                      </time>
                    </div>
                  </div>

                  <div className="more">
                    <svg
                      className="olymp-three-dots-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                    />
                    <ul className="more-dropdown">
                      <li>
                        <a href="#">Edit Post</a>
                      </li>
                      <li>
                        <a href="#">Delete Post</a>
                      </li>
                      <li>
                        <a href="#">Turn Off Notifications</a>
                      </li>
                      <li>
                        <a href="#">Select as Featured</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <p>
                  Hey <a href="#">Cindi</a>, you should really check out this
                  new song by Iron Maid. The next time they come to the city we
                  should totally go!
                </p>

                <div className="post-video">
                  <div className="video-thumb">
                    <img src="img/video-youtube1.jpg" alt="photo" />
                    <a
                      href="https://youtube.com/watch?v=excVFQ2TWig"
                      className="play-video">
                      <svg
                        className="olymp-play-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-play-icon"
                      />
                    </a>
                  </div>

                  <div className="video-content">
                    <a href="#" className="h4 title">
                      Iron Maid - ChillGroves
                    </a>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur ipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua...
                    </p>
                    <a href="#" className="link-site">
                      YOUTUBE.COM
                    </a>
                  </div>
                </div>

                <div className="post-additional-info inline-items">
                  <a href="#" className="post-add-icon inline-items">
                    <svg
                      className="olymp-heart-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon"
                    />
                    <span>18</span>
                  </a>

                  <ul className="friends-harmonic">
                    <li>
                      <a href="#">
                        <img src="img/friend-harmonic9.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/friend-harmonic10.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/friend-harmonic7.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/friend-harmonic8.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/friend-harmonic11.jpg" alt="friend" />
                      </a>
                    </li>
                  </ul>

                  <div className="names-people-likes">
                    <a href="#">Jenny</a>, <a href="#">Robert</a> and
                    <br />
                    18 more liked this
                  </div>

                  <div className="comments-shared">
                    <a href="#" className="post-add-icon inline-items">
                      <svg
                        className="olymp-speech-balloon-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"
                      />

                      <span>0</span>
                    </a>

                    <a href="#" className="post-add-icon inline-items">
                      <svg
                        className="olymp-share-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-share-icon"
                      />

                      <span>16</span>
                    </a>
                  </div>
                </div>

                <div className="control-block-button post-control-button">
                  <a href="#" className="btn btn-control likes">
                    <img src="img/heart-icon.png" alt="" />
                    <div className="ripple-container"></div>
                  </a>

                  <a href="#" className="btn btn-control ratings">
                    <img src="img/star-icon2.png" alt="" />
                  </a>

                  <a href="#" className="btn btn-control share-link">
                    <img src="img/share-icon.png" alt="" />
                  </a>
                  <a href="#" className="btn btn-control comments">
                    <img src="img/comments-icon.png" alt="" />
                  </a>
                </div>
              </article>
            </div>

            <div className="ui-block">
              <article className="hentry post">
                <div className="post__author author vcard inline-items">
                  <img src="img/avatar10-sm.jpg" alt="author" />

                  <div className="author-date">
                    <a className="h6 post__author-name fn" href="#">
                      Elaine Dreyfuss
                    </a>
                    <div className="post__date">
                      <time className="published" datetime="2004-07-24T18:18">
                        9 hours ago
                      </time>
                    </div>
                  </div>

                  <div className="more">
                    <svg
                      className="olymp-three-dots-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                    />
                    <ul className="more-dropdown">
                      <li>
                        <a href="#">Edit Post</a>
                      </li>
                      <li>
                        <a href="#">Delete Post</a>
                      </li>
                      <li>
                        <a href="#">Turn Off Notifications</a>
                      </li>
                      <li>
                        <a href="#">Select as Featured</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempo incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris consequat.
                </p>

                <div className="post-additional-info inline-items">
                  <a href="#" className="post-add-icon inline-items">
                    <svg
                      className="olymp-heart-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon"
                    />
                    <span>24</span>
                  </a>

                  <ul className="friends-harmonic">
                    <li>
                      <a href="#">
                        <img src="img/friend-harmonic7.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/friend-harmonic8.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/friend-harmonic9.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/friend-harmonic10.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/friend-harmonic11.jpg" alt="friend" />
                      </a>
                    </li>
                  </ul>

                  <div className="names-people-likes">
                    <a href="#">You</a>, <a href="#">Elaine</a> and
                    <br />
                    22 more liked this
                  </div>

                  <div className="comments-shared">
                    <a href="#" className="post-add-icon inline-items">
                      <svg
                        className="olymp-speech-balloon-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"
                      />
                      <span>17</span>
                    </a>

                    <a href="#" className="post-add-icon inline-items">
                      <svg
                        className="olymp-share-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-share-icon"
                      />
                      <span>24</span>
                    </a>
                  </div>
                </div>

                <div className="control-block-button post-control-button">
                  <a href="#" className="btn btn-control likes">
                    <img src="img/heart-icon.png" alt="" />
                    <div className="ripple-container"></div>
                  </a>

                  <a href="#" className="btn btn-control ratings">
                    <img src="img/star-icon2.png" alt="" />
                  </a>

                  <a href="#" className="btn btn-control share-link">
                    <img src="img/share-icon.png" alt="" />
                  </a>
                  <a href="#" className="btn btn-control comments">
                    <img src="img/comments-icon.png" alt="" />
                  </a>
                </div>
              </article>

              {/* <!-- Comments --> */}

              <ul className="comments-list">
                <li className="comment-item">
                  <div className="post__author author vcard inline-items">
                    <img src="img/author-page.jpg" alt="author" />

                    <div className="author-date">
                      <a
                        className="h6 post__author-name fn"
                        href="02-ProfilePage.html">
                        James Spiegel
                      </a>
                      <div className="post__date">
                        <time className="published" datetime="2004-07-24T18:18">
                          38 mins ago
                        </time>
                      </div>
                    </div>

                    <a href="#" className="more">
                      <svg
                        className="olymp-three-dots-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                      />
                    </a>
                  </div>

                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium der doloremque laudantium.
                  </p>

                  <a href="#" className="post-add-icon inline-items">
                    <svg
                      className="olymp-heart-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon"
                    />
                    <span>3</span>
                  </a>
                  <a href="#" className="reply">
                    Reply
                  </a>
                </li>
                <li className="comment-item">
                  <div className="post__author author vcard inline-items">
                    <img src="img/avatar1-sm.jpg" alt="author" />

                    <div className="author-date">
                      <a className="h6 post__author-name fn" href="#">
                        Mathilda Brinker
                      </a>
                      <div className="post__date">
                        <time className="published" datetime="2004-07-24T18:18">
                          1 hour ago
                        </time>
                      </div>
                    </div>

                    <a href="#" className="more">
                      <svg
                        className="olymp-three-dots-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                      />
                    </a>
                  </div>

                  <p>
                    Ratione voluptatem sequi en lod nesciunt. Neque porro
                    quisquam est, quinder dolorem ipsum quia dolor sit amet,
                    consectetur adipisci velit en lorem ipsum duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum.
                  </p>

                  <a href="#" className="post-add-icon inline-items">
                    <svg
                      className="olymp-heart-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon"
                    />
                    <span>8</span>
                  </a>
                  <a href="#" className="reply">
                    Reply
                  </a>
                </li>
              </ul>

              {/* <!-- ... end Comments --> */}

              <a href="#" className="more-comments">
                View more comments <span>+</span>
              </a>

              {/* <!-- Comment Form  --> */}

              <form className="comment-form inline-items">
                <div className="post__author author vcard inline-items">
                  <img src="img/author-page.jpg" alt="author" />

                  <div className="form-group with-icon-right ">
                    <textarea className="form-control" placeholder=""></textarea>
                    <div className="add-options-message">
                      <a
                        href="#"
                        className="options-message"
                        data-toggle="modal"
                        data-target="#update-header-photo">
                        <svg
                          className="olymp-camera-icon"
                          xlinkHref="svg-icons/sprites/icons.svg#olymp-camera-icon"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <button className="btn btn-md-2 btn-primary">Post Comment</button>

                <button className="btn btn-md-2 btn-border-think c-grey btn-transparent custom-color">
                  Cancel
                </button>
              </form>

              {/* <!-- ... end Comment Form  --> */}
            </div>

            <div className="ui-block">
              <article className="hentry post has-post-thumbnail">
                <div className="post__author author vcard inline-items">
                  <img src="img/avatar5-sm.jpg" alt="author" />

                  <div className="author-date">
                    <a className="h6 post__author-name fn" href="#">
                      Green Goo Rock
                    </a>
                    <div className="post__date">
                      <time className="published" datetime="2004-07-24T18:18">
                        March 8 at 6:42pm
                      </time>
                    </div>
                  </div>

                  <div className="more">
                    <svg
                      className="olymp-three-dots-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                    />
                    <ul className="more-dropdown">
                      <li>
                        <a href="#">Edit Post</a>
                      </li>
                      <li>
                        <a href="#">Delete Post</a>
                      </li>
                      <li>
                        <a href="#">Turn Off Notifications</a>
                      </li>
                      <li>
                        <a href="#">Select as Featured</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <p>
                  Hey guys! We are gona be playing this Saturday of{' '}
                  <a href="#">The Marina Bar</a> for their new Mystic Deer
                  Party. If you wanna hang out and have a really good time, come
                  and join us. We’l be waiting for you!
                </p>

                <div className="post-thumb">
                  <img src="img/post__thumb1.jpg" alt="photo" />
                </div>

                <div className="post-additional-info inline-items">
                  <a href="#" className="post-add-icon inline-items">
                    <svg
                      className="olymp-heart-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon"
                    />
                    <span>49</span>
                  </a>

                  <ul className="friends-harmonic">
                    <li>
                      <a href="#">
                        <img src="img/friend-harmonic9.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/friend-harmonic10.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/friend-harmonic7.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/friend-harmonic8.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/friend-harmonic11.jpg" alt="friend" />
                      </a>
                    </li>
                  </ul>

                  <div className="names-people-likes">
                    <a href="#">Jimmy</a>, <a href="#">Andrea</a> and
                    <br />
                    47 more liked this
                  </div>

                  <div className="comments-shared">
                    <a href="#" className="post-add-icon inline-items">
                      <svg
                        className="olymp-speech-balloon-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"
                      />
                      <span>264</span>
                    </a>

                    <a href="#" className="post-add-icon inline-items">
                      <svg
                        className="olymp-share-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-share-icon"
                      />
                      <span>37</span>
                    </a>
                  </div>
                </div>

                <div className="control-block-button post-control-button">
                  <a href="#" className="btn btn-control likes">
                    <img src="img/heart-icon.png" alt="" />
                    <div className="ripple-container"></div>
                  </a>

                  <a href="#" className="btn btn-control ratings">
                    <img src="img/star-icon2.png" alt="" />
                  </a>

                  <a href="#" className="btn btn-control share-link">
                    <img src="img/share-icon.png" alt="" />
                  </a>
                  <a href="#" className="btn btn-control comments">
                    <img src="img/comments-icon.png" alt="" />
                  </a>
                </div>
              </article>
            </div>

            <div className="ui-block">
              <article className="hentry post has-post-thumbnail">
                <div className="post__author author vcard inline-items">
                  <img src="img/avatar3-sm.jpg" alt="author" />

                  <div className="author-date">
                    <a className="h6 post__author-name fn" href="#">
                      Sarah Hetfield
                    </a>
                    <div className="post__date">
                      <time className="published" datetime="2004-07-24T18:18">
                        March 2 at 9:06am
                      </time>
                    </div>
                  </div>

                  <div className="more">
                    <svg
                      className="olymp-three-dots-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                    />
                    <ul className="more-dropdown">
                      <li>
                        <a href="#">Edit Post</a>
                      </li>
                      <li>
                        <a href="#">Delete Post</a>
                      </li>
                      <li>
                        <a href="#">Turn Off Notifications</a>
                      </li>
                      <li>
                        <a href="#">Select as Featured</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                  omnis iste natus error sit voluptatem accusantium doloremque.
                </p>

                <div className="post-additional-info inline-items">
                  <a href="#" className="post-add-icon inline-items">
                    <svg
                      className="olymp-heart-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon"
                    />
                    <span>0 Likes</span>
                  </a>

                  <div className="comments-shared">
                    <a href="#" className="post-add-icon inline-items">
                      <svg
                        className="olymp-speech-balloon-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"
                      />
                      <span>0 Comments</span>
                    </a>

                    <a href="#" className="post-add-icon inline-items">
                      <svg
                        className="olymp-share-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-share-icon"
                      />
                      <span>2 Shares</span>
                    </a>
                  </div>
                </div>

                <div className="control-block-button post-control-button">
                  <a href="#" className="btn btn-control likes">
                    <img src="img/heart-icon.png" alt="" />
                    <div className="ripple-container"></div>
                  </a>

                  <a href="#" className="btn btn-control ratings">
                    <img src="img/star-icon2.png" alt="" />
                  </a>

                  <a href="#" className="btn btn-control share-link">
                    <img src="img/share-icon.png" alt="" />
                  </a>
                  <a href="#" className="btn btn-control comments">
                    <img src="img/comments-icon.png" alt="" />
                  </a>
                </div>
              </article>
            </div>

            <div className="ui-block">
              <article className="hentry post has-post-thumbnail">
                <div className="post__author author vcard inline-items">
                  <img src="img/avatar2-sm.jpg" alt="author" />

                  <div className="author-date">
                    <a className="h6 post__author-name fn" href="#">
                      Nicholas Grissom
                    </a>
                    <div className="post__date">
                      <time className="published" datetime="2004-07-24T18:18">
                        March 2 at 8:34am
                      </time>
                    </div>
                  </div>

                  <div className="more">
                    <svg
                      className="olymp-three-dots-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                    />
                    <ul className="more-dropdown">
                      <li>
                        <a href="#">Edit Post</a>
                      </li>
                      <li>
                        <a href="#">Delete Post</a>
                      </li>
                      <li>
                        <a href="#">Turn Off Notifications</a>
                      </li>
                      <li>
                        <a href="#">Select as Featured</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                  omnis iste natus error sit voluptatem accusantium doloremque.
                </p>

                <div className="post-additional-info inline-items">
                  <a href="#" className="post-add-icon inline-items">
                    <svg
                      className="olymp-heart-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon"
                    />
                    <span>22</span>
                  </a>

                  <ul className="friends-harmonic">
                    <li>
                      <a href="#">
                        <img src="img/friend-harmonic9.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/friend-harmonic10.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/friend-harmonic7.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/friend-harmonic8.jpg" alt="friend" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/friend-harmonic11.jpg" alt="friend" />
                      </a>
                    </li>
                  </ul>

                  <div className="names-people-likes">
                    <a href="#">Jimmy</a>, <a href="#">Andrea</a> and
                    <br />
                    47 more liked this
                  </div>

                  <div className="comments-shared">
                    <a href="#" className="post-add-icon inline-items">
                      <svg
                        className="olymp-speech-balloon-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"
                      />
                      <span>0</span>
                    </a>

                    <a href="#" className="post-add-icon inline-items">
                      <svg
                        className="olymp-share-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-share-icon"
                      />
                      <span>2</span>
                    </a>
                  </div>
                </div>

                <div className="control-block-button post-control-button">
                  <a href="#" className="btn btn-control likes">
                    <img src="img/heart-icon.png" alt="" />
                    <div className="ripple-container"></div>
                  </a>

                  <a href="#" className="btn btn-control ratings">
                    <img src="img/star-icon2.png" alt="" />
                  </a>

                  <a href="#" className="btn btn-control share-link">
                    <img src="img/share-icon.png" alt="" />
                  </a>
                  <a href="#" className="btn btn-control comments">
                    <img src="img/comments-icon.png" alt="" />
                  </a>
                </div>
              </article>
            </div>
          </div>

          <a
            id="load-more-button"
            href="#"
            className="btn btn-control btn-more"
            data-load-link="items-to-load.html"
            data-container="newsfeed-items-grid">
            <svg
              className="olymp-three-dots-icon"
              xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"
            />
          </a>
        </main>

        {/* <!-- ... end Main Content --> */}

        {/* <!-- Left Sidebar --> */}

        <aside className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
          <div className="ui-block">
            {/* <!-- W-Weather --> */}

            <div className="widget w-wethear">
              <a href="#" className="more">
                <svg
                  className="olymp-three-dots-icon"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                />
              </a>

              <div className="wethear-now inline-items">
                <div className="temperature-sensor">64°</div>
                <div className="max-min-temperature">
                  <span>58°</span>
                  <span>76°</span>
                </div>

                <svg
                  className="olymp-weather-partly-sunny-icon"
                  xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-partly-sunny-icon"
                />
              </div>

              <div className="wethear-now-description">
                <div className="climate">Partly Sunny</div>
                <span>
                  Real Feel: <span>67°</span>
                </span>
                <span>
                  Chance of Rain: <span>49%</span>
                </span>
              </div>

              <ul className="weekly-forecast">
                <li>
                  <div className="day">sun</div>
                  <svg
                    className="olymp-weather-sunny-icon"
                    xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-sunny-icon"
                  />

                  <div className="temperature-sensor-day">60°</div>
                </li>

                <li>
                  <div className="day">mon</div>
                  <svg
                    className="olymp-weather-partly-sunny-icon"
                    xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-partly-sunny-icon"
                  />
                  <div className="temperature-sensor-day">58°</div>
                </li>

                <li>
                  <div className="day">tue</div>
                  <svg
                    className="olymp-weather-cloudy-icon"
                    xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-cloudy-icon"
                  />

                  <div className="temperature-sensor-day">67°</div>
                </li>

                <li>
                  <div className="day">wed</div>
                  <svg
                    className="olymp-weather-rain-icon"
                    xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-rain-icon"
                  />

                  <div className="temperature-sensor-day">70°</div>
                </li>

                <li>
                  <div className="day">thu</div>
                  <svg
                    className="olymp-weather-storm-icon"
                    xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-storm-icon"
                  />

                  <div className="temperature-sensor-day">58°</div>
                </li>

                <li>
                  <div className="day">fri</div>
                  <svg
                    className="olymp-weather-snow-icon"
                    xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-snow-icon"
                  />

                  <div className="temperature-sensor-day">68°</div>
                </li>

                <li>
                  <div className="day">sat</div>

                  <svg
                    className="olymp-weather-wind-icon-header"
                    xlinkHref="svg-icons/sprites/icons-weather.svg#olymp-weather-wind-icon-header"
                  />

                  <div className="temperature-sensor-day">65°</div>
                </li>
              </ul>

              <div className="date-and-place">
                <h5 className="date">Saturday, March 26th</h5>
                <div className="place">San Francisco, CA</div>
              </div>
            </div>

            {/* <!-- W-Weather -->		 */}
          </div>

          <div className="ui-block">
            {/* <!-- W-Calendar --> */}

            <div className="w-calendar">
              <div className="calendar">
                <header>
                  <h6 className="month">May</h6>
                </header>
                <table>
                  <thead>
                    <tr>
                      <td>Mon</td>
                      <td>Tue</td>
                      <td>Wed</td>
                      <td>Thu</td>
                      <td>Fri</td>
                      <td>Sat</td>
                      <td>San</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-month="12" data-day="1">
                        1
                      </td>
                      <td data-month="12" data-day="2">
                        2
                      </td>
                      <td data-month="12" data-day="3">
                        3
                      </td>
                      <td data-month="12" data-day="4">
                        4
                      </td>
                      <td data-month="12" data-day="5">
                        5
                      </td>
                      <td data-month="12" data-day="6">
                        6
                      </td>
                      <td data-month="12" data-day="7">
                        7
                      </td>
                    </tr>
                    <tr>
                      <td data-month="12" data-day="8">
                        8
                      </td>
                      <td data-month="12" data-day="9">
                        9
                      </td>
                      <td data-month="12" data-day="10">
                        10
                      </td>
                      <td data-month="12" data-day="11">
                        11
                      </td>
                      <td data-month="12" data-day="12">
                        12
                      </td>
                      <td data-month="12" data-day="13">
                        13
                      </td>
                      <td data-month="12" data-day="14">
                        14
                      </td>
                    </tr>
                    <tr>
                      <td data-month="12" data-day="15">
                        15
                      </td>
                      <td data-month="12" data-day="16">
                        16
                      </td>
                      <td data-month="12" data-day="17">
                        17
                      </td>
                      <td data-month="12" data-day="18">
                        18
                      </td>
                      <td data-month="12" data-day="19">
                        19
                      </td>
                      <td data-month="12" data-day="20">
                        20
                      </td>
                      <td data-month="12" data-day="21">
                        21
                      </td>
                    </tr>
                    <tr>
                      <td data-month="12" data-day="22">
                        22
                      </td>
                      <td data-month="12" data-day="23">
                        23
                      </td>
                      <td data-month="12" data-day="24">
                        24
                      </td>
                      <td data-month="12" data-day="25">
                        25
                      </td>
                      <td data-month="12" data-day="26">
                        26
                      </td>
                      <td data-month="12" data-day="27">
                        27
                      </td>
                      <td data-month="12" data-day="28">
                        28
                      </td>
                    </tr>
                    <tr>
                      <td data-month="12" data-day="29">
                        29
                      </td>
                      <td data-month="12" data-day="30">
                        30
                      </td>
                      <td data-month="12" data-day="31">
                        31
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* <!-- ... end W-Calendar -->		 */}
          </div>

          <div className="ui-block">
            <div className="ui-block-title block-title-bg">
              <h6 className="title">Pages You May Like</h6>
              <a href="#" className="more">
                <svg
                  className="olymp-three-dots-icon"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                />
              </a>
            </div>

            {/* <!-- W-Friend-Pages-Added --> */}

            <ul className="widget w-friend-pages-added notification-list friend-requests">
              <li className="inline-items">
                <div className="author-thumb">
                  <img src="img/avatar41-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="#" className="h6 notification-friend">
                    The Marina Bar
                  </a>
                  <span className="chat-message-item">Restaurant / Bar</span>
                </div>
                <span
                  className="notification-icon"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="ADD TO YOUR FAVS">
                  <a href="#">
                    <svg
                      className="olymp-star-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon"
                    />
                  </a>
                </span>
              </li>

              <li className="inline-items">
                <div className="author-thumb">
                  <img src="img/avatar42-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="#" className="h6 notification-friend">
                    Tapronus Rock
                  </a>
                  <span className="chat-message-item">Rock Band</span>
                </div>
                <span
                  className="notification-icon"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="ADD TO YOUR FAVS">
                  <a href="#">
                    <svg
                      className="olymp-star-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon"
                    />
                  </a>
                </span>
              </li>

              <li className="inline-items">
                <div className="author-thumb">
                  <img src="img/avatar43-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="#" className="h6 notification-friend">
                    Pixel Digital Design
                  </a>
                  <span className="chat-message-item">Company</span>
                </div>
                <span
                  className="notification-icon"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="ADD TO YOUR FAVS">
                  <a href="#">
                    <svg
                      className="olymp-star-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon"
                    />
                  </a>
                </span>
              </li>

              <li className="inline-items">
                <div className="author-thumb">
                  <img src="img/avatar44-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="#" className="h6 notification-friend">
                    Thompson’s Custom Clothing Boutique
                  </a>
                  <span className="chat-message-item">Clothing Store</span>
                </div>
                <span
                  className="notification-icon"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="ADD TO YOUR FAVS">
                  <a href="#">
                    <svg
                      className="olymp-star-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon"
                    />
                  </a>
                </span>
              </li>

              <li className="inline-items">
                <div className="author-thumb">
                  <img src="img/avatar45-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="#" className="h6 notification-friend">
                    Crimson Agency
                  </a>
                  <span className="chat-message-item">Company</span>
                </div>
                <span
                  className="notification-icon"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="ADD TO YOUR FAVS">
                  <a href="#">
                    <svg
                      className="olymp-star-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon"
                    />
                  </a>
                </span>
              </li>

              <li className="inline-items">
                <div className="author-thumb">
                  <img src="img/avatar46-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="#" className="h6 notification-friend">
                    Mannequin Angel
                  </a>
                  <span className="chat-message-item">Clothing Store</span>
                </div>
                <span
                  className="notification-icon"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="ADD TO YOUR FAVS">
                  <a href="#">
                    <svg
                      className="olymp-star-icon"
                      xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon"
                    />
                  </a>
                </span>
              </li>
            </ul>

            {/* <!-- .. end W-Friend-Pages-Added --> */}
          </div>
        </aside>

        {/* <!-- ... end Left Sidebar --> */}

        {/* <!-- Right Sidebar --> */}

        <aside className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
          <div className="ui-block">
            {/* <!-- W-Birthsday-Alert --> */}

            <div className="widget w-birthday-alert">
              <div className="icons-block">
                <svg
                  className="olymp-cupcake-icon"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-cupcake-icon"
                />
                <a href="#" className="more">
                  <svg
                    className="olymp-three-dots-icon"
                    xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                  />
                </a>
              </div>

              <div className="content">
                <div className="author-thumb">
                  <img src="img/avatar48-sm.jpg" alt="author" />
                </div>
                <span>Today is</span>
                <a href="#" className="h4 title">
                  Marina Valentine’s Birthday!
                </a>
                <p>
                  Leave her a message with your best wishes on her profile page!
                </p>
              </div>
            </div>

            {/* <!-- ... end W-Birthsday-Alert -->			 */}
          </div>

          <div className="ui-block">
            <div className="ui-block-title block-title-bg">
              <h6 className="title">Friend Suggestions</h6>
              <a href="#" className="more">
                <svg
                  className="olymp-three-dots-icon"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                />
              </a>
            </div>

            {/* <!-- W-Action --> */}

            <ul className="widget w-friend-pages-added notification-list friend-requests">
              <li className="inline-items">
                <div className="author-thumb">
                  <img src="img/avatar38-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="#" className="h6 notification-friend">
                    Francine Smith
                  </a>
                  <span className="chat-message-item">8 Friends in Common</span>
                </div>
                <span className="notification-icon">
                  <a href="#" className="accept-request">
                    <span className="icon-add without-text">
                      <svg
                        className="olymp-happy-face-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon"
                      />
                    </span>
                  </a>
                </span>
              </li>

              <li className="inline-items">
                <div className="author-thumb">
                  <img src="img/avatar39-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="#" className="h6 notification-friend">
                    Hugh Wilson
                  </a>
                  <span className="chat-message-item">6 Friends in Common</span>
                </div>
                <span className="notification-icon">
                  <a href="#" className="accept-request">
                    <span className="icon-add without-text">
                      <svg
                        className="olymp-happy-face-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon"
                      />
                    </span>
                  </a>
                </span>
              </li>

              <li className="inline-items">
                <div className="author-thumb">
                  <img src="img/avatar40-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="#" className="h6 notification-friend">
                    Karen Masters
                  </a>
                  <span className="chat-message-item">6 Friends in Common</span>
                </div>
                <span className="notification-icon">
                  <a href="#" className="accept-request">
                    <span className="icon-add without-text">
                      <svg
                        className="olymp-happy-face-icon"
                        xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-face-icon"
                      />
                    </span>
                  </a>
                </span>
              </li>
            </ul>

            {/* <!-- ... end W-Action --> */}
          </div>

          <div className="ui-block">
            <div className="ui-block-title block-title-bg">
              <h6 className="title">Activity Feed</h6>
              <a href="#" className="more">
                <svg
                  className="olymp-three-dots-icon"
                  xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                />
              </a>
            </div>

            {/* <!-- W-Activity-Feed --> */}

            <ul className="widget w-activity-feed notification-list">
              <li>
                <div className="author-thumb">
                  <img src="img/avatar49-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="#" className="h6 notification-friend">
                    Marina Polson
                  </a>{' '}
                  commented on Jason Mark’s{' '}
                  <a href="#" className="notification-link">
                    photo.
                  </a>
                  .
                  <span className="notification-date">
                    <time
                      className="entry-date updated"
                      datetime="2004-07-24T18:18">
                      2 mins ago
                    </time>
                  </span>
                </div>
              </li>

              <li>
                <div className="author-thumb">
                  <img src="img/avatar9-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="#" className="h6 notification-friend">
                    Jake Parker{' '}
                  </a>{' '}
                  liked Nicholas Grissom’s{' '}
                  <a href="#" className="notification-link">
                    status update.
                  </a>
                  .
                  <span className="notification-date">
                    <time
                      className="entry-date updated"
                      datetime="2004-07-24T18:18">
                      5 mins ago
                    </time>
                  </span>
                </div>
              </li>

              <li>
                <div className="author-thumb">
                  <img src="img/avatar50-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="#" className="h6 notification-friend">
                    Mary Jane Stark{' '}
                  </a>{' '}
                  added 20 new photos to her{' '}
                  <a href="#" className="notification-link">
                    gallery album.
                  </a>
                  .
                  <span className="notification-date">
                    <time
                      className="entry-date updated"
                      datetime="2004-07-24T18:18">
                      12 mins ago
                    </time>
                  </span>
                </div>
              </li>

              <li>
                <div className="author-thumb">
                  <img src="img/avatar51-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="#" className="h6 notification-friend">
                    Nicholas Grissom{' '}
                  </a>{' '}
                  updated his profile{' '}
                  <a href="#" className="notification-link">
                    photo
                  </a>
                  .
                  <span className="notification-date">
                    <time
                      className="entry-date updated"
                      datetime="2004-07-24T18:18">
                      1 hour ago
                    </time>
                  </span>
                </div>
              </li>
              <li>
                <div className="author-thumb">
                  <img src="img/avatar48-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="#" className="h6 notification-friend">
                    Marina Valentine{' '}
                  </a>{' '}
                  commented on Chris Greyson’s{' '}
                  <a href="#" className="notification-link">
                    status update
                  </a>
                  .
                  <span className="notification-date">
                    <time
                      className="entry-date updated"
                      datetime="2004-07-24T18:18">
                      1 hour ago
                    </time>
                  </span>
                </div>
              </li>

              <li>
                <div className="author-thumb">
                  <img src="img/avatar52-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="#" className="h6 notification-friend">
                    Green Goo Rock{' '}
                  </a>{' '}
                  posted a{' '}
                  <a href="#" className="notification-link">
                    status update
                  </a>
                  .
                  <span className="notification-date">
                    <time
                      className="entry-date updated"
                      datetime="2004-07-24T18:18">
                      1 hour ago
                    </time>
                  </span>
                </div>
              </li>
              <li>
                <div className="author-thumb">
                  <img src="img/avatar10-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="#" className="h6 notification-friend">
                    Elaine Dreyfuss{' '}
                  </a>{' '}
                  liked your{' '}
                  <a href="#" className="notification-link">
                    blog post
                  </a>
                  .
                  <span className="notification-date">
                    <time
                      className="entry-date updated"
                      datetime="2004-07-24T18:18">
                      2 hours ago
                    </time>
                  </span>
                </div>
              </li>

              <li>
                <div className="author-thumb">
                  <img src="img/avatar10-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="#" className="h6 notification-friend">
                    Elaine Dreyfuss{' '}
                  </a>{' '}
                  commented on your{' '}
                  <a href="#" className="notification-link">
                    blog post
                  </a>
                  .
                  <span className="notification-date">
                    <time
                      className="entry-date updated"
                      datetime="2004-07-24T18:18">
                      2 hours ago
                    </time>
                  </span>
                </div>
              </li>

              <li>
                <div className="author-thumb">
                  <img src="img/avatar53-sm.jpg" alt="author" />
                </div>
                <div className="notification-event">
                  <a href="#" className="h6 notification-friend">
                    Bruce Peterson{' '}
                  </a>{' '}
                  changed his{' '}
                  <a href="#" className="notification-link">
                    profile picture
                  </a>
                  .
                  <span className="notification-date">
                    <time
                      className="entry-date updated"
                      datetime="2004-07-24T18:18">
                      15 hours ago
                    </time>
                  </span>
                </div>
              </li>
            </ul>

            {/* <!-- .. end W-Activity-Feed --> */}
          </div>

          <div className="ui-block">
            {/* <!-- W-Action --> */}

            <div className="widget w-action">
              <img src="img/avocado-img.png" alt="Olympus" />
              <div className="content">
                <h4 className="title">OLYMPUS</h4>
                <span>THE BEST SOCIAL NETWORK THEME IS HERE!</span>
                <a
                  href="01-LandingPage.html"
                  className="btn btn-bg-secondary btn-md">
                  Register Now!
                </a>
              </div>
            </div>

            {/* <!-- ... end W-Action --> */}
          </div>
        </aside>

        {/* <!-- ... end Right Sidebar --> */}
      </div>
    </div>
  </div>
)
export default Home
