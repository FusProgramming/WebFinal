import React from 'react';
import TextField from '@material-ui/core/TextField';

class EmailInput extends React.Component {

    render() {

        const {emailAddress, onChange} = this.props;
        //Info for about the emailaddress textfield
        return <TextField id="standard-name"
                          label="Email address"
                          value={emailAddress}
                          onChange={onChange}
                          margin="normal"
                          variant= 'outlined'
                          fullWidth
                          required
        />
    }
}

export default EmailInput;