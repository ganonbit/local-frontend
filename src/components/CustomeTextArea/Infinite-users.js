import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connectInfiniteHits } from 'react-instantsearch-core';

const Hits = ({
  hits,
  handleToggleSuggestor,
  showSuggestor,
  currentSelection,
}) => {
  useEffect(() => {
    showSuggestor && hits.length === 0 && handleToggleSuggestor(undefined);
  }, [hits]);
  return (
    <>
      {hits.map((hit, index) => (
        <div
          key={index}
          onClick={() => {
            handleToggleSuggestor(`${hit.username}`);
          }}
          style={{
            background: index === currentSelection ? '#eee' : '',
          }}
          onKeyDown={() => {
            handleToggleSuggestor(`${hit.username}`);
          }}
          role='button'
          tabIndex='0'
        >
          {`${hit.firstName} ${hit.lastName}`}
        </div>
      ))}
    </>
  );
};

Hits.propTypes = {
  hits: PropTypes.object.isRequired,
  handleToggleSuggestor: PropTypes.func.isRequired,
  showSuggestor: PropTypes.bool.isRequired,
  currentSelection: PropTypes.any,
};

const InfiniteUsers = connectInfiniteHits(Hits);

export { InfiniteUsers };
