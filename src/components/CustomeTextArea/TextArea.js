import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputTrigger from 'react-input-trigger';
import { connectSearchBox } from 'react-instantsearch-dom';

import { InfiniteUsers } from './Infinite-users';

class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: null,
      left: null,
      showSuggestor: false,
      text: null,
      textareaValue: this.props.initialValue,
    };
    this.toggleSuggestor = this.toggleSuggestor.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleTextareaInput = this.handleTextareaInput.bind(this);
    this.handleToggleSuggestor = this.handleToggleSuggestor.bind(this);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      this.props.initialValue === nextProps.initialValue &&
      this.props.initialValue.length === 0
    ) {
      this.setState({ textareaValue: '' });
    }
  }
  handleToggleSuggestor(username) {
    this.setState({
      showSuggestor: false,
      left: null,
      top: null,
      text: null,
    });

    if (username) {
      let newtext = this.state.textareaValue.slice(
        0,
        this.state.textareaValue.length - this.state.text.length
      );
      this.setState(
        {
          textareaValue: newtext + username,
        },
        () => this.props.onTextChange(this.state.textareaValue)
      );
    }

    this.endHandler();
  }

  toggleSuggestor(metaInformation) {
    const { hookType, cursor } = metaInformation;

    if (hookType === 'start') {
      this.setState({
        showSuggestor: false,
        left: cursor.left,
        top: cursor.top + cursor.height,
      });
    }
    if (hookType === 'cancel') {
      this.setState({
        showSuggestor: false,
        left: null,
        top: null,
      });
    }
  }
  handleInput(metaInformation) {
    this.props.refine(metaInformation.text);
    this.setState({
      text: metaInformation.text,
      showSuggestor: true,
    });
  }

  handleTextareaInput(event, refine) {
    const { value } = event.target;
    this.setState(
      {
        textareaValue: value,
      },
      () => this.props.onTextChange(this.state.textareaValue)
    );
  }
  render() {
    const state = this.state;
    return (
      <div
        style={{
          position: 'relative',
        }}
      >
        <InputTrigger
          trigger={{
            keyCode: 50,
            shiftKey: true,
          }}
          onStart={metaData => {
            this.toggleSuggestor(metaData);
          }}
          onCancel={metaData => {
            this.toggleSuggestor(metaData);
          }}
          onType={metaData => {
            this.handleInput(metaData);
          }}
          endTrigger={endHandler => {
            this.endHandler = endHandler;
          }}
        >
          <textarea
            type='text'
            className='form-control'
            onChange={this.handleTextareaInput}
            value={state.textareaValue}
            name='comment'
          />
        </InputTrigger>
        <div
          id='dropdown'
          className='user-suggestion'
          style={{
            display: state.showSuggestor ? 'block' : 'none',
            top: state.top,
            left: state.left,
          }}
        >
          <InfiniteUsers
            handleToggleSuggestor={this.handleToggleSuggestor}
            showSuggestor={state.showSuggestor}
            top={state.top}
            left={state.left}
          />
        </div>
      </div>
    );
  }
}

TextArea.propTypes = {
  onTextChange: PropTypes.func.isRequired,
  initialValue: PropTypes.string.isRequired,
  refine: PropTypes.func.isRequired,
};

const ConnectedTextArea = connectSearchBox(TextArea);
export default ConnectedTextArea;
