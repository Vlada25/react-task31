import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Counter from '../components/Counter/index'

class CounterContainer extends Component {
    constructor ({id, count}){
        super({id, count});

        this.state = {
            id: id,
            count: count
        };
    }

    increment = () => {
        this.setState(state => ({
            count: state.count + 1
        }))
    }

    decrement = () => {
        this.setState(state => ({
            count: state.count - 1
        }))
    }

    reset = () => {
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
                reset={this.reset}/>
        )
    }
}

CounterContainer.propTypes = {
    id: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired
}

export default CounterContainer