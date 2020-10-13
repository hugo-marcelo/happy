import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Landing from '../pages/Landing/Landing';
import OrphanagesMap from '../pages/OrphanagesMap/OrphanagesMap';

export default () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing}></Route>
      <Route path="/app" component={OrphanagesMap}></Route>
    </Switch>
  )
}

