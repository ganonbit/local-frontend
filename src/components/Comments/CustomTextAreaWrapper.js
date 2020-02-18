import React, { Component } from 'react';

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Index } from 'react-instantsearch-dom';

import CustomTextArea from './CustomTextArea';

const searchClient = algoliasearch(
  '70PRHCFRAW',
  '4d23141a22d596a7d5e0c5c59f1d4037'
);

class CustomTextAreaWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <InstantSearch
        indexName='production_avonation_users'
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
