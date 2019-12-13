import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';

import { Field } from 'components/Auth';
import { SIGN_UP } from 'graphql/user';
import { validateFormField } from 'utils';
import { MonthCalendar } from 'assets/svg-icons';
import { MainLayout } from 'pages/Auth';

import { useStore } from 'store';
import { CLEAR_AUTH_USER } from 'store/auth';

import * as Routes from 'routes';

const SignUp = ({ refetch, history }) => {
  const [error, setError] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    dob: '',
    gender: '',
  });
  const [, dispatch] = useStore();

  const { firstName, lastName, username, email, password } = values;

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    let fieldError = validateFormField(name, value);
    setError({ ...error, ...fieldError });
  };

  const validate = () => {
    if (!firstName || !lastName || !email || !username || !password) {
      if (!firstName)
        setError({ ...error, firstName: 'First Name is required' });
      else if (!lastName)
        setError({ ...error, lastName: 'Last Name is required' });
      else if (!email) setError({ ...error, email: 'Email is required' });
      else if (!username)
        setError({ ...error, username: 'User name  required' });
      else if (!password)
        setError({ ...error, password: 'Password is required' });
      else return true;
    }
    return false;
  };

  const handleSubmit = (e, signup) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      setError(error);
      return false;
    }

    signup().then(async () => {
      await refetch();
      dispatch({ type: CLEAR_AUTH_USER });
      localStorage.removeItem('token');
      history.push(Routes.HOME);
    });
  };

  const disableButton =
    !firstName ||
    !lastName ||
    !username ||
    !email ||
    !password ||
    error.firstName ||
    error.lastName ||
    error.username ||
    error.email ||
    error.password;

  return (
    <Mutation
      mutation={SIGN_UP}
      variables={{
        input: { firstName, lastName, email, password, username },
      }}
    >
      {signup => {
        return (
          <MainLayout>
            <div className='col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12'>
              <div className='registration-login-form'>
                <div className='tab-content'>
                  <div
                    className='tab-pane active'
                    id='home'
                    role='tabpanel'
                    data-mh='log-tab'
                  >
                    <div className='title h6'>Register to Avocado Nation</div>
                    <form
                      className='content'
                      onSubmit={e => handleSubmit(e, signup)}
                    >
                      <div className='row'>
                      <div className='col col-6 col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                          <Field
                            fieldContainerclassName='sm'
                            className='test'
                            placeholder='First Name'
                            type='text'
                            value={firstName}
                            handleChange={handleChange}
                            name='firstName'
                            error={error.firstName}
                          />
                      </div>
                      <div className='col col-6 col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                          <Field
                            fieldContainerclassName='sm'
                            className='test'
                            placeholder='Last Name'
                            type='text'
                            value={lastName}
                            handleChange={handleChange}
                            name='lastName'
                            error={error.lastName}
                          />
                        </div>
                        <div className='col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                          <Field
                            fieldContainerclassName='lg'
                            placeholder='Username'
                            type='text'
                            value={username}
                            handleChange={handleChange}
                            name='username'
                            error={error.username}
                          />
                          <Field
                            fieldContainerclassName='lg'
                            placeholder='Your Email'
                            type='email'
                            value={email}
                            handleChange={handleChange}
                            name='email'
                            error={error.email}
                          />

                          <Field
                            fieldContainerclassName='lg'
                            placeholder='Your Password'
                            type='password'
                            value={password}
                            handleChange={handleChange}
                            name='password'
                            error={error.password}
                          />
                          </div>
                          <div className='col col-6 col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                            <div className='form-group date-time-picker label-floating'>
                              <label className='control-label'>
                                Your Birthday
                              </label>
                              <input name='birthday' defaultValue='10/24/1984' />
                              <span className='input-group-addon'>
                                <MonthCalendar
                                  className='olymp-menu-icon'
                                  width={20}
                                  height={20}
                                />
                              </span>
                            </div>
                          </div>
                          <div className='col col-6 col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                            <div className='form-group label-floating is-select'>
                              <label className='control-label'>Your Gender</label>
                              <select
                                className='select picker form-control'
                                onChange={handleChange}
                              >
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                                <option value='custom'>Custom</option>
                              </select>
                            </div>
                          </div>
                          <div className='col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                            <div className='remember'>
                              <div className='checkbox'>
                                <label>
                                  <input
                                    name='optionsCheckboxes'
                                    type='checkbox'
                                  />
                                  <span className='checkbox-material'>
                                    <span className='check' />
                                  </span>
                                  I accept the{' '}
                                  <a href='#1'>Terms and Conditions</a> of the
                                  website
                                </label>
                              </div>
                            </div>

                            <button
                              className='btn btn-green btn-lg full-width'
                              type='submit'
                              disabled={disableButton}
                            >
                              Complete Registration!
                            </button>
                          </div>
                        </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </MainLayout>
        );
      }}
    </Mutation>
  );
};

export default withRouter(SignUp);
