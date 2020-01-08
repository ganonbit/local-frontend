import React, { useState } from 'react';
import WelcomeHeader from 'pages/Welcome/WelcomeHeader';

import { Form, Button, Col, InputGroup, Dropdown } from 'react-bootstrap';

const FeedbackForm = ({ isAuth }) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      {!isAuth && (
        <div className='page-has-left-panels page-has-right-panels pr-0'>
          <WelcomeHeader />
        </div>
      )}

      <div class='stunning-header bg-primary-opacity'>
        <div class='header-spacer--standard'></div>
        <div class='stunning-header-content'>
          <h1 class='stunning-header-title'>Avocado Nation Feedback Form</h1>
          <ul class='breadcrumbs'>
            <li class='breadcrumbs-item active'>
              <span>CONTACT</span>
            </li>
          </ul>
        </div>
        <div class='content-bg-wrap stunning-header-bg1'></div>
      </div>

      <section class='mb60'>
        <div class='container'>
          <div class='row'>
            <div class='col col-xl-10 m-auto col-lg-12 col-md-12 col-sm-12 col-12'>
              <div class='detail-content ui-block feedback-form'>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Row>
                    <Form.Group as={Col} md='6' controlId='validationCustom01'>
                      <Form.Label>First name</Form.Label>
                      <Form.Control required type='text' placeholder='john' />
                      <Form.Control.Feedback type='invalid'>
                        Please enter first name
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md='6' controlId='validationCustom02'>
                      <Form.Label>Last name</Form.Label>
                      <Form.Control required type='text' placeholder='smith' />
                      <Form.Control.Feedback type='invalid'>
                        Please enter last name
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md='12'
                      controlId='validationCustomEmail'
                    >
                      <Form.Label>Email</Form.Label>
                      <InputGroup>
                        <Form.Control
                          type='email'
                          placeholder='your@email.com'
                          aria-describedby='inputGroupPrepend'
                          required
                        />
                        <Form.Control.Feedback type='invalid'>
                          Please enter an email.
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md='12'
                      controlId='validationSelection'
                    >
                      <InputGroup>
                        <Dropdown>
                          <Dropdown.Toggle
                            className='btn btn-sm'
                            id='dropdown-basic'
                          >
                            Select Feedback Reason &darr;
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item eventKey='general' href='#/general'>
                              General Feedback
                            </Dropdown.Item>
                            <Dropdown.Item eventKey='idea' href='#/idea'>
                              Idea Submission
                            </Dropdown.Item>
                            <Dropdown.Item
                              eventKey='bug'
                              href='#/bug-or-feature'
                            >
                              Bug Report / Feature Request
                            </Dropdown.Item>
                            <Dropdown.Item
                              eventKey='report'
                              href='#/report-user'
                            >
                              Report User
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md='12' controlId='validationCustom03'>
                      <Form.Label>Feedback</Form.Label>
                      <Form.Control
                        as='textarea'
                        rows='3'
                        placeholder='your feedback here...'
                        required
                      />
                      <Form.Control.Feedback type='invalid'>
                        Please provide us reason for contact.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  <Button className='btn btn-lg' type='submit'>
                    Submit form
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeedbackForm;
