import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Counter from '../components/Counter/index'

class CounterContainer extends Component {
    constructor (props){
        super(props);

        this.state = {
            id: props.id,
            count: props.count,
            isRender: true
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
        console.log("componentDidMount", this.state.id)
    }

    componentDidUpdate() {
        console.log("componentDidUpdate", this.state.id)
    }

    componentWillUnmount() {
        console.log("componentWillUnmount", this.state.id)
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillRecieveProps", this.state.id)
        if (nextProps.isAdded){
            if (this.state.count % 2 === 0)
            {
                this.increment()
                this.setState({
                    isRender: true
                })
            }
            else {
                this.setState({
                    isRender: false
                })
            }
        }
        else {
            if (this.state.count % 2 === 1){
                this.decrement()
                this.setState({
                    isRender: true
                })
            }
            else{
                this.setState({
                    isRender: false
                })
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate", this.state.id)
        if (!this.state.isRender){
            return false
        }
        return true
    }

    render() {
        console.log("render", this.state.id)
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