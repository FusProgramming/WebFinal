import React from 'react';
import withRouter from "react-router-dom/es/withRouter";
import Paper from "@material-ui/core/Paper";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DeleteIcon from '@material-ui/icons/Delete';


class AdminItemPage extends React.Component {
//creates posting display

    constructor(props) {
        super(props);
        this.state = {

        };

    }
    render() {
        return (
<div>
            <div style= {{
                display: "flex-wrap",
                marginTop: '2rem',
                marginRight: '1rem',
                marginLeft: '12rem'
            }}>
                <Paper>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Store Name</TableCell>
                                <TableCell align="right">Beer</TableCell>
                                <TableCell align="right">Beer Type</TableCell>
                                <TableCell align="right">Address</TableCell>
                                <TableCell align="right">City</TableCell>
                                <TableCell align="right">State</TableCell>
                                <TableCell align="right">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                    </TableCell>
                                    <TableCell align="right">k</TableCell>
                                    <TableCell align="right">k</TableCell>
                                    <TableCell align="right">k</TableCell>
                                    <TableCell align="right">k</TableCell>
                                    <TableCell align="right">k</TableCell>
                                    <TableCell align="right"
                                                style= {{
                                                    marginRight: '1rem',
                                                }}>
                                        <DeleteIcon onClick={this.handleLoginOpen} />
                                    </TableCell>
                                </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </div>
</div>
        );
    }

}
export default withRouter(AdminItemPage);