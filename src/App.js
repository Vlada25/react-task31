import React from "react";
import CounterContainer from "./containers/CounterContainer";
import ParentCounter from "./components/ParentCounter";

const App = () => {
  const [counters, setCounters] = React.useState([
    { id: 1, count: 0},
  ])

  const [isAdded, setIsAdded] = React.useState(false)

  const addCounter = () => {
    setIsAdded(true)

    setCounters([
      ...counters,
      {
        id: counters.length + 1,
        count: 0
      }
    ])
  }

  const removeLastCounter = () => {
    if (counters.length > 1){
      setIsAdded(false)
      setCounters(counters.slice(0, -1))
    }
  }

  return (
    <div>
      <ParentCounter 
        add={addCounter} 
        remove={removeLastCounter}/>
      <div className="counter-container">
        {counters.map(counter => {
          return <CounterContainer 
            key={counter.id}
            id={counter.id}
            count={counter.count}
            isAdded={isAdded}/>
        })}
      </div>
    </div>
  );
}

export default App;
