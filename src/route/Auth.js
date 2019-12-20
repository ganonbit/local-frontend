import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { SignIn, SignUp, VerifyAccount, ResetPassword } from 'pages/Auth';
import Welcome from 'pages/Welcome';
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
        <Route render={() => <Welcome />} />
      </Switch>
    </Router>
  );
};
export default Auth;
