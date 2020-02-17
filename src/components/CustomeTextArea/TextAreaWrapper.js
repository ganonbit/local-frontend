import React, { Component } from 'react';
import PropTypes from 'prop-types';

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';
import TextArea from './TextArea';

const searchClient = algoliasearch(
  '70PRHCFRAW',
  '4d23141a22d596a7d5e0c5c59f1d4037'
);

class CustomTextArea extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <InstantSearch
        indexName='production_avonation_users'
        searchClient={searchClient}
      >
        <TextArea
          onTextChange={this.props.onTextChange}
          initialValue={this.props.initialValue}
        />
      </InstantSearch>
    );
  }
}

CustomTextArea.propTypes = {
  onTextChange: PropTypes.func.isRequired,
  initialValue: PropTypes.string.isRequired,
};
export default CustomTextArea;
