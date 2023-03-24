import { useState } from 'react';
import { Button } from './components/Button';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  function changeCount(inc) {
    setCount(count + inc);
  }

  return (
    <div className="counter">
      <h1 className="counterCount">{count}</h1>
      <div className="counterButtons">
        <Button inc={-1} changeCount ={changeCount}>-1</Button>
        <Button inc={1} changeCount ={changeCount}>+1</Button>
        <Button inc={-10} changeCount ={changeCount}>-10</Button>
        <Button inc={10} changeCount ={changeCount}>+10</Button>
      </div>
    </div>
  )
}

export { Counter };