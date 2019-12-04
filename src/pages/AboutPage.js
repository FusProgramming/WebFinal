import React from 'react';
import withRouter from "react-router-dom/es/withRouter";
import BeerPhoto from "../assets/beer-header.jpg"
import {Container} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";


class AboutPage extends React.Component {


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
                <img style= {{
                    marginTop: '4rem',
                    width: '100%'
                }}
                     src={BeerPhoto} alt="Photo"/>
                     <div>
                        <Typography align={'center'} component={"h1"} variant={"h3"}
                                    style ={{padding: '2rem'}}>
                            About The App
                        </Typography>
                     </div>
                <Divider/>
                <Container component="main">
                    <div style ={{
                        display: 'flex',
                        align: 'left',
                        width: '100%'}}>
                        <div>
                            <Typography align={'left'} component={"h1"} variant={"h5"}
                                        style ={{padding: '2rem'}}>
                                This app is being built for the class android development. If a brewery or a company
                                wish to add their information to this app, there is a registration page where the
                                company can add their information to the app. This allows for the companys to have
                                full control on where they wish their product to be broadcasted to the users of
                                this app.
                            </Typography>
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
            </div>
        );
    }
}
export default withRouter(AboutPage);