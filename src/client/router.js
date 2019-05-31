import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Kanban from './layouts/kanban/Kanban.jsx';
import NotFound from './layouts/notfound/NotFound.jsx';

export default function() {
  return (
    <BrowserRouter history={React.browserHistory}>
      <Switch>
        <Route exact path="/" component={Kanban} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
