import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'

import TopHeader from './TopHeader'

/**
 * All other routes of Entire App
 * can be restructure depend on Complexity
 */

const AppLayout = ({ refetch }) => {
  return (
    <Router>
      <TopHeader />
      {/* sideNav Component */}
      <Switch>
        {/* <TopHeader /> */}
        <Route path="/" render={() => <Home refetch={refetch} />} />

        {/* MORE ROUTES GOES HERE....! */}


      </Switch>
    </Router>
  )
}
export default AppLayout
