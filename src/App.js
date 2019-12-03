import React from 'react';
import Axios from 'axios';
import NavigationBar from './navigation/NavigationBar';
import NavigationBarAdmin from './navigation/NavigationBarAdmin';
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import AdminItemPage from "./pages/AdminItemPage";
import AdminHomePage from "./pages/AdminHomePage";
import AdminAddPage from "./pages/AdminAddPage";
import AboutPage from "./pages/AboutPage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            input: '',
            response: ''
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleInputSend = this.handleInputSend.bind(this);
    }

    handleInput(event) {

        this.setState({

            input: event.target.value,

            response: ''
        });
    }
    async handleInputSend() {

        const { input } = this.state;

        try {

            const response = await Axios.post('/api/postly', { testData: input });

            this.setState({ response: response.data })

        } catch (error) {

            alert("Failure: " + error.message);
        }
    }

    render() {
    return (
        <Router>
          <div>
            <Switch>

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
                <Route path="/LoginPage">
                    <NavigationBar/>
                    <LoginPage/>
                </Route>
                <Route path="/RegisterPage">
                    <NavigationBar/>
                    <RegisterPage/>
                </Route>
                <Route path="/AboutPage">
                    <NavigationBar/>
                    <AboutPage/>
                </Route>
                <Route path="/">
                    <NavigationBar/>
                    <HomePage/>
                </Route>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
