import React from 'react';
import TextField from '@material-ui/core/TextField';

class BeerTypeInput extends React.Component {

    render() {

        const { beerType,  onChange} = this.props;
        //Info for about the lastName textfield
        return <TextField id="standard-name"
                          label="Beer Type"
                          value={beerType}
                          onChange={onChange}
                          margin="normal"
                          variant= 'outlined'
                          fullWidth
                          required
        />



    }
}

export default BeerTypeInput;