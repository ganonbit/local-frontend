import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import Home from '../pages/HomeContainer/Home';
import UserProfile from 'pages/UserProfile';
import ProfileSetting from 'pages/ProfileSetting';

import { Sidebar } from '../components/Sidebar/index';
import TopHeader from './TopHeader';
import Discover from 'pages/Discover';
import Reward from 'pages/Reward';
import * as Routes from 'routes';
/**
 * All other routes of Entire App
 * can be restructure depends on Complexity
 */
const AppLayout = ({ refetch, history }) => {
  return (
    <div className='page-has-left-panels page-has-right-panels pr-0'>
      <Sidebar refetch={refetch} isAuth={true} />
      <TopHeader refetch={refetch} />
      {history.location.pathname === '/settings' ? (
        <div className='header-spacer header-spacer-small'></div>
      ) : history.location.pathname === '/rewards' ? (
        <div className='remove-header-spacer'></div>
      ) : (
        <div className='header-spacer'></div>
      )}
      <Switch>
        <Route path={Routes.DISCOVER} render={props => <Discover />} />
        <Route path={Routes.SETTINGS} render={() => <ProfileSetting />} />
        <Route path={Routes.REWARDS} render={props => <Reward {...props} />} />
        <Route
          exact
          path={Routes.USER_PROFILE}
          render={props => <UserProfile refetch={refetch} {...props} />}
        />
        <Route path={Routes.HOME} render={props => <Home {...props} />} />
      </Switch>
    </div>
  );
};
export default withRouter(AppLayout);
