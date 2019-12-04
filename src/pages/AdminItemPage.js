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
import Axios from "axios";


class AdminItemPage extends React.Component {
//creates posting display

    constructor(props) {
        super(props);
        this.state = {
            beers: [],
            storeName: "",
            beerName: "",
            beerType: "",
            address: "",
            city: "",
            state: ""
        };
        this.loadBeers = this.loadBeers.bind(this);
        this.handleStoreNameChange = this.handleStoreNameChange.bind(this);
        this.handleBeerNameChange = this.handleBeerNameChange.bind(this);
        this.handleBeerTypeChange = this.handleBeerTypeChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleBeerSubmit = this.handleBeerSubmit.bind(this);
        this.deleteBeers = this.deleteBeers.bind(this);
        this.handleAdminOpen = this.handleAdminOpen.bind(this);

    }

    handleAdminOpen = () => {
        const { history } = this.props;
        history.push('/AdminItemPage')
    };

    handleStoreNameChange(event) {
        console.log("Change: " + event.target.value);
        this.setState({storeName: event.target.value})
    }

    handleBeerNameChange(event) {
        console.log("Change: " + event.target.value);
        this.setState({beerName: event.target.value})
    }

    handleBeerTypeChange(event) {
        console.log("Change: " + event.target.value);
        this.setState({beerType: event.target.value})
    }

    handleAddressChange(event) {
        console.log("Change: " + event.target.value);
        this.setState({address: event.target.value})
    }

    handleCityChange(event) {
        console.log("Change: " + event.target.value);
        this.setState({city: event.target.value})
    }

    handleStateChange(event) {
        console.log("Change: " + event.target.value);
        this.setState({state: event.target.value})
    }

    async componentDidMount() {
        // Load all of the users as soon as this component mounts
        await this.loadBeers();
    }

    /**
     * Reusable function that uses a GET request to load all users into a state.
     */
    async loadBeers() {
        try {
            const response = await Axios.get('/api/beer');
            const {data} = response;
            this.setState({beers: data});
            console.log(data);
        } catch (error) {
            console.error(error.message);
        }
    }

    async  deleteBeers() {
        const {storeName, beerName, beerType, address, city, state} = this.state;
        try {
            const data = {
                beers: [],
                storeName: storeName,
                beerName: beerName,
                beerType: beerType,
                address: address,
                city: city,
                state: state
            };
            console.log(data);
            await Axios.delete('/api/beer/', data );
        } catch (error) {
            console.error(error.message);
        }
        await this.loadBeers();
    }


    async handleBeerSubmit() {
        const {storeName, beerName, beerType, address, city, state} = this.state;

        try {
            const data = {
                storeName: storeName,
                beerName: beerName,
                beerType: beerType,
                address: address,
                city: city,
                state: state
            };

            console.log(data);
            await Axios.post('/api/beers', data);
        } catch (error) {
            console.error(error.message);
        }

        await this.loadBeers();
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
                                {this.state.beers.map(row => (
                                    <TableRow key={row._id}>
                                        <TableCell align="right" component="th" scope="row">{row.storeName}</TableCell>
                                        <TableCell align="right">{row.beerName}</TableCell>
                                        <TableCell align="right">{row.beerType}</TableCell>
                                        <TableCell align="right">{row.address}</TableCell>
                                        <TableCell align="right">{row.city}</TableCell>
                                        <TableCell align="right">{row.state}</TableCell>
                                        <TableCell align="right"
                                                   style= {{
                                                       marginRight: '1rem',
                                                   }}>
                                            <DeleteIcon
                                                onClick= {this.deleteBeers}>
                                            </DeleteIcon>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
            </div>
        );
    }

}
export default withRouter(AdminItemPage);