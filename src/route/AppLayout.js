import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'

/**
 * All other routes of Entire App
 * can be restructure depend on Complexity
 */

const AppLayout = ({ refetch }) => {
  return (
    <Router>
      <Switch>
        <Route path="/" render={() => <Home refetch={refetch} />} />
      </Switch>
    </Router>
  )
}
export default AppLayout
