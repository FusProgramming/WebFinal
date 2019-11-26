import React from 'react';
import NavigationBar from './navigation/NavigationBar';
import NavigationBarAdmin from './navigation/NavigationBarAdmin';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import AdminItemPage from "./pages/AdminItemPage";


class App extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <Switch>
              <Route path="/HomePage">
                <NavigationBar/>
                <HomePage/>
              </Route>
              <Route path="/AdminItemPage">
                <NavigationBarAdmin/>
                <AdminItemPage/>
              </Route>
              <Route path="/RegisterPage">
                <RegisterPage/>
              </Route>
              <Route path="/">
                <NavigationBar/>
                <LoginPage/>
              </Route>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
