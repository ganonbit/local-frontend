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
      showSuggester: false,
      text: '',
      textareaValue: this.props.initialValue,
      users: null,
      currentSelection: -1,
    };
    this.toggleSuggester = this.toggleSuggester.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleTextareaInput = this.handleTextareaInput.bind(this);
    this.handleToggleSuggester = this.handleToggleSuggester.bind(this);
    this.setUsers = this.setUsers.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      this.props.initialValue === nextProps.initialValue &&
      this.props.initialValue.length === 0
    ) {
      this.setState({ textareaValue: '' });
    }
  }

  setUsers(users) {
    this.setState({ users: users });
  }
  handleKeyPress(event) {
    const { which } = event;
    if (which === 13 && this.state.currentSelection !== -1) {
      event.preventDefault();
    }
  }
  handleKeyDown(event) {
    const { which } = event;
    const { currentSelection, users } = this.state;
    if (which === 40) {
      // 40 is the character code of the down arrow
      // event.preventDefault();
      this.setState({
        currentSelection: users.length
          ? (currentSelection + 1) % (users.length < 3 ? users.length : 3)
          : -1,
      });
    }

    if (which === 27) {
      this.setState(
        {
          showSuggester: false,
          left: null,
          top: null,
          text: null,
          currentSelection: -1,
        },
        () => this.endHandler()
      );
    }
    if (which === 38) {
      // 40 is the character code of the down arrow
      event.preventDefault();
      this.setState({
        currentSelection:
          currentSelection - 1 < 0 || currentSelection - 1 > 3
            ? 0
            : currentSelection - 1,
      });
    }
    if (which === 13) {
      if (
        this.state.users &&
        this.state.users[this.state.currentSelection] &&
        this.state.text
      ) {
        let newtext = this.state.textareaValue.slice(
          0,
          this.state.textareaValue.length - this.state.text.length
        );
        this.setState(
          {
            textareaValue:
              newtext + this.state.users[this.state.currentSelection].username,
            showSuggester: false,
            left: null,
            top: null,
            text: null,
            currentSelection: -1,
          },
          () => {
            this.props.onTextChange(this.state.textareaValue);
          }
        );
        this.endHandler();
      } else if (
        this.state.users &&
        this.state.users[this.state.currentSelection]
      ) {
        this.setState(
          {
            textareaValue:
              this.state.textareaValue +
              this.state.users[this.state.currentSelection].username,
            showSuggester: false,
            left: null,
            top: null,
            text: null,
            currentSelection: -1,
          },
          () => {
            this.props.onTextChange(this.state.textareaValue);
          }
        );
        this.endHandler();
      } else {
        return;
      }
    }
  }
  handleToggleSuggester(username) {
    this.setState({
      showSuggester: false,
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

  toggleSuggester(metaInformation) {
    const { hookType, cursor } = metaInformation;

    if (hookType === 'start') {
      this.setState({
        showSuggester: true,
        left: cursor.left,
        top: cursor.top + cursor.height,
      });
    }
    if (hookType === 'cancel') {
      this.setState({
        showSuggester: false,
        left: null,
        top: null,
      });
    }
  }
  handleInput(metaInformation) {
    this.props.refine(metaInformation.text);
    this.setState({
      text: metaInformation.text,
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
        onKeyDown={this.handleKeyDown}
        role='button'
        tabIndex='0'
      >
        <InputTrigger
          trigger={{
            keyCode: 50,
            shiftKey: true,
          }}
          onStart={metaData => {
            this.toggleSuggester(metaData);
          }}
          onCancel={metaData => {
            this.toggleSuggester(metaData);
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
            onKeyDown={this.handleKeyPress}
          />
        </InputTrigger>
        <div
          id='dropdown'
          className='user-suggestion'
          style={{
            display: state.showSuggester ? 'block' : 'none',
            top: state.top,
            left: state.left,
          }}
        >
          <InfiniteUsers
            handleToggleSuggester={this.handleToggleSuggester}
            showSuggester={state.showSuggester}
            top={state.top}
            left={state.left}
            setUsers={this.setUsers}
            currentSelection={state.currentSelection}
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
