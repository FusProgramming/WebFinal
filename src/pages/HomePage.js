import React from 'react';
import withRouter from "react-router-dom/es/withRouter";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import GoogleMaps from "../assets/GoogleMaps.JPG"
import Phone from "../assets/AppPicture.JPG"
import {Container} from "@material-ui/core";
import BlackBar from "../assets/BlackBar.JPG";

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleRegisterOpen = this.handleRegisterOpen.bind(this);
    }

    handleRegisterOpen = () => {
        const { history } = this.props;
        history.push('/RegisterPage')
    };
//creates posting display
    render() {
        return (
            <div>
                <div style ={{width: '100%'}}>
                    <img style= {{
                        marginTop: '4rem',
                        width: '100%'
                    }}
                         src={GoogleMaps} alt="Photo"/>
                </div>
                <div>
                    <img
                        style= {{
                            display: 'flex',
                            width: '100%'
                        }}
                        src={BlackBar} alt="Photo"/>
                </div>
                <Container component="main">
                    <div style ={{
                        display: 'flex',
                        align: 'center',
                        width: '100%'}}>
                    <div>
                        <Typography align={'left'} component={"h1"} variant={"h5"}
                                    style ={{padding: '10rem'}}>
                            Android App that allows users
                            to search for their drink of
                            choice and will give them
                            drink information, location,
                            and which stores have this beverage
                        </Typography>
                        <Typography align={'center'} component={"h1"} variant={"h5"}
                                    style ={{marginTop: '2rem'}}>
                            Join Today
                        </Typography>
                    </div>
                    <div style ={{
                        display: 'flex',
                        flexDirection: 'row',
                        align: 'center'}}>
                    <img
                         style= {{
                             marginRight: '10rem',
                             width: '100%'
                    }}
                         src={Phone} alt="Photo"/>
                    </div>
                    </div>

                </Container>


                <Divider/>

                <div style ={{
                    marginTop: '3rem',
                    marginBottom: '3rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Typography variant={"h4"}>
                        Work for A Brewery or a Liquor Store?
                    </Typography>
                    <Button variant="contained"
                            size="large"
                            color="#2E3B55"
                            onClick={this.handleRegisterOpen}
                            style ={{
                                marginTop: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                        Create an Account
                    </Button>

                </div>
                <Divider/>
            </div>

        );
    }
}
export default withRouter(HomePage);