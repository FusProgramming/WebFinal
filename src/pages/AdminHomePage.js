import React from 'react';
import withRouter from "react-router-dom/es/withRouter";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {Container} from "@material-ui/core";
import Beer from "../assets/BeerPhoto.jpg";


class AdminHomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };

    }
//creates posting display
    render() {
        return (
            <div>
                <div>
                    <Typography align={'center'} component={"h1"} variant={"h3"}
                                style ={{padding: '2rem'}}>
                        Admin Home Page
                    </Typography>
                    <Divider style={{ marginLeft: '12rem'}}>
                    </Divider>
                </div>
                <Container component="main">
                    <div style ={{
                        display: 'flex',
                        align: 'center',
                        width: '100%'}}>
                        <div>
                            <Typography align={'left'} component={"h1"} variant={"h5"}
                                        style ={{padding: '10rem'}}>
                                Admin Login screens allows for companies to add information to the database.
                                List Selection will show you all of your choices that you have and give you an option
                                to delete these options.
                                Add Selection allows the company to add where the their drinks are located.
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
                                src={Beer} alt="Photo"/>
                        </div>
                    </div>
                </Container>
            </div>



        );
    }
}
export default withRouter(AdminHomePage);