import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import AuthorPage from '../../pages/Header/AuthorPage';
import Notifications from '../../pages/Header/Notifications';
import ChatNotifications from '../../pages/Header/ChatNotifications';
import { useStore } from 'store';

const SearchBar = ({ currentRefinement, refine }) => {
  const [{ auth }] = useStore();
  return (
    <>
      <div className='search-bar w-search notification-list friend-requests'>
        <div className='form-group with-button'>
          <input
            className='form-control js-user-search'
            placeholder='Search here people or posts...'
            type="search"
            aria-label="Search"
            value={currentRefinement}
            onChange={event => refine(event.currentTarget.value)}
          />
        </div>
      </div>

      <div className='control-block' style={{height: 'auto'}}>
        <ChatNotifications />
        <Notifications />
        <AuthorPage user={auth.user} />
      </div>
    </>
  )
};

const CustomSearchBar = connectSearchBox(SearchBar);
export default CustomSearchBar;