import React from 'react';
import MainLayout from './MainLayout';
import * as Routes from 'routes';
import { PersonalInfo, ChangePassword } from 'components/ProfileSetting';
import Notifications from './Notifications';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const route = ({refetch}) => {
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
            path='/settings/notifications'
            render={props => <Notifications {...props} />}
          />
          <Route
            path={Routes.SETTINGS}
            render={props => <PersonalInfo {...props} refetch={refetch}/>}
          />
        </Switch>
      </MainLayout>
    </Router>
  );
};
export default route;
