import React, { Component } from 'react'
import Counter from '../components/Counter/ingex'

export default class CounterContainer extends Component {
    constructor (props){
        super(props);

        this.state = {
            count: 0
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
                count={this.state.count} 
                increment={this.increment}
                decrement={this.decrement}
                reset={this.reset}>
            </Counter>
        )
    }
}
