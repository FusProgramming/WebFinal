import React from 'react';
import Typography from "@material-ui/core/Typography";
import EmailInput from '../input/EmailInput';
import PasswordInput from '../input/PasswordInput';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Container, StandardProps as style} from "@material-ui/core";
import Redirect from "react-router-dom/es/Redirect";
import AppBar from "@material-ui/core/AppBar/AppBar";
import {withRouter} from "react-router-dom";
import {Avatar} from "material-ui";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import * as palette from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";


class LoginPage extends React.Component {
    //object constructor
    constructor(props) {
        super(props);
        this.state = {
            userName: " ",
            password: " ",
            handleClick: ' ',
            isAuthenticated: false
        };
        this.handleEmailAddressChange = this.handleEmailAddressChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleRegisterOpen = this.handleRegisterOpen.bind(this);
        this.handleHomeOpen = this.handleHomeOpen.bind(this);
    }

    /**
     * Called when the 'Home' button is pressed.
     * Navigates to the {@link HomePage}.
     */
    handleHomeOpen = () => {
        const { history } = this.props;
        history.push('/HomePage')
    };

    /**
     * Called when the 'Register' button is pressed.
     * Navigates to the {@link RegisterPage}.
     */
    handleRegisterOpen = () => {
        const { history } = this.props;
        history.push('/RegisterPage')
    };

    //handles email address entered
    handleEmailAddressChange(event) {
        console.log("Change: " + event.target.value);
        this.setState({emailAddress: event.target.value})
    }

    //handles password address entered
    handlePasswordChange(event) {
        console.log("Change: " + event.target.value);
        this.setState({password: event.target.value})
    }


    //creates login Page
    render() {
        const {emailAddress} = this.state;
        const {password} = this.state;

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div style={{   marginTop: '3rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'}}>
                    <MuiThemeProvider>
                        <Avatar style={{    backgroundColor: palette.common.black,
                            margin: '1rem'
                        }}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component={"h1"} variant={"h5"}>
                            Sign In
                        </Typography>
                        <form>
                            <Grid container>
                                <Grid item xs={12}>
                                    <p>
                                        <EmailInput emailAddress={emailAddress}
                                                    onChange={this.handleEmailAddressChange}
                                        />
                                    </p>
                                </Grid>
                                <Grid item xs={12}>
                                    <p>
                                        <PasswordInput password={password}
                                                       onChange={this.handlePasswordChange}

                                        />
                                    </p>
                                </Grid>
                                <Grid item xs={12}>
                                    <p>
                                        <RaisedButton label="Login" primary={true}
                                                      onClick={this.handleHomeOpen}
                                                      fullWidth
                                                      variant = 'contained'
                                                      color = 'primary'
                                        />
                                    </p>
                                </Grid>
                                <Grid item xs={12}>
                                    <p>
                                        <RaisedButton label="Register" primary={true}
                                                      onClick={this.handleRegisterOpen}
                                                      fullWidth
                                                      variant = 'contained'
                                                      color = 'primary'
                                        />
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

export default withRouter(LoginPage);
