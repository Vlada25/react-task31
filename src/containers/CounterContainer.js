import React from 'react'
// { useEffect }
import PropTypes from 'prop-types';
import Counter from '../components/Counter/index'

const CounterContainer = (props) => {
    const [id] = React.useState(props.id)
    const [count, setCount] = React.useState(props.count)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

    /* Аналогично componentDidMount и componentDidUpdate:
    useEffect(() => {
        console.log("componentDidMount, componentDidUpdate", id)
    });

    componentWillUnmount() {
        console.log("componentWillUnmount", this.state.id)
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillRecieveProps", this.state.id)
        if (nextProps.isAdded && this.state.count % 2 === 0){
            this.increment()
        }
        else if (nextProps.isAdded && this.state.count % 2 !== 0) {
            this.decrement()
        }
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate", this.state.id)
        return true
    }
*/
    return (
        <Counter 
            id={id}
            count={count} 
            increment={increment}
            decrement={decrement}
            reset={reset}/>
    )
}

CounterContainer.propTypes = {
    id: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired
}

export default CounterContainer