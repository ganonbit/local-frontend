import React, { useState } from 'react';
import { Field } from 'components/ProfileSetting';

const PersonalInfo = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    website: '',
    phoneNumber: '',
    occupation: '',
    birthPlace: '',
  });
  const {
    firstName,
    lastName,
    email,
    website,
    phoneNumber,
    occupation,
    birthPlace,
  } = values;

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <>
      <div className='ui-block-title block-title-bg'>
        <h6 className='title'>Personal Information</h6>
      </div>
      <div className='ui-block-content'>
        <form>
          <div className='row'>
            <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
              <Field
                placeholder='FirstName'
                type='text'
                name='firstname'
                value={firstName}
                handleChange={handleChange}
              />
              <Field
                placeholder='Your Email'
                type='text'
                name='email'
                value={email}
                handleChange={handleChange}
              />
              <div className='form-group date-time-picker label-floating'>
                <label className='control-label'>Your Birthday</label>
                <input name='datetimepicker' value='10/24/1984' />
                <span className='input-group-addon'>
                  <svg className='olymp-month-calendar-icon icon'>
                    <use xlinkhref='svg-icons/sprites/icons.svg#olymp-month-calendar-icon'></use>
                  </svg>
                </span>
              </div>
            </div>
            <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
              <Field
                placeholder='Last Name'
                type='text'
                name='lastName'
                value={lastName}
                handleChange={handleChange}
              />
              <Field
                placeholder='Your Website'
                type='text'
                name='website'
                value={website}
                handleChange={handleChange}
              />
              <Field
                placeholder='Phone Number'
                type='text'
                name='phoneNumber'
                value={phoneNumber}
                handleChange={handleChange}
              />
            </div>
            <div className='col col-lg-6 col-md-4 col-sm-12 col-12'>
              <div className='form-group label-floating is-select'>
                <label className='control-label'>Your Country</label>
                <select className='selectpicker form-control'>
                  <option value='US'>United States</option>
                  <option value='AU'>Australia</option>
                </select>
              </div>
            </div>
            <div className='col col-lg-6 col-md-4 col-sm-12 col-12'>
              <div className='form-group label-floating is-select'>
                <label className='control-label'>Your State / Province</label>
                <select className='selectpicker form-control'>
                  <option value='CA'>California</option>
                  <option value='TE'>Texas</option>
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
                <select className='selectpicker form-control'>
                  <option value='MA'>Male</option>
                  <option value='FE'>Female</option>
                </select>
              </div>
            </div>
            <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
              <div className='form-group label-floating'>
                <label className='control-label'>
                  Write a little description about you
                </label>
                <textarea className='form-control' placeholder=''>
                  Hi, I’m James, I’m 36 and I work as a Digital Designer for the
                  “Daydreams” Agency in Pier 56
                </textarea>
              </div>
            </div>
            <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
              <Field
                placeholder='Birth Place'
                type='text'
                name='birthPlace'
                value={birthPlace}
                handleChange={handleChange}
              />
              <Field
                placeholder='Your Occupation'
                type='text'
                name='occupation'
                value={occupation}
                handleChange={handleChange}
              />
            </div>
            <div className='col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
              <div className='form-group with-icon label-floating'>
                <label className='control-label'>Your Facebook Account</label>
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
                <label className='control-label'>Your Twitter Account</label>
                <input
                  className='form-control'
                  type='text'
                  value='www.twitter.com/james_spiegelOK'
                />
                <i className='fab fa-twitter c-twitter' aria-hidden='true'></i>
              </div>
            </div>
            <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
              <button className='btn btn-secondary btn-lg full-width'>
                Restore all Attributes
              </button>
            </div>
            <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
              <button className='btn btn-primary btn-lg full-width'>
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
