import React from 'react';
import withRouter from "react-router-dom/es/withRouter";
import BeerPhoto from "../assets/beer-header.jpg"


class AboutPage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {};
    }
//creates posting display
    render() {
        return (
            <div>
                <img style= {{
                    marginTop: '4rem',
                    width: '100%'
                }}
                     src={BeerPhoto} alt="Photo"/>
                <p>
                    Hello
                </p>
            </div>
        );
    }
}
export default withRouter(AboutPage);