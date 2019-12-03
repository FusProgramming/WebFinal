import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from "@material-ui/core/InputBase";
import shape from "@material-ui/core/styles/shape";

import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import NotificationsIcon from '@material-ui/icons/Notifications';
import {AccountCircle} from "@material-ui/icons";
import SvgIcon from "@material-ui/core/SvgIcon";
import { withRouter } from 'react-router-dom'
import {Tooltip} from "@material-ui/core";
import InfoIcon from '@material-ui/icons/Info';


class NavigationBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };

        this.handleLoginOpen = this.handleLoginOpen.bind(this);
        this.handleRegisterOpen = this.handleRegisterOpen.bind(this);
        this.handleHomeOpen = this.handleHomeOpen.bind(this);
        this.handleAboutOpen = this.handleAboutOpen.bind(this);
    }

    /**
     * Called when the 'Login' button is pressed.
     * Navigates to the {@link /}.
     */
    handleLoginOpen = () => {
        const { history } = this.props;
        history.push('/LoginPage')
    };

    /**
     * Called when the 'Register' button is pressed.
     * Navigates to the {@link RegisterPage}.
     */
    handleRegisterOpen = () => {
        const { history } = this.props;
        history.push('/RegisterPage')
    };

    handleAboutOpen = () => {
        const { history } = this.props;
        history.push('/AboutPage')
    };
    /**
     * Called when the 'Home' button is pressed.
     * Navigates to the {@link HomePage}.
     */
    handleHomeOpen = () => {
        const { history } = this.props;
        history.push('/')
    };

    render() {
        const menuId = 'primary-search-account-menu'
        return <AppBar position={"fixed"}
                       style={{background: '#2E3B55'}}>
            <Toolbar>
                <Tooltip title="Home">
                    <div style={{
                        marginRight: "1rem"
                    }}>
                        <SvgIcon onClick={this.handleHomeOpen}>
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                        </SvgIcon>
                    </div>
                </Tooltip>
                <div>
                    <Typography variant={"h6"}>
                        DrinkApp
                    </Typography>
                </div>
                <div style={{
                    position: 'relative',
                    borderRadius: shape.borderRadius,
                    marginRight: '2rem',
                    marginLeft: '1rem',
                    width: '100%',
                }}>
                    <div style={{
                        height: '100%',
                        position: 'absolute',
                        pointerEvents: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    </div>
                    <div style={{marginLeft: '2rem'}}>
                        <InputBase
                            inputRoot={{color: 'inherit'}}
                            inputInput={{
                                padding: '1rem',
                                width: '50%',
                            }}
                            inputProps={{'aria-label': 'search'}}
                        />
                    </div>
                </div>
                <div onClick={this.handleAboutOpen}>
                    <Tooltip title="About ">
                        <MenuItem>
                            <IconButton
                                aria-label="show 4 new mails"
                                color="inherit">
                                <Badge color="secondary">
                                    <InfoIcon/>
                                </Badge>
                            </IconButton>
                        </MenuItem>
                    </Tooltip>
                </div>
                <div onClick={this.handleAdminOpen}>
                    <Tooltip title="Notifcations">
                        <MenuItem>
                            <IconButton aria-label="show 11 new notifications"
                                        color="inherit">
                                <Badge badgeContent={1} color="secondary">
                                    <NotificationsIcon/>
                                </Badge>
                            </IconButton>
                        </MenuItem>
                    </Tooltip>
                </div>
                <div onClick={this.handleLoginOpen}>
                    <Tooltip title="Admin Login">
                        <MenuItem>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                color="inherit">
                                <AccountCircle/>
                            </IconButton>
                        </MenuItem>
                    </Tooltip>
                </div>
            </Toolbar>
        </AppBar>;
    }
}

export default withRouter(NavigationBar);