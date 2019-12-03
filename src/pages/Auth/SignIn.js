import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SIGN_IN } from 'graphql/user';

import { Field, ResetPasswordModal } from '../../components/Auth/index';
import { validateFormField } from '../../utils/index';
import { routes } from '../../route/index';
const SignIn = ({ refetch, history }) => {
  const [reset, setReset] = useState(false);
  const [values, setValues] = useState({ emailOrUsername: '', password: '' });
  const [error, setError] = useState({
    emailOrUsername: '',
    password: '',
  });
  const { emailOrUsername, password } = values;

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    let fieldError = validateFormField(name, value);
    setError({ ...error, ...fieldError });
  };

  const validate = () => {
    if (!emailOrUsername || !password) {
      if (!emailOrUsername)
        setError({
          ...error,
          emailOrUsername: 'all field are required',
        });
      else if (!password)
        setError({ ...error, password: 'all field are required' });
      else return true;
    }
    return false;
  };
  const handleReset = () => {
    setReset(false);
  };

  const handleSubmit = (e, signin) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      return false;
    }
    signin().then(async ({ data }) => {
      localStorage.setItem('token', data.signin.token);
      await refetch();
      history.push(routes.HOME);
    });
  };
  return (
    <Mutation
      mutation={SIGN_IN}
      variables={{
        input: { emailOrUsername, password },
      }}
    >
      {(signin, { loading, error: apiError }) => {
        return (
          <div className='col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12'>
            {reset && (
              <ResetPasswordModal handleReset={handleReset} show={true} />
            )}
            <div className='registration-login-form'>
              <div className='tab-content'>
                <div
                  className='tab-pane active'
                  id='profile'
                  role='tabpanel'
                  data-mh='log-tab'
                >
                  <div className='title h6'>Login to your Account</div>
                  <form
                    className='content'
                    onSubmit={e => handleSubmit(e, signin)}
                  >
                    <div className='row'>
                      <div className='col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                        <Field
                          fieldContainerClass='lg'
                          placeholder='Your Email'
                          type='text'
                          name='emailOrUsername'
                          value={emailOrUsername}
                          handleChange={handleChange}
                          error={error.emailOrUsername}
                        />
                        <Field
                          fieldContainerClass='lg'
                          placeholder='Your Password'
                          type='password'
                          name='password'
                          value={password}
                          handleChange={handleChange}
                          error={error.password}
                        />

                        <div className='remember'>
                          <div className='checkbox'>
                            <label>
                              <input name='optionsCheckboxes' type='checkbox' />
                              Remember Me
                            </label>
                          </div>
                          <a
                            onClick={() => setReset(true)}
                            href='#1'
                            className='forgot'
                            data-toggle='modal'
                            data-target='#restore-password'
                          >
                            Forgot my Password
                          </a>
                        </div>

                        <button
                          type='submit'
                          value='Login'
                          className='btn btn-lg btn-primary full-width'
                          disabled={
                            !emailOrUsername ||
                            !password ||
                            error.emailOrUsername ||
                            error.password
                          }
                        >
                          Login
                        </button>

                        <div className='or'></div>

                        <a
                          href='#1'
                          className='btn btn-lg bg-facebook full-width btn-icon-left'
                        >
                          <i
                            // className="fab fa-facebook-f"
                            className='fas fa-camera'
                            aria-hidden='true'
                          ></i>
                          Login with Facebook
                        </a>

                        <a
                          href='#1'
                          className='btn btn-lg bg-twitter full-width btn-icon-left'
                        >
                          <i className='fab fa-twitter' aria-hidden='true'></i>
                          Login with Twitter
                        </a>

                        <p>
                          Don’t you have an account?{' '}
                          <Link to='/' className='btn-register'>
                            Register Now!
                          </Link>
                          it’s really simple and you can start enjoing all the
                          benefits!
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* <ResetPasswordModal show={reset} /> */}
          </div>
        );
      }}
    </Mutation>
  );
};
SignIn.propTypes = {
  history: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
};
export default withRouter(SignIn);
