import React from 'react';
import NavigationBar from './navigation/NavigationBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from "./pages/HomePage";


class App extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <NavigationBar/>
            <Switch>
              <Route path="/HomePage">
                <HomePage/>
              </Route>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
