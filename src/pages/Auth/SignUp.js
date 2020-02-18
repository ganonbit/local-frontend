import React, { useState } from 'react';
import { withRouter, useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import ReCAPTCHA from 'react-google-recaptcha';
import PropTypes from 'prop-types';

import { Field } from 'components/Auth';
import { SIGN_UP } from 'graphql/user';
import { MainLayout } from 'pages/Auth';
import { useMutation } from '@apollo/react-hooks';
import { useFormik } from 'formik';
import moment from 'moment';

import { useStore } from 'store';
import { CLEAR_AUTH_USER } from 'store/auth';

import { RE_CAPTCHA_SCERET_API } from 'constants/ApiKeys';

import * as Routes from 'routes';
import * as yup from 'yup';

import 'react-datepicker/dist/react-datepicker.css';

const validationSchema = yup.object({
  firstName: yup.string().required('Please Enter First Name.'),
  lastName: yup.string().required('Please Enter Last Name.'),
  username: yup.string().required('Please Enter User Name.'),

  email: yup
    .string()
    .email('Invalid email')
    .required('Email is required'),
  password: yup
    .string()
    .required('No password provided.')
    .min(5, 'Password is too short - should be 5 chars minimum.'),
  captcha: yup
    .boolean()
    .required('captcha must be validate.')
    .oneOf([true], 'captcha must be validate.'),
});

const SignUp = ({ refetch }) => {
  let location = useLocation();
  let invitedById = location.state ? location.state.invitedById : null;

  const [date, setDate] = useState(new Date('06/06/1986'));

  const [signup, { error: apiError }] = useMutation(SIGN_UP);
  const [, dispatch] = useStore();

  const [initialValues] = useState({
    firstName: '',
    lastName: '',
    invitedById: invitedById,
    username: '',
    email: '',
    password: '',
    birthday: date,
    gender: 'male',
    captcha: false,
  });

  const formatDate = value => {
    setDate(value);
    return moment(value).format('MM-DD-YYYY');
  };

  const handleCaptcha = () => {
    return true;
  };
  const {
    handleSubmit,
    handleChange,
    setFieldValue,
    values,
    errors,
  } = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit(values) {
      delete values['captcha'];
      signup({ variables: { input: values } }).then(async ({ data }) => {
        await refetch();
        dispatch({ type: CLEAR_AUTH_USER });
        localStorage.removeItem('token');

        let emailVerificationModal = document.getElementById(
          'emailVerification'
        );
        emailVerificationModal.classList.add(
          'email-verification-modal-visible'
        );
      });
    },
  });

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
              <div className='title h6'>Join the Community Today!</div>
              <form
                className='content'
                onSubmit={handleSubmit}
                // onSubmit={e => handleSubmit(e, signup)}
              >
                {apiError && (
                  <p className='field-error'>
                    {apiError.graphQLErrors[0].message}
                  </p>
                )}
                <div className='row'>
                  <div className='col col-6 col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                    <Field
                      fieldContainerclassName='sm'
                      className='test'
                      placeholder='First Name'
                      type='text'
                      value={values.firstName}
                      name='firstName'
                      handleChange={handleChange}
                      error={errors.firstName}
                    />
                  </div>
                  <div className='d-none'>
                    <Field
                      fieldContainerclassName='sm'
                      className='test'
                      placeholder='Invited By ID'
                      type='text'
                      value={values.invitedById}
                      name='invitedById'
                      error={errors.invitedById}
                    />
                  </div>
                  <div className='col col-6 col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                    <Field
                      fieldContainerclassName='sm'
                      className='test'
                      placeholder='Last Name'
                      type='text'
                      value={values.lastName}
                      handleChange={handleChange}
                      name='lastName'
                      error={errors.lastName}
                    />
                  </div>
                  <div className='col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                    <Field
                      fieldContainerclassName='lg'
                      placeholder='Username'
                      type='text'
                      value={values.username}
                      handleChange={handleChange}
                      name='username'
                      error={errors.username}
                    />
                    <Field
                      fieldContainerclassName='lg'
                      placeholder='Your Email'
                      type='email'
                      value={values.email}
                      handleChange={handleChange}
                      name='email'
                      error={errors.email}
                    />

                    <Field
                      fieldContainerclassName='lg'
                      placeholder='Your Password'
                      type='password'
                      value={values.password}
                      handleChange={handleChange}
                      name='password'
                      error={errors.password}
                    />
                  </div>
                  <div className='col col-6 col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                    <div className='form-group date-time-picker label-floating'>
                      <label className='control-label' htmlFor='birthday'>
                        Your Birthday
                      </label>
                      <DatePicker
                        dateFormat='MM/dd/yyyy'
                        name='birthday'
                        selected={date}
                        onChange={dateFromValue => {
                          setFieldValue('birthday', formatDate(dateFromValue));
                        }}
                      />
                    </div>
                  </div>
                  <div className='col col-6 col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                    <div className='form-group label-floating is-select'>
                      <label className='control-label' htmlFor='gender'>
                        Your Gender
                      </label>
                      <select
                        className='select picker form-control'
                        onBlur={handleChange}
                        name='gender'
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
                          <input name='optionsCheckboxes' type='checkbox' />
                          <span className='checkbox-material'>
                            <span className='check' />
                          </span>
                          I accept the{' '}
                          <a href={Routes.TERM_AND_CONDITIONS}>
                            Terms and Condition
                          </a>
                          of the website
                        </label>
                      </div>
                    </div>
                    <ReCAPTCHA
                      sitekey={RE_CAPTCHA_SCERET_API}
                      onChange={() => {
                        setFieldValue('captcha', handleCaptcha());
                      }}
                      size='normal'
                      className='mb-2 captcha-block'
                    />
                    {errors.captcha && (
                      <span className='material-input-error'>
                        {errors.captcha}
                      </span>
                    )}
                    <button
                      className='btn btn-green btn-lg full-width'
                      type='submit'
                      // disabled={disableButton}
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
};
SignUp.propTypes = {
  refetch: PropTypes.func.isRequired,
};
export default withRouter(SignUp);
