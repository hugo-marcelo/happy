import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CreateOrphanage from '~/pages/CreateOrphanage';
import Landing from '~/pages/Landing/Landing';
import Orphanage from '~/pages/Orphanage';
import OrphanagesMap from '~/pages/OrphanagesMap/OrphanagesMap';

export default () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing}></Route>
      <Route path="/app" component={OrphanagesMap}></Route>

      <Route path="/orphanages/create" component={CreateOrphanage}></Route>
      <Route path="/orphanages/:id" component={Orphanage}></Route>
    </Switch>
  );
};
