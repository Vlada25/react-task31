import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import styles from './styles.js';

const ParentCounter = (props) => {
    return (
        <div  style={styles.parentCounter}>
            <Button style={styles.button} variant="outlined" onClick={props.add}>Add new counter</Button>
            <Button style={styles.button} variant="outlined" onClick={props.remove}>Delete first counter</Button>
            <Button style={styles.button} variant="outlined" onClick={() => window.location.reload()}>Return to the initial state</Button>
        </div>
    )
}

ParentCounter.propTypes = {
    add: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default ParentCounter;