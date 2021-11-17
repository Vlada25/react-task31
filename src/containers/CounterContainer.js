import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Counter from '../components/Counter/ingex'

class CounterContainer extends Component {
    constructor ({id, count}){
        super({id, count});

        this.state = {
            id: id,
            count: count
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment() {
        this.setState(state => ({
            count: state.count + 1
        }))
    }

    decrement(){
        this.setState(state => ({
            count: state.count - 1
        }))
    }

    reset() {
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <Counter 
                id={this.state.id}
                count={this.state.count} 
                increment={this.increment}
                decrement={this.decrement}
                reset={this.reset}>
            </Counter>
        )
    }
}

CounterContainer.propTypes = {
    id: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired
}

export default CounterContainer