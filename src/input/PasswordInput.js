import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const styles = theme => ({});

class PasswordInput extends React.Component {

    render() {

        const {password, onChange} = this.props;
        //Info for about the password textfield
        return <TextField id="standard-name"
                          label="Password"
                          value={password}
                          onChange={onChange}
                          margin="normal"
                          variant= 'outlined'
                          fullWidth
                          required
                          type="password"{...this.props}
        />
    }
}
PasswordInput.propTypes = {
    classes: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.func.isRequired,
};

PasswordInput = withStyles(styles)(PasswordInput);

export default PasswordInput;