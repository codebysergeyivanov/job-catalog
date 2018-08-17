import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import Jobs from './containers/Jobs';
import Form from './containers/Form';
import Info from './components/Info';
import Welcome from './components/Welcome';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/"><div>
          <Welcome />
          <Form />
          <Jobs />
        </div>
        </Route>
        <Route path="/info" component={Info} />
      </Switch>
    );
  }
}

export default App;
