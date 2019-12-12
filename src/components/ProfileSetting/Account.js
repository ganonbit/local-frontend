import React from 'react';
const AccountSetting = () => (
  <>
    <div className='ui-block-title block-title-bg'>
      <h6 className='title'>Account Settings</h6>
    </div>
    <div className='ui-block-content'>
      <form>
        <div className='row'>
          <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
            <div className='form-group label-floating is-select'>
              <label className='control-label'>Who Can Friend You?</label>
              <select className='selectpicker form-control'>
                <option value='EO'>Everyone</option>
                <option value='NO'>No One</option>
              </select>
            </div>
          </div>
          <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
            <div className='form-group label-floating is-select'>
              <label className='control-label'>Who Can View Your Posts</label>
              <select className='selectpicker form-control'>
                <option value='US'>Friends Only</option>
                <option value='EO'>Everyone</option>
              </select>
            </div>
          </div>
          <div className='col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
            <div className='description-toggle'>
              <div className='description-toggle-content'>
                <div className='h6'>Notifications Sound</div>
                <p>
                  A sound will be played each time you receive a new activity
                  notification
                </p>
              </div>
              <div className='togglebutton'>
                <label>
                  <input type='checkbox' checked={true} />
                  <span class='toggle'></span>
                </label>
              </div>
            </div>
            <div className='description-toggle'>
              <div className='description-toggle-content'>
                <div className='h6'>Notifications Email</div>
                <p>
                  We’ll send you an email to your account each time you receive
                  a new activity notification
                </p>
              </div>
              <div className='togglebutton'>
                <label>
                  <input type='checkbox' checked='' />
                  <span class='toggle'></span>
                </label>
              </div>
            </div>
            <div className='description-toggle'>
              <div className='description-toggle-content'>
                <div className='h6'>Friend’s Birthdays</div>
                <p>
                  Choose wheather or not receive notifications about your
                  friend’s birthdays on your newsfeed
                </p>
              </div>
              <div className='togglebutton'>
                <label>
                  <input type='checkbox' checked={false} />
                  <span class='toggle'></span>
                </label>
              </div>
            </div>
            <div className='description-toggle'>
              <div className='description-toggle-content'>
                <div className='h6'>Chat Message Sound</div>
                <p>
                  A sound will be played each time you receive a new message on
                  an inactive chat window
                </p>
              </div>
              <div className='togglebutton'>
                <label>
                  <input type='checkbox' checked={true} />
                  <span class='toggle'></span>
                </label>
              </div>
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
export default AccountSetting;
