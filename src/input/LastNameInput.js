import React from 'react';
import TextField from '@material-ui/core/TextField';

class NameInput extends React.Component {

    render() {

        const { lastName,  onChange} = this.props;
        //Info for about the lastName textfield
        return <TextField id="standard-name"
                          label="Last Name"
                          value={lastName}
                          onChange={onChange}
                          margin="normal"
                          variant= 'outlined'
                          fullWidth
                          required
        />



    }
}

export default NameInput;