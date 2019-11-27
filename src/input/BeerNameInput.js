import React from 'react';
import TextField from '@material-ui/core/TextField';

class BeerNameInput extends React.Component {

    render() {

        const { beerName,  onChange} = this.props;
        //Info for about the lastName textfield
        return <TextField id="standard-name"
                          label="Beer Name"
                          value={beerName}
                          onChange={onChange}
                          margin="normal"
                          variant= 'outlined'
                          fullWidth
                          required
        />

    }
}

export default BeerNameInput;