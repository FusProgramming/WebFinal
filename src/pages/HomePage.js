import React from 'react';
import withRouter from "react-router-dom/es/withRouter";


class HomePage extends React.Component {


//creates posting display
    render() {
        return (
            <div>
                <p>
                    Hello
                </p>
            </div>
        );
    }
}
export default withRouter(HomePage);