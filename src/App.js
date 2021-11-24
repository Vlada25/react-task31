import React from 'react';
import CounterContainer from "./containers/CounterContainer";
import ParentCounter from "./components/ParentCounter";
import AboutUs from "./components/AboutUs";
import { Tabs, Tab } from '@mui/material'
import { BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom';


const App = () => {
  const [counters, setCounters] = React.useState([
    { id: 1, count: 0},
  ])

  const [isAdded, setIsAdded] = React.useState(false)

  const routes = ['/about', '/counters']

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
      <BrowserRouter>
      <div className="App">
        <Switch>
        <Route
          path="/"
          component={({ location }) => (
            <div>
              <Tabs value={location.pathname}>
                <Tab label="About us" value={routes[0]} component={Link} to={routes[0]} />
                <Tab label="Counters" value={routes[1]} component={Link} to={routes[1]} />
              </Tabs>
              <Switch>
                <Route path="/about" component={AboutUs} />
                <Route path="/counters" component={() => 
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
                </div>} />
                <Route path="/404" component={() => <div>404</div>} />
                <Redirect to="/404"/>
              </Switch>
            </div>
          )}
        />
        
        </Switch>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
