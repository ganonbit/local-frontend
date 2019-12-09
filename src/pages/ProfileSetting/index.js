import React from 'react';
import Mainlayout from './MainLayout';
import {
  PersonalInfo,
  Account,
  ChangePassword,
  Notification,
  FriendRequest,
} from 'components/ProfileSetting';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const route = () => {
  return (
    <Router>
      <Mainlayout>
        <Switch>
          <Route
            exact
            path='/settings/changepassword'
            render={props => <ChangePassword {...props} />}
          />
          <Route
            exact
            path='/settings/account'
            render={props => <Account {...props} />}
          />
          <Route
            exact
            path='/settings/notification'
            render={props => <Notification {...props} />}
          />
          <Route
            exact
            path='/settings/friendrequest'
            render={props => <FriendRequest {...props} />}
          />
          <Route
            path='/settings'
            render={props => <PersonalInfo {...props} />}
          />
        </Switch>
      </Mainlayout>
    </Router>
  );
};
export default route;
