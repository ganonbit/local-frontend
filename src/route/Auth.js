import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { SignIn, SignUp, VerifyAccount, ResetPassword } from 'pages/Auth';
import Welcome from 'pages/Welcome';

import TermsAndServices from 'pages/TermsAndServices';
import PrivacyPolicy from 'pages/PrivacyPolicy';
import FeedbackForm from 'pages/FeedbackForm';

import * as Routes from 'routes';

const Auth = ({ refetch, match }) => {
  return (
    <Switch>
      <Route path='/signup' exact render={() => <SignUp refetch={refetch} />} />
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
        path={Routes.SIGN_IN}
        exact
        render={() => <SignIn refetch={refetch} />}
      />
      <Route
        path='/invite/:id'
        render={props => (
          <Redirect
            to={{
              pathname: '/signup',
              state: { invitedById: match.params.id },
            }}
          />
        )}
      />
      <Route
        path={Routes.TERM_AND_CONDITIONS}
        render={props => <TermsAndServices isAuth={false} {...props} />}
      />
      <Route
        path={Routes.PRIVACY_POLICY}
        render={props => <PrivacyPolicy isAuth={false} {...props} />}
      />
      <Route
        path={Routes.FORM}
        render={props => <FeedbackForm isAuth={false} {...props} />}
      />
      <Route
        exact
        path={Routes.POST}
        render={props => (
          <Welcome refetch={refetch} isAuth={false} {...props} />
        )}
      />
      <Route render={() => <Welcome />} />
    </Switch>
  );
};

Auth.propTypes = {
  refetch: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

export default withRouter(Auth);
