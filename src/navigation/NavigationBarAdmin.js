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
import {AccountCircle} from "@material-ui/icons";
import SvgIcon from "@material-ui/core/SvgIcon";
import { withRouter } from 'react-router-dom'
import {Tooltip} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/core/SvgIcon/SvgIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
class NavigationBarAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.handleAddPage = this.handleAddPage.bind(this);
        this.handleAdminOpen = this.handleAdminOpen.bind(this);
        this.handleAdminHome = this.handleAdminHome.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleLogOut = () => {
        const { history } = this.props;
        history.push('/HomePage')
    };
    handleAdminOpen = () => {
        const { history } = this.props;
        history.push('/AdminItemPage');
        console.log('Logged')
    };
    handleAdminHome = () => {
        const { history } = this.props;
        history.push('/AdminHomePage')
    };
    handleAddPage = () => {
        const { history } = this.props;
        history.push('/AdminAddPage')
    };
    render() {
        const menuId = 'primary-search-account-menu';
        return (

            <div
                style={{
                    display: 'flex',
                    flexShrink: 0,
                    marginTop: '3rem'
                }}>
                <AppBar position={"fixed"}
                        style={{ background: '#2E3B55' }}>
                    <Toolbar>
                        <Tooltip title="Home">
                            <div style={{
                                marginRight: "1rem"
                            }}>
                                <SvgIcon onClick= {this.handleAdminHome}>
                                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
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
                            marginRight:'2rem',
                            marginLeft: '1rem',
                            width: '100%',
                        }}>
                        </div>
                        <div>
                            <Tooltip title="LogOut">
                                <MenuItem onClick={this.handleLogOut}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                                        <path fill="none" d="M0 0h24v24H0V0z"/>
                                        <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                                    </svg>
                                </MenuItem>
                            </Tooltip>
                        </div>
                    </Toolbar>
                </AppBar>
                <div
                    style={{
                        height: '100%',
                        position: 'absolute',
                        display: 'flex',
                        marginTop: '1rem',
                        justifyContent: 'center',

                    }}>
                    <drawer>
                        <List
                            variant="permanent"
                            anchor="left">
                            <Divider/>
                            {[ 'Home'].map((text, index) => (
                                <ListItem button key={text}
                                          onClick= {this.handleAdminHome}>
                                    <ListItemIcon>{index ? <InboxIcon /> : <HomeIcon />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>

                            ))}
                            <Divider/>
                            {['List Selection'].map((text, index) => (
                                <ListItem button key={text}
                                          onClick= {this.handleAdminOpen} >
                                    <ListItemIcon>{index ? <InboxIcon /> : <ListIcon />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>

                            ))}
                            <Divider/>
                            {[ 'Add'].map((text, index) => (
                                <ListItem button key={text}
                                          onClick= {this.handleAddPage}>
                                    <ListItemIcon>{index ? <InboxIcon /> : <AddCircleOutlineIcon />}</ListItemIcon>

                                    <ListItemText primary={text} />
                                </ListItem>

                            ))}
                            <Divider/>
                        </List>
                    </drawer>
                </div>
            </div>
        );
    }
}

export default withRouter(NavigationBarAdmin);