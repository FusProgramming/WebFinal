import React from 'react';
import NavigationBar from './navigation/NavigationBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";


class App extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <NavigationBar/>
            <Switch>
              <Route path="/">
                <HomePage/>
              </Route>
              <Route path="/ProfilePage">
                <ProfilePage/>
              </Route>
              <Route path="/RegisterPage">
                <RegisterPage/>
              </Route>
              <Route path="/LoginPage">
                <LoginPage/>
              </Route>

            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
