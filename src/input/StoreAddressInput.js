import React from 'react';
import TextField from '@material-ui/core/TextField';

class StoreAddressInput extends React.Component {

    render() {

        const { storeAddress,  onChange} = this.props;
        //Info for about the lastName textfield
        return <TextField id="standard-name"
                          label="Store Address"
                          value={storeAddress}
                          onChange={onChange}
                          margin="normal"
                          variant= 'outlined'
                          fullWidth
                          required
        />



    }
}

export default StoreAddressInput;