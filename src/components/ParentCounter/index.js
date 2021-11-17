import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import styles from './styles.js';

function ParentCounter({add, remove}) {
    return (
        <div  style={styles.parentCounter}>
            <Button style={styles.button} variant="outlined" onClick={add}>Add new counter</Button>
            <Button style={styles.button} variant="outlined" onClick={remove}>Delete first counter</Button>
            <Button style={styles.button} variant="outlined">Return to the initial state</Button>
        </div>
    )
}

ParentCounter.propTypes = {
    add: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default ParentCounter;