import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { useFormik } from 'formik';
import { useMutation } from '@apollo/react-hooks';
import * as yup from 'yup';

import { Field } from 'components/ProfileSetting';

import { EDIT_ACCOUNT } from 'graphql/user';
import { useStore } from 'store';

import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
const jQuery = require('jquery');
window.jQuery = jQuery;
require('bootstrap-select');

const validationSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('First naame is required'),
  username: yup.string().required('Username is required'),
  birthday: yup
    .date()
    .required('Bith date is required')
    .max(new Date(), 'Birth date cannot be in the future')
    .typeError('Birth date has to be a valid date'),
});

const PersonalInfo = ({ refetch }) => {
  const [{ auth }] = useStore();

  const [successMessage, setSuccessMessage] = useState('');

  const [date, setDate] = useState(auth.user.birthday);

  const [editAccount, { loading, error: apiError }] = useMutation(EDIT_ACCOUNT);

  const [initialValues, setInitialValues] = useState({
    firstName: auth.user.firstName,
    lastName: auth.user.lastName,
    username: auth.user.username,
    location: !auth.user.location ? '' : auth.user.location,
    gender: !auth.user.gender ? 'male' : auth.user.gender,
    bio: !auth.user.bio ? '' : auth.user.bio,
    birthday: new Date(
      moment
        .utc(new Date(parseInt(auth.user.birthday)))
        .format('MM/DD/YYYY')
        .toString()
    ),
    phone: !auth.user.phone ? '' : auth.user.phone,
  });

  const formatDate = value => {
    setDate(value);
    return moment(value).format('MM-DD-YYYY');
  };

  jQuery('.selectpicker').selectpicker();

  const {
    handleSubmit,
    handleChange,
    setFieldValue,
    handleReset,
    values,
    errors,
  } = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit(values) {
      editAccount({ variables: { id: auth.user.id, input: values } }).then(
        async ({ data }) => {
          await refetch();
          setSuccessMessage('Successfully updated profile information!');
        }
      );
    },
  });
  useEffect(() => {
    if (typeof birthday === 'string') {
      setInitialValues({
        ...values,
        birthday: formatDate(new Date(parseInt(date))),
      });
    }
    jQuery('.selectpicker').selectpicker();

    return () => {};
  }, []);

  return (
    <>
      <div className='ui-block-title block-title-bg'>
        <h6 className='title'>Personal Information</h6>
      </div>
      <div className='ui-block-content'>
        <div className='result-message text-center font-weight-bolder mb-4 text-success'>
          {successMessage}
        </div>
        <form onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
              <Field
                placeholder='FirstName'
                type='text'
                name='firstName'
                value={values.firstName}
                error={errors.firstName}
                handleChange={handleChange}
              />
              <Field
                placeholder='User Name'
                type='text'
                name='username'
                value={values.username}
                handleChange={handleChange}
                error={errors.username}
              />
            </div>
            <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
              <Field
                placeholder='Last Name'
                type='text'
                name='lastName'
                value={values.lastName}
                handleChange={handleChange}
                error={errors.lastName}
              />
              <Field
                placeholder='Phone Number'
                type='text'
                name='phone'
                value={values.phone}
                handleChange={handleChange}
                error={errors.phone}
              />
            </div>
            <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
              <div className='form-group label-floating is-select'>
                <label className='control-label' htmlFor='gender'>
                  Your Gender
                </label>
                <select
                  name='gender'
                  className='selectpicker form-control'
                  onBlur={handleChange}
                  value={values.gender}
                >
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                  <option value='custom'>
                    Custom (more choices coming soon)
                  </option>
                </select>
              </div>
            </div>
            <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
              <div className='form-group date-time-picker label-floating'>
                <label className='control-label' htmlFor='birthday'>
                  Your Birthday
                </label>
                <DatePicker
                  name='birthday'
                  dateFormat='MM/dd/yyyy'
                  selected={
                    typeof date === 'string'
                      ? new Date(
                          moment
                            .utc(new Date(parseInt(date)))
                            .format('MM/DD/YYYY')
                            .toString()
                        )
                      : date
                  }
                  hint='Please enter / select a date'
                  error={errors.birthday}
                  onChange={dateFromValue => {
                    setFieldValue('birthday', formatDate(dateFromValue));
                  }}
                />
                {errors.birthday && (
                  <span className='material-input-error'>
                    {errors.birthday}
                  </span>
                )}
              </div>
            </div>
            <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
              <div className='form-group label-floating is-select'>
                <label className='control-label' htmlFor='location'>
                  Your Location
                </label>
                <textarea
                  className='form-control'
                  onChange={handleChange}
                  name='location'
                  value={values.location}
                ></textarea>
              </div>
            </div>
            <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
              <div className='form-group label-floating'>
                <label className='control-label' htmlFor='description'>
                  Write a little description about you
                </label>
                <textarea
                  className='form-control'
                  onChange={handleChange}
                  name='bio'
                  value={values.bio}
                ></textarea>
              </div>
            </div>
            <div className='col col-lg-6 col-md-6 col-sm-12 col-12 mb-2'>
              <button
                className='btn btn-secondary btn-lg full-width'
                onClick={handleReset}
              >
                Restore all Attributes
              </button>
            </div>
            <div className='col col-lg-6 col-md-6 col-sm-12 col-12 mb-2'>
              <button
                type='submit'
                className='btn btn-primary btn-lg full-width'
              >
                Save all Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default PersonalInfo;
