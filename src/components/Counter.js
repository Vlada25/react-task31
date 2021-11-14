import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

function Counter({count, increment, decrement, reset}) {
    return (
        <div className="counter">
            <h2>My Counter</h2>
            <h1>{count}</h1>
            <div className="buttons">
                <Button variant="outlined" onClick={increment}>Increment</Button>
                <Button variant="outlined" onClick={decrement}>Decrement</Button>
                <Button variant="outlined" onClick={reset}>Reset</Button>
            </div>
        </div>
    )
}

Counter.propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
}

export default Counter;