import React from 'react';
import TextField from '@material-ui/core/TextField';

class NameInput extends React.Component {

    render() {

        const {preferredName,  onChange} = this.props;

        //Info for about the Preferred Name textfield
        return <TextField id="standard-name"
                          label="Preferred Name"
                          value={preferredName}
                          onChange={onChange}
                          margin="normal"
                          variant= 'outlined'
                          fullWidth
                          required
        />

    }
}

export default NameInput;
