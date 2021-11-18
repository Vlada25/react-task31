import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import styles from './styles.js';

const Counter = ({id, count, increment, decrement, reset}) => {
    return (
        <div style={styles.counter}>
            <h2 style={styles.counter.h2}>Counter {id}</h2>
            <div style={styles.counter.mainPart}>
                <h1 style={styles.counter.h1}>{count}</h1>
                <div style={styles.buttonsContainer}>
                    <Button variant="outlined" onClick={increment}>Increment</Button>
                    <Button variant="outlined" onClick={decrement}>Decrement</Button>
                    <Button variant="outlined" onClick={reset}>Reset</Button>
                </div>
            </div>
        </div>
    )
}

Counter.propTypes = {
    id: PropTypes.number.isRequired.bind,
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
}

export default Counter;