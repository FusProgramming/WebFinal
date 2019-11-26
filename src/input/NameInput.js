import React from 'react';
import TextField from '@material-ui/core/TextField';

class NameInput extends React.Component {

    render() {

        const {firstName,  onChange} = this.props;
        //Info for about the FirstName textfield
        return <TextField id="standard-name"
                          label="First Name"
                          value={firstName}
                          onChange={onChange}
                          margin="normal"
                          variant= 'outlined'
                          fullWidth
                          required
        />


    }
}

export default NameInput;