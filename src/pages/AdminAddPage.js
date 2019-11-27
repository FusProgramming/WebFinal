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
import Image from '../assets/BeerPhoto.jpg';


class AdminAddPage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {};
    }
//creates posting display
    render() {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div style={{
                    marginTop: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between'}}>
                    <MuiThemeProvider>
                        <Typography component={"h1"} variant={"h5"}>
                            Add Information
                        </Typography>
                        <form>
                            <Grid container spacing={1} >
                                <Grid item xs={12 } >
                                    <p>
                                        <EmailInput
                                                    onChange={this.handleEmailAddressChange}
                                        />
                                    </p>
                                </Grid>
                                <Grid item xs={12}>
                                    <p>
                                        <EmailInput
                                            onChange={this.handleEmailAddressChange}
                                        />
                                    </p>
                                </Grid>
                                <Grid item xs={12}>
                                    <p>
                                        <EmailInput
                                            onChange={this.handleEmailAddressChange}
                                        />
                                    </p>
                                </Grid>
                                <Grid item xs={12}>
                                    <p>
                                        <PasswordInput
                                                       onChange={this.handlePasswordChange}

                                        />
                                    </p>
                                </Grid>
                                <Grid item xs={12}>
                                    <p>
                                        <RaisedButton label="Login" primary={true}
                                                      onClick={this.handleAdminHome}
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

export default withRouter(AdminAddPage);