import React from 'react';
import MainLayout from './MainLayout';
import * as Routes from 'routes';
import {
  PersonalInfo,
  Account,
  ChangePassword,
  Notification,
} from 'components/ProfileSetting';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const route = () => {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route
            exact
            path='/settings/change-password'
            render={props => <ChangePassword {...props} />}
          />
          <Route
            exact
            path='/settings/account'
            render={props => <Account {...props} />}
          />
          <Route
            exact
            path='/settings/notifications'
            render={props => <Notification {...props} />}
          />
          <Route
            path={Routes.SETTINGS}
            render={props => <PersonalInfo {...props} />}
          />
        </Switch>
      </MainLayout>
    </Router>
  );
};
export default route;
