import React, { useState, useEffect } from 'react';
import { Mutation } from 'react-apollo';
import moment from 'moment';
import DatePicker from 'react-datepicker';

import { Field } from 'components/ProfileSetting';
import { validateFormField } from 'utils';
import { EDIT_ACCOUNT } from 'graphql/user';
import { useStore } from 'store';

import bootstrap from 'bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import { string } from 'prop-types';
const jQuery = require('jquery');
window.jQuery = jQuery;
import('bootstrap-select/dist/css/bootstrap-select.min.css');
require('bootstrap-select');

const PersonalInfo = () => {
  const [{ auth }] = useStore();

  const [values, setValues] = useState({
    firstName: auth.user.firstName,
    lastName: auth.user.lastName,
    username: auth.user.username,
    location: auth.user.location,
    gender: auth.user.gender,
    bio: auth.user.bio,
    birthday: auth.user.birthday,
  });
  const [date, setDate] = useState(auth.user.birthday);
  const [error, setError] = useState({
    firstName: '',
    lastName: '',
    username: '',
  });
  const { username, firstName, lastName, bio, birthday } = values;
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    let fieldError = validateFormField(name, value);
    setError({ ...error, ...fieldError });
  };
  const validate = () => {
    if (!firstName || !lastName || !username) {
      if (!firstName)
        setError({ ...error, firstName: 'First Name is required' });
      else if (!lastName)
        setError({ ...error, lastName: 'Last Name is required' });
      else if (!username)
        setError({ ...error, username: 'User name is required' });
      else return true;
    }
    return false;
  };
  const restoreFields = e => {
    e.preventDefault();
    setValues({
      ...values,
      username: auth.user.username,
      firstName: auth.user.firstName,
      lastName: auth.user.lastName,
    });
    setError({
      username: '',
      firstName: '',
      lastName: '',
    });
  };
  let formatDate = date => {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [month, day, year].join('/');
  };
  const handleBirthdayChange = birthday => {
    setValues({
      ...values,
      birthday: formatDate(birthday),
    });
    setDate(birthday);
  };

  const submitHandler = (e, editAccount) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      setError(error);
      return false;
    }
    editAccount().then(async data => {
      // await refetch();
    });
  };
  useEffect(() => {
    if (typeof birthday === 'string') {
      setValues({
        ...values,
        birthday: formatDate(new Date(parseInt(date))),
      });
    }
    jQuery('.selectpicker').selectpicker();

    return () => {};
  }, []);
  const disableButton =
    !firstName ||
    !lastName ||
    !username ||
    error.firstName ||
    error.lastName ||
    error.username;
  return (
    <Mutation
      mutation={EDIT_ACCOUNT}
      variables={{
        id: auth.user.id,
        input: values,
      }}
    >
      {(editAccount, { loading, error: apiError }) => {
        return (
          <>
            <div className='ui-block-title block-title-bg'>
              <h6 className='title'>Personal Information</h6>
            </div>
            <div className='ui-block-content'>
              <form onSubmit={e => submitHandler(e, editAccount)}>
                <div className='row'>
                  <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
                    <Field
                      placeholder='FirstName'
                      type='text'
                      name='firstName'
                      value={firstName}
                      error={error.firstName}
                      handleChange={handleChange}
                    />
                    <Field
                      placeholder='User Name'
                      type='text'
                      name='username'
                      value={username}
                      handleChange={handleChange}
                      error={error.username}
                    />
                    <div className='form-group date-time-picker label-floating'>
                      <label className='control-label'>Your Birthday</label>
                      <DatePicker
                        dateFormat='dd/MM/yyyy'
                        selected={
                          typeof date === 'string'
                            ? new Date(parseInt(date))
                            : date
                        }
                        onChange={handleBirthdayChange}
                      />
                    </div>
                  </div>
                  <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
                    <Field
                      placeholder='Last Name'
                      type='text'
                      name='lastName'
                      value={lastName}
                      handleChange={handleChange}
                      error={error.lastName}
                    />
                    <Field
                      placeholder='Your Website'
                      type='text'
                      name='website'
                      value='daydreamzagency.com'
                    />
                    <Field
                      placeholder='Yoyr Phone Number'
                      type='text'
                      name='phoneNumber'
                    />
                  </div>
                  <div className='col col-lg-6 col-md-4 col-sm-12 col-12'>
                    <div className='form-group label-floating is-select'>
                      <label className='control-label'>Your Country</label>
                      <select
                        className='selectpicker form-control'
                        onChange={handleChange}
                        name='location'
                      >
                        <option selected value='United States'>
                          United States
                        </option>
                        <option value='Australia'>Australia</option>
                      </select>
                    </div>
                  </div>
                  <div className='col col-lg-6 col-md-4 col-sm-12 col-12'>
                    <div className='form-group label-floating is-select'>
                      <label className='control-label'>
                        Your State / Province
                      </label>
                      <select className='selectpicker form-control'>
                        <option value='California'>California</option>
                        <option value='Texas'>Texas</option>
                      </select>
                    </div>
                  </div>
                  <div className='col col-lg-6 col-md-4 col-sm-12 col-12'>
                    <div className='form-group label-floating is-select'>
                      <label className='control-label'>Your City</label>
                      <select className='selectpicker form-control'>
                        <option value='SF'>San Francisco</option>
                        <option value='NY'>New York</option>
                      </select>
                    </div>
                  </div>
                  <div className='col col-lg-6 col-md-4 col-sm-12 col-12'>
                    <div className='form-group label-floating is-select'>
                      <label className='control-label'>Your Gender</label>
                      <select
                        name='gender'
                        className='selectpicker form-control'
                        onChange={handleChange}
                      >
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                      </select>
                    </div>
                  </div>
                  <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
                    <div className='form-group label-floating'>
                      <label className='control-label'>
                        Write a little description about you
                      </label>
                      <textarea
                        className='form-control'
                        onChange={handleChange}
                        name='bio'
                      >
                        {bio}
                      </textarea>
                    </div>
                  </div>
                  <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
                    <Field
                      placeholder='Birth Place'
                      type='text'
                      name='birthPlace'
                    />
                    <Field
                      placeholder='Your Occupation'
                      type='text'
                      name='occupation'
                      value='UI/UX Designer'
                    />
                  </div>
                  <div className='col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                    <div className='form-group with-icon label-floating'>
                      <label className='control-label'>
                        Your Facebook Account
                      </label>
                      <input
                        className='form-control'
                        type='text'
                        value='www.facebook.com/james-spiegel95321'
                      />
                      <i
                        className='fab fa-facebook-f c-facebook'
                        aria-hidden='true'
                      ></i>
                    </div>
                    <div className='form-group with-icon label-floating'>
                      <label className='control-label'>
                        Your Twitter Account
                      </label>
                      <input
                        className='form-control'
                        type='text'
                        value='www.twitter.com/james_spiegelOK'
                      />
                      <i
                        className='fab fa-twitter c-twitter'
                        aria-hidden='true'
                      ></i>
                    </div>
                  </div>
                  <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
                    <button
                      className='btn btn-secondary btn-lg full-width'
                      onClick={e => restoreFields(e)}
                    >
                      Restore all Attributes
                    </button>
                  </div>
                  <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
                    <button
                      className='btn btn-primary btn-lg full-width'
                      disabled={disableButton}
                    >
                      Save all Changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </>
        );
      }}
    </Mutation>
  );
};
export default PersonalInfo;
