import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { SignIn, SignUp, VerifyAccount, ResetPassword } from 'pages/Auth';
import Welcome from 'pages/Welcome';

import TermandServices from 'pages/TermandServices';
import PrivacyPolicy from 'pages/PrivacyPolicy';

import * as Routes from 'routes';

const Auth = ({ refetch }) => {
  return (
    <Router>
      <Switch>
        <Route
          path='/signup'
          exact
          render={() => <SignUp refetch={refetch} />}
        />
        <Route
          path='/verify'
          exact
          render={() => <VerifyAccount refetch={refetch} />}
        />
         <Route
          path='/reset-password'
          exact
          render={() => <ResetPassword refetch={refetch} />}
        />
        <Route
          path='/login'
          exact
          render={() => <SignIn refetch={refetch} />}
        />
        <Route path="/invite/:id">
          <Redirect to="/signup" />
        </Route>
        <Route
          path={Routes.TERM_AND_CONDITIONS}
          render={props => <TermandServices isAuth={false} {...props} />}
        />
        <Route
          path={Routes.PRIVACY_POLICY}
          render={props => <PrivacyPolicy isAuth={false} {...props} />}
        />

        <Route render={() => <Welcome />} />
      </Switch>
    </Router>
  );
};
export default Auth;
