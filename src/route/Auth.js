import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SignIn, SignUp, VerifyAccount } from 'pages/Auth';
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
          path='/login'
          exact
          render={() => <SignIn refetch={refetch} />}
        />
        <Route render={() => <Welcome />} />
      </Switch>
    </Router>
  );
};
export default Auth;
