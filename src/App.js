import React from 'react';
import AllUsersList from './components/AllUsersList';
import UserDetails from './components/UserDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={AllUsersList} />
          <Route path="/user/:userId" exact component={UserDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
