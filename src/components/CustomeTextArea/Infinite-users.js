import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connectInfiniteHits } from 'react-instantsearch-core';
import Avatar from '../Avatar';

const Hits = ({
  hits,
  handleToggleSuggestor,
  showSuggestor,
  currentSelection,
  setUsers,
}) => {
  useEffect(() => {
    showSuggestor && hits.length === 0 && handleToggleSuggestor(undefined);
    setUsers(hits);
  }, [hits]);

  let size = 3;
  return (
    <>
      {hits &&
        hits.slice(0, size).map((hit, index) => {
          return (
            <div
              className='d-flex user-suggestion-wrap'
              key={index}
              style={{
                background: index === currentSelection ? '#009440' : '',
              }}
              onClick={() => {
                handleToggleSuggestor(`${hit.username}`);
              }}
              onKeyDown={() => {
                handleToggleSuggestor(`${hit.username}`);
              }}
              role='button'
              tabIndex='0'
            >
              <div className='user-avatar-img p-0'>
                <Avatar image={hit.image} />
              </div>
              <div className='user-suggestion-detail py-0'>
                <h5
                  style={{ color: index === currentSelection ? '#ffffff' : '' }}
                >
                  {`${hit.firstName} ${hit.lastName}`}
                </h5>
                <span
                  style={{ color: index === currentSelection ? '#ffffff' : '' }}
                >
                  @{hit.username}
                </span>
              </div>
            </div>
          );
        })}
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
