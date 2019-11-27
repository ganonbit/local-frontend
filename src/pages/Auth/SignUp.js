import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import { withRouter } from 'react-router-dom'

import { Field } from '../../components/Auth/index'
import { SIGN_UP } from 'graphql/user'
import { validateFormField } from '../../utils/index'

const SignUp = ({ refetch, history }) => {
  const [error, setError] = useState({
    fullName: '',
    username: '',
    email: '',
    password: ''
  })
  const [values, setValue] = useState({
    fullName: '', //firstName
    username: '', //latsNmae
    email: '',
    password: '',
    dob: '',
    gender: ''
  })
  const { fullName, username, email, password } = values
  const handleChange = e => {
    e.preventDefault()
    const { name, value } = e.target
    setValue({ ...values, [name]: value })

    let fieldError = validateFormField(name, value)
    setError({ ...error, ...fieldError })
  }

  const validate = () => {
    if (!fullName || !email || !username || !password) {
      if (!fullName) setError({ ...error, fullName: 'Name Field is required' })
      else if (!email) setError({ ...error, email: 'Email is required' })
      else if (!username)
        setError({ ...error, username: 'User name  required' })
      else if (!password)
        setError({ ...error, password: 'Password is required' })
      else return true
    }
    return false
  }

  const handleSubmit = (e, signup) => {
    e.preventDefault()
    const error = validate()
    if (error) {
      return false
    }
    signup().then(async ({ data }) => {
      localStorage.setItem('token', data.signup.token)
      await refetch()
      // history.push(Routes.HOME);
    })
  }

  const disableButton =
    !fullName ||
    !username ||
    !email ||
    !password ||
    error.fullName ||
    error.username ||
    error.email ||
    error.password

  return (
    <Mutation
      mutation={SIGN_UP}
      variables={{
        input: { fullName, email, password, username }
      }}>
      {(signup, { loading, error: apiError }) => {
        return (
          <div className="col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="registration-login-form">
              <div className="tab-content">
                <div
                  className="tab-pane active"
                  id="home"
                  role="tabpanel"
                  data-mh="log-tab">
                  <div className="title h6">Register to Avocado Nation</div>
                  <form
                    className="content"
                    onSubmit={e => handleSubmit(e, signup)}>
                    <div className="row">
                      <Field
                        fieldContainerClass="sm"
                        placeholder="Full Name"
                        type="text"
                        value={fullName}
                        handleChange={handleChange}
                        name="fullName"
                        error={error.fullName}
                      />

                      <Field
                        fieldContainerClass="sm"
                        placeholder="User Name"
                        type="text"
                        value={username}
                        handleChange={handleChange}
                        name="username"
                        error={error.username}
                      />
                      <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <Field
                          fieldContainerClass="lg"
                          placeholder="Your Email"
                          type="email"
                          value={email}
                          handleChange={handleChange}
                          name="email"
                          error={error.email}
                        />

                        <Field
                          fieldContainerClass="lg"
                          placeholder="Your Password"
                          type="password"
                          value={password}
                          handleChange={handleChange}
                          name="password"
                          error={error.password}
                        />

                        <div className="form-group date-time-picker label-floating">
                          <label className="control-label">Your Birthday</label>
                          <input
                            name="datetimepicker"
                            defaultValue="10/24/1984"
                          />
                          <span className="input-group-addon">
                            <svg
                              className="olymp-calendar-icon"
                              xlinkHref="svg-icons/sprites/icons.svg#1olymp-calendar-icon"
                            />
                          </span>
                        </div>

                        <div className="form-group label-floating is-select">
                          <label className="control-label">Your Gender</label>
                          <select
                            className="select picker form-control"
                            onChange={handleChange}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                        </div>

                        <div className="remember">
                          <div className="checkbox">
                            <label>
                              <input name="optionsCheckboxes" type="checkbox" />
                              <span class="checkbox-material">
                                <span class="check" />
                              </span>
                              I accept the <a href="#1">Terms and Conditions</a>{' '}
                              of the website
                            </label>
                          </div>
                        </div>

                        <button
                          className="btn btn-green btn-lg full-width"
                          type="submit"
                          disabled={disableButton}>
                          Complete Registration!
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )
      }}
    </Mutation>
  )
}

export default withRouter(SignUp)
