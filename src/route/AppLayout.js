import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../pages/HomeContainer/Home'

import TopHeader from './TopHeader'

/**
 * All other routes of Entire App
 * can be restructure depend on Complexity
 */

const AppLayout = ({ refetch }) => {
  return (
    <Router>
      <div>
        <TopHeader />
      </div>
      <div className="header-spacer"></div>

      <div className="container">
        {/* sideNav Component */}
        <Switch>
          <Route path="/" component={Home} />} />
          {/* MORE ROUTES GOES HERE....! */}
        </Switch>
      </div>
    </Router>
  )
}
export default AppLayout
