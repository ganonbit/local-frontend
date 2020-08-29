import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { SIGN_IN } from 'graphql/user';
import { MainLayout } from 'pages/Auth';

import { Field } from 'components/Auth';
import * as Routes from 'routes';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email')
    .required('Email is required'),
  password: yup
    .string()
    .required('No password provided.')
    .min(5, 'Password is too short - should be 5 chars minimum.'),
});

const SignIn = ({ refetch, history }) => {
  const [signin, { error: apiError }] = useMutation(SIGN_IN);

  const [reset, setReset] = useState(false);

  const [initialValues] = useState({ email: '', password: '' });

  // const handleReset = () => {
  //   setReset(false);
  // };

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit(values) {
      signin({ variables: { input: values } }).then(async ({ data }) => {
        localStorage.setItem('token', data.signin.token);
        await refetch();
        history.location.state
          ? history.push(history.location.state.publicPostUri)
          : history.push(Routes.HOME);
      });
    },
  });
  return (
    <MainLayout>
      <div className='col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12'>
        {/* {reset && (
                <ResetPasswordModal handleReset={handleReset} show={true} />
              )} */}
        <div className='registration-login-form'>
          <div className='tab-content'>
            <div
              className='tab-pane active'
              id='profile'
              role='tabpanel'
              data-mh='log-tab'
            >
              <div className='title h'>Login to your Account</div>
              <form className='content' onSubmit={handleSubmit}>
                {apiError && (
                  <p className='field-error'>
                    {console.log(apiError.graphQLErrors[0].message)}
                  </p>
                )}

                <div className='row'>
                  <div className='col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                    <Field
                      fieldContainerclassName='lg'
                      placeholder='Your Email'
                      type='text'
                      name='email'
                      value={values.email}
                      handleChange={handleChange}
                      error={touched.email && errors.email && errors.email}
                    />
                    <Field
                      fieldContainerclassName='lg'
                      placeholder='Your Password'
                      type='password'
                      name='password'
                      value={values.password}
                      handleChange={handleChange}
                      error={
                        touched.password && errors.password && errors.password
                      }
                    />
                    <div className='remember'>
                      <span
                        onClick={e => setReset(true)}
                        onKeyDown={e => setReset(true)}
                        tabIndex='0'
                        role='button'
                        className='forgot'
                      >
                        Forgot my Password
                      </span>
                    </div>

                    <button
                      type='submit'
                      value='Login'
                      className='btn btn-lg btn-primary full-width'
                    >
                      Login
                    </button>
                    <p className='mt-2'>
                      Don’t you have an account?{' '}
                      <Link to={Routes.SIGN_UP} className='btn-register'>
                        Register now
                      </Link>{' '}
                      to start earning points you can redeem for rewards!
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <ResetPasswordModal show={reset} /> */}
      </div>
    </MainLayout>
  );
};
SignIn.propTypes = {
  history: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
};
export default withRouter(SignIn);
