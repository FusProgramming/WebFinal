import React from 'react';
import Axios from 'axios';
import Typography from "@material-ui/core/Typography";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import EmailInput from "../input/EmailInput";
import PasswordInput from "../input/PasswordInput";
import RaisedButton from "material-ui/RaisedButton";
import NameInput from "../input/NameInput";
import LastNameInput from "../input/LastNameInput";
import PreferredNameInput from "../input/PreferredNameInput";
import {withRouter} from "react-router-dom";
import {Container, CssBaseline} from "@material-ui/core";
import {Avatar} from "material-ui";
import LockOutlinedIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Grid from "@material-ui/core/Grid";
import * as palette from "@material-ui/core/colors";
import LoginPage from "./LoginPage";


class RegisterPage extends React.Component {
    //object constructor
    constructor(props) {
        super(props);
        this.state = {

            users: [],

            firstName: "",
            lastName: "",
            preferredName: "",
            email: "",
            password: "",
            handleClick: ' ',
            handleLoginOpen: false,
        };
        this.loadUsers = this.loadUsers.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handlePreferredNameChange = this.handlePreferredNameChange.bind(this);
        this.handleEmailAddressChange = this.handleEmailAddressChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLoginOpen = this.handleLoginOpen.bind(this);
        this.handleHomeOpen = this.handleHomeOpen.bind(this);
        this.handleUserSubmit = this.handleUserSubmit.bind(this);


    }

    async componentDidMount() {
        // Load all of the users as soon as this component mounts
        await this.loadUsers()
    }

    /**
     * Reusable function that uses a GET request to load all users into a state.
     */
    async loadUsers() {

        try {

            const response = await Axios.get('/api/user');

            const {data} = response;

            this.setState({users: data});

        } catch (error) {

            console.error(error.message);
        }
    }

    /**
     * Called when the 'Login' button is pressed.
     * Navigates to the {@link LoginPage}.
     */
    handleLoginOpen = () => {
        const {history} = this.props
        history.push('/')
    }

    /**
     * Called when the 'Home' button is pressed.
     * Navigates to the {@link HomePage}.
     */
    handleHomeOpen = () => {
        const {history} = this.props
        history.push('/HomePage')
    }

    //handles first name entered
    handleFirstNameChange(event) {
        console.log("Change: " + event.target.value);
        this.setState({firstName: event.target.value})
    }

    //handles last name entered
    handleLastNameChange(event) {
        console.log("Change: " + event.target.value);
        this.setState({lastName: event.target.value})
    }

    //handles preferred name entered
    handlePreferredNameChange(event) {
        console.log("Change: " + event.target.value);
        this.setState({preferredName: event.target.value})
    }

    //handles email address entered
    handleEmailAddressChange(event) {
        console.log("Change: " + event.target.value);
        this.setState({emailAddress: event.target.value})
    }

    //handles password entered
    handlePasswordChange(event) {
        console.log("Change: " + event.target.value);
        this.setState({password: event.target.value})
    }

    /**
     * Called when the submit button is clicked.
     */
    async handleUserSubmit() {

        const { preferredName, firstName, lastName, emailAddress, password } = this.state;

        try {

            // This is the JSON payload that will be delivered to the server in 'request.body'
            const data = {
                userName: preferredName,
                firstName: firstName,
                lastName: lastName,
                emailAddress: emailAddress,
                password: password
            };
            console.log(data);

            // We are now doing a POST request because we are storing a new user plus switching to the login page for login
            await Axios.post('/api/users', data);
        }
        catch (error) {

            console.error(error.message);
        }

        // Reload the users straight from the server
        await this.loadUsers();
    }

    //renders register page
    render() {
        const {firstName, lastName, preferredName, emailAddress, password} = this.state;

        // For each user in the database, create a card
        /*const userCards = users.map((user) => {

            return (
                <Card style={{margin: '1rem'}} key={JSON.stringify(user)}>
                    <CardContent>
                        <Typography color={"textSecondary"}>
                            {user.userName}
                        </Typography>
                        <Typography color={"textSecondary"}>
                            {user.firstName}
                        </Typography>
                        <Typography color={"textSecondary"}>
                            {user.lastName}
                        </Typography>
                        <Typography color={"textSecondary"}>
                            {user.emailAddress}
                        </Typography>
                        <Typography color={"textSecondary"}>
                            {user.password}
                        </Typography>
                    </CardContent>
                </Card>
            )
        });*/


        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div style={{
                    marginTop: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <MuiThemeProvider>
                        <Avatar style={{
                            backgroundColor: palette.common.black,
                            marginTop: '3rem'
                        }}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component={'h1'} variant={"h4"}>
                            Sign Up
                        </Typography>
                        <form>
                            <Grid container>
                                <Grid item xs={12} sm={6}>
                                    <p>
                                        <NameInput firstName={firstName}
                                                   onChange={this.handleFirstNameChange}/>
                                    </p>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <p>
                                        <LastNameInput lastName={lastName}
                                                       onChange={this.handleLastNameChange}/>
                                    </p>
                                </Grid>
                                <Grid item xs={12}>
                                    <p>
                                        <PreferredNameInput preferredName={preferredName}
                                                            onChange={this.handlePreferredNameChange}/>
                                    </p>
                                </Grid>
                                <Grid item xs={12}>
                                    <p>
                                        <EmailInput emailAddress={emailAddress}
                                                    onChange={this.handleEmailAddressChange}/>
                                    </p>
                                </Grid>
                                <Grid item xs={12}>
                                    <p>
                                        <PasswordInput password={password}
                                                       onChange={this.handlePasswordChange}/>
                                    </p>
                                </Grid>
                                <Grid item xs={12}>
                                    <p>
                                        <RaisedButton label="Sign Up" primary={true}
                                                      onClick={this.handleUserSubmit}
                                                      fullWidth/>
                                    </p>
                                </Grid>
                                <Grid item xs={12}>
                                    <p>
                                        <RaisedButton label="Login" primary={true}
                                                      onClick={this.handleUserSubmit}
                                                      fullWidth/>
                                    </p>
                                </Grid>

                            </Grid>
                        </form>
                    </MuiThemeProvider>
                </div>
            </Container>

        );


    }
}

export default withRouter(RegisterPage);