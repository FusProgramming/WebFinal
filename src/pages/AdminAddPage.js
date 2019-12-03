import React from 'react';
import Typography from "@material-ui/core/Typography";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Container} from "@material-ui/core";
import {withRouter} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StoreNameInput from "../input/StoreNameInput";
import BeerNameInput from "../input/BeerNameInput";
import BeerTypeInput from "../input/BeerTypeInput";
import StoreAddressInput from "../input/StoreAddressInput";
import StoreCityInput from "../input/StoreCityInput";
import StoreStateInput from "../input/StoreStateInput";
import Axios from "axios";


class AdminAddPage extends React.Component {


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

    }

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
        await this.loadBeers()
    }

    /**
     * Reusable function that uses a GET request to load all users into a state.
     */
    async loadBeers() {
        try {
            const response = await Axios.get('/api/beer');
            const {data} = response;
            this.setState({beers: data});
        } catch (error) {
            console.error(error.message);
        }
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

//creates posting display
    render() {
        const {storeName, beerName, beerType, address, city, state} = this.state;

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
                                        <StoreNameInput
                                            storeName = { storeName }
                                            onChange= { this.handleStoreNameChange}/>
                                    </p>
                                </Grid>
                                <Grid item xs={6}>
                                    <p>
                                        <BeerNameInput
                                            beerName = { beerName }
                                            onChange = { this.handleBeerNameChange }/>
                                    </p>
                                </Grid>
                                <Grid item xs={6}>
                                    <p>
                                        <BeerTypeInput
                                            beerType = { beerType }
                                            onChange = { this.handleBeerTypeChange }/>
                                    </p>
                                </Grid>
                                <Grid item xs={12}>
                                    <p>
                                        <StoreAddressInput
                                            address = { address }
                                            onChange = { this.handleAddressChange }/>
                                    </p>
                                </Grid>
                                <Grid item xs={6}>
                                    <p>
                                        <StoreCityInput
                                            city = { city }
                                            onChange = {this.handleCityChange }/>
                                    </p>
                                </Grid>
                                <Grid item xs={6}>
                                    <p>
                                        <StoreStateInput
                                            state = { state }
                                            onChange = {this.handleStateChange }/>
                                    </p>
                                </Grid>
                                <Grid item xs={12}>
                                    <p>
                                        <RaisedButton label="Submit" primary={true}
                                                      onClick = { this.handleBeerSubmit }
                                                      fullWidth
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