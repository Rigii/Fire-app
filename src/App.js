import React, { useState } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { AcccessRoute } from './screens/acces-route';
import { Home } from './screens/home';
import { Login } from './screens/login';

function App() {
  const [ user, setUser ] = useState(null);

  return (
    <Router>
      <div className="App">
        <AcccessRoute exact path="/"
          component={Home} 
          user={user}
        />
        <Route exact path="/login"
          render={() => <Login setUser={setUser} />}
        />
      </div>
    </Router>
  );
}

export default App;
