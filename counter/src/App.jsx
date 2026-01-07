import { useState } from 'react';
import { log } from "./log.js";
import Header from './components/Header.jsx';
import Counter from './components/Counter/Counter.jsx';
import ConfigureCounter from './components/Counter/ConfigureCounter.jsx';
import './App.css';


function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount){
    setChosenCount(newCount);
    setChosenCount((prevChosenCount) => prevChosenCount + 1);
  }

  return (
    <>
      <Header/> 
      <main>
      <ConfigureCounter onSet={handleSetCount}/>
      <Counter key={chosenCount} initialCount={chosenCount}/>
      <Counter initialCount={0}/>
      </main>
    </>
  )
}

export default App
