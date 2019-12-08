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
            path='/setting/changepassword'
            render={props => <ChangePassword {...props} />}
          />
          <Route
            exact
            path='/setting/account'
            render={props => <Account {...props} />}
          />
          <Route
            exact
            path='/setting/notification'
            render={props => <Notification {...props} />}
          />
          <Route
            exact
            path='/setting/friendrequest'
            render={props => <FriendRequest {...props} />}
          />
          <Route
            path='/setting'
            render={props => <PersonalInfo {...props} />}
          />
        </Switch>
      </Mainlayout>
    </Router>
  );
};
export default route;
