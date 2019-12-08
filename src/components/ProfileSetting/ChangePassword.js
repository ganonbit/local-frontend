import React, { useState } from 'react';
import { Field } from 'components/ProfileSetting';
const PasswordSetting = () => {
  const [values, setValues] = useState({
    password: '',
    newPassword: '',
    confirmPassword: '',
  });
  const { password, newPassword, confirmPassword } = values;

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <>
      <div className='ui-block-title block-title-bg'>
        <h6 className='title'>Change Password</h6>
      </div>
      <div className='ui-block-content'>
        <form>
          <div className='row'>
            <div className='col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
              <Field
                placeholder='Confirm Current Password'
                type='text'
                name='password'
                value={password}
                handleChange={handleChange}
              />
            </div>

            <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
              <Field
                placeholder='your New Password'
                type='text'
                name='newPassword'
                value={newPassword}
                handleChange={handleChange}
              />
            </div>
            <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
              <Field
                placeholder='Confirm New Password'
                type='text'
                name='confirmPassword'
                value={confirmPassword}
                handleChange={handleChange}
              />
            </div>

            <div className='col col-lg-12 col-sm-12 col-sm-12 col-12'>
              <div className='remember'>
                <div className='checkbox'>
                  <label>
                    <input name='optionsCheckboxes' type='checkbox' />
                    Remember Me
                  </label>
                </div>

                <a
                  href='#1'
                  className='forgot'
                  data-toggle='modal'
                  data-target='#restore-password'
                >
                  Forgot my Password
                </a>
              </div>
            </div>

            <div className='col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
              <button className='btn btn-primary btn-lg full-width'>
                Change Password Now!
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default PasswordSetting;
