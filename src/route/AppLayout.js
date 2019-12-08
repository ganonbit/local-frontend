import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/HomeContainer/Home';
import UserProfile from 'pages/UserProfile';
import ProfileSetting from 'pages/ProfileSetting';

import { Sidebar } from '../components/Sidebar/index';
import TopHeader from './TopHeader';
import Discover from 'pages/Discover';

import * as Routes from 'routes';
/**
 * All other routes of Entire App
 * can be restructure depends on Complexity
 */
const AppLayout = ({ refetch }) => {
  return (
    <Router>
      <div className='page-has-left-panels page-has-right-panels pr-0'>
        <Sidebar refetch={refetch} isAuth={true} />
        <TopHeader refetch={refetch} />
        <div className='header-spacer'></div>
        <Switch>
          <Route exact path={Routes.EXPLORE} render={() => <Discover />} />
          <Route path={Routes.HOME} render={props => <Home {...props} />} />
          {/* <Route
            exact
            path={Routes.USER_PROFILE}
            render={props => <UserProfile {...props} />}
          /> */}
        </Switch>
      </div>
    </Router>
  );
};
export default AppLayout;
