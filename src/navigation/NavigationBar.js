import React from 'react';

import { withRouter } from 'react-router-dom'
import AppBar from "@material-ui/core/AppBar";

class NavigationBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render() {
        return (
            <AppBar position={"static"}>
                <p>
                    hello
                </p>
            </AppBar>
        );
    }
}

export default withRouter(NavigationBar);