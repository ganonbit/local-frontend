import React from 'react'
const ResetPassword = () => (
  <div
    className="modal fade"
    id="restore-password"
    tabindex="-1"
    role="dialog"
    aria-labelledby="restore-password"
    aria-hidden="true">
    <div
      className="modal-dialog window-popup restore-password-popup"
      role="document">
      <div className="modal-content">
        <a
          href="123"
          className="close icon-close"
          data-dismiss="modal"
          aria-label="Close">
          <svg
            className="olymp-close-icon"
            xlinkHref="svg-icons/sprites/icons.svg#olymp-close-icon"
          />
        </a>

        <div className="modal-header">
          <h6 className="title">Restore your Password</h6>
        </div>

        <div className="modal-body">
          <form method="get">
            <p>
              Enter your email and click the send code button. You’ll receive a
              code in your email. Please use that code below to change the old
              password for a new one.
            </p>
            <div className="form-group label-floating">
              <label className="control-label">Your Email</label>
              <input
                className="form-control"
                placeholder=""
                type="email"
                value="james-spiegel@yourmail.com"
              />
            </div>
            <button className="btn btn-green btn-lg full-width">
              Send me the Code
            </button>
            <div className="form-group label-floating">
              <label className="control-label">Enter the Code</label>
              <input className="form-control" placeholder="" type="text" value="" />
            </div>
            <div className="form-group label-floating">
              <label className="control-label">Your New Password</label>
              <input
                className="form-control"
                placeholder=""
                type="password"
                value="olympus"
              />
            </div>
            <button className="btn btn-primary btn-lg full-width">
              Change your Password!
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
)
export default ResetPassword