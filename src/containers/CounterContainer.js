import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Counter from '../components/Counter/index'

class CounterContainer extends Component {
    constructor (props){
        super(props);

        this.state = {
            id: props.id,
            count: props.count
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

    componentDidMount() {
        console.log("componentDidMount")
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    // getDerivedStateFromProps

    // shouldComponentUpdate

    // UNSAFE_componentWillRecieveProps

    // getSnapshotBeforeUpdate

    render() {
        console.log("render")
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