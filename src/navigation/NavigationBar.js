import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from "@material-ui/core/InputBase";
import shape from "@material-ui/core/styles/shape";
import {fade} from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search';
import * as palette from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MailIcon from '@material-ui/icons/Mail';
import MenuItem from "@material-ui/core/MenuItem";
import NotificationsIcon from '@material-ui/icons/Notifications';
import { AccountCircle } from "@material-ui/icons";
import SvgIcon from "@material-ui/core/SvgIcon";
import { withRouter } from 'react-router-dom'
import {Tooltip} from "@material-ui/core";

class NavigationBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render() {
        return (
            <AppBar position={"static"}>
                <Toolbar>
                    <Tooltip title="Home">
                        <div style={{
                            marginRight: "1rem"
                        }}>
                            <SvgIcon>
                                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                            </SvgIcon>
                        </div>
                    </Tooltip>
                    <div>
                        <Typography variant={"h6"}>
                            Bookface
                        </Typography>
                    </div>
                    <div style={{
                        position: 'relative',
                        borderRadius: shape.borderRadius,
                        backgroundColor: fade(palette.common.white,0.15),
                        '&:hover': {
                            backgroundColor: fade(palette.common.white,0.25),
                        },
                        marginRight:'2rem',
                        marginLeft: '1rem',
                        width: '100%',
                    }}>
                        <div style={{
                            height: '100%',
                            position: 'absolute',
                            pointerEvents: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center' }}>
                            <SearchIcon/>
                        </div>
                        <div style={{ marginLeft: '2rem'}}>
                            <InputBase
                                placeholder="Search"
                                inputRoot={{ color: 'inherit'}}
                                inputInput={{   padding: '1rem',
                                    width: '50%', }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                    </div>
                    <div>
                        <Tooltip title="Messages">
                            <MenuItem >
                                <IconButton
                                    aria-label="show 4 new mails"
                                    color="inherit">
                                    <Badge badgeContent={1} color="secondary">
                                        <MailIcon/>
                                    </Badge>
                                </IconButton>
                            </MenuItem>
                        </Tooltip>
                    </div>
                    <div>
                        <Tooltip title="Notifcations">
                            <MenuItem>
                                <IconButton aria-label="show 11 new notifications"
                                            color="inherit" >
                                    <Badge badgeContent={1} color="secondary">
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>
                            </MenuItem>
                        </Tooltip>
                    </div>
                    <div>
                        <Tooltip title="Profile">
                            <MenuItem >
                                <IconButton
                                    aria-label="account of current user"
                                    aria-haspopup="true"
                                    color="inherit" >
                                    <AccountCircle/>
                                </IconButton>
                            </MenuItem>
                        </Tooltip>
                    </div>
                    <div>
                        <Tooltip title="LogOut">
                            <MenuItem>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                                    <path fill="none" d="M0 0h24v24H0V0z"/>
                                    <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                                </svg>
                            </MenuItem>
                        </Tooltip>
                    </div>
                </Toolbar>

            </AppBar>
        );
    }
}

export default withRouter(NavigationBar);