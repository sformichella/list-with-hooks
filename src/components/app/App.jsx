import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const App = () => {
  return (
    <>
      <main>
        <Router>
          <Switch>
            <Route
              path = "/"
              exact
              render = {routerProps => <List {...routerProps}/>}
            />
            <Route
              path = "/:id"
              exact
              render = {routerProps => <Details {...routerProps}/>}
            />
          </Switch>
        </Router>
      </main>
    </>
  );
};

export default App;
