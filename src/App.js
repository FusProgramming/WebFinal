import React from 'react';
import NavigationBar from './navigation/NavigationBar';
import NavigationBarAdmin from './navigation/NavigationBarAdmin';
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import AdminItemPage from "./pages/AdminItemPage";
import AdminHomePage from "./pages/AdminHomePage";
import AdminAddPage from "./pages/AdminAddPage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



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
                <Route path="/AdminHomePage">
                    <NavigationBarAdmin/>
                    <AdminHomePage/>
                </Route>
                <Route path="/AdminItemPage">
                    <NavigationBarAdmin/>
                    <AdminItemPage/>
                </Route>
                <Route path="/AdminAddPage">
                    <NavigationBarAdmin/>
                    <AdminAddPage/>
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
