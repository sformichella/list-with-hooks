import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CharacterList from '../containers/CharacterList/CharacterList';
import Details from '../containers/Details/Details';

const App = () => {
  return (
    <>
      <main>
        <Router>
          <Switch>
            <Route
              path = "/"
              exact
              render = {routerProps => <CharacterList {...routerProps}/>}
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
