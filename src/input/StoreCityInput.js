import React from 'react';
import TextField from '@material-ui/core/TextField';

class StoreCityInput extends React.Component {

    render() {

        const { storeCity,  onChange} = this.props;
        //Info for about the lastName textfield
        return <TextField id="standard-name"
                          label="Store City"
                          value={storeCity}
                          onChange={onChange}
                          margin="normal"
                          variant= 'outlined'
                          fullWidth
                          required
        />



    }
}

export default StoreCityInput;