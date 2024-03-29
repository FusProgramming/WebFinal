import React from 'react';
import TextField from '@material-ui/core/TextField';

class StoreStateInput extends React.Component {

    render() {

        const { storeState,  onChange} = this.props;
        //Info for about the lastName textfield
        return <TextField id="standard-name"
                          label=" State"
                          value={storeState}
                          onChange={onChange}
                          margin="normal"
                          variant= 'outlined'
                          fullWidth
                          required
        />



    }
}

export default StoreStateInput;