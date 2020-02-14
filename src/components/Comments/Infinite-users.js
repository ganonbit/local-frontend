import React, { useEffect } from 'react';
import { connectInfiniteHits } from 'react-instantsearch-core';

const Hits = ({ hits, handleToggleSuggestor, showSuggestor }) => {
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
        >
          @{hit.username}
        </div>
      ))}
    </>
  );
};

const InfiniteUsers = connectInfiniteHits(Hits);

export { InfiniteUsers };
