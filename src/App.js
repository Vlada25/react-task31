import React from "react";
import CounterContainer from "./containers/CounterContainer";
import ParentCounter from "./components/ParentCounter";

function App() {
  const [counters, setCounters] = React.useState([
    { id: 1, count: 0},
  ])

  function addCounter() {
    setCounters([
      ...counters,
      {
        id: counters.length + 1,
        count: 0
      }
    ])
  }

  function removeLastCounter() {
    if (counters.length > 1){
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
            count={counter.count}/>
        })}
      </div>
    </div>
  );
}

export default App;
