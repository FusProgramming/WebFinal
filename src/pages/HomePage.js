import React from 'react';
import withRouter from "react-router-dom/es/withRouter";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


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
            <div style ={{ marginTop: '4rem'}}>
                <p>
                    Hello
                </p>
                <Divider/>
            </div>
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