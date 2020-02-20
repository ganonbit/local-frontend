import React, { Component } from 'react';
import PropTypes from 'prop-types';

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';
import TextArea from './TextArea';

const algoliaApp = process.env.REACT_APP_ALGOLIA_APP_ID;
const algoliaKey = process.env.REACT_APP_ALGOLIA_API_KEY;

const searchClient = algoliasearch(
  '***REMOVED***',
  '***REMOVED***'
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
