import React from 'react';
import TextField from '@material-ui/core/TextField';

class StoreNameInput extends React.Component {

    render() {

        const { storeName,  onChange} = this.props;
        //Info for about the lastName textfield
        return <TextField id="standard-name"
                          label="Store Name"
                          value={storeName}
                          onChange={onChange}
                          margin="normal"
                          variant= 'outlined'
                          fullWidth
                          required
        />



    }
}

export default StoreNameInput;