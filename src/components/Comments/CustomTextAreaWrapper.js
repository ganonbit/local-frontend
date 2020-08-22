import React, { Component } from 'react';

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Index } from 'react-instantsearch-dom';

import CustomTextArea from './CustomTextArea';

const searchClient = algoliasearch(
  '70PRHCFRAW',
  '306f2d2320334ca5946827fe2821910d'
);

class CustomTextAreaWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <InstantSearch
        indexName='production_local_users'
        searchClient={searchClient}
      >
        <CustomTextArea
          onCommentChange={this.props.onCommentChange}
          initialValue={this.props.initialValue}
        />
      </InstantSearch>
    );
  }
}

export default CustomTextAreaWrapper;
