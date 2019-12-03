import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/HomeContainer/Home';

import { Sidebar } from '../components/Sidebar/index';
import TopHeader from './TopHeader';

/**
 * All other routes of Entire App
 * can be restructure depends on Complexity
 */

const AppLayout = ({ refetch }) => {
  return (
    <Router>
      <div className='page-has-left-panels page-has-right-panels pr-0'>
        <Sidebar refetch={refetch} />
        <TopHeader refetch={refetch} />
        <div className='header-spacer'></div>
        <Switch>
          <Route component={Home} />} />
          {/* MORE ROUTES GOES HERE....! */}
        </Switch>
      </div>
    </Router>
  );
};
export default AppLayout;
