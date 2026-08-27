import React from 'react'
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [prevCount, setPrevCount] = useState(0);
    const [step, setStep] = useState(1);

    const increment = () => {
       

        if(count + step <= 10){
             setPrevCount(count)
            setCount(count + step);
        }
    } 
    const decrement = () => {
        
        if(count - step >= 0){
            setPrevCount(count)
            setCount(count - step)
        }
    } 
   const reset = () => {
    if (count !== 0) {
        setPrevCount(count);
        setCount(0);
    }
}
    
  return (
    <div>
          <h1>React Counter App</h1>
          <div className="container">{count}</div>
          <input type="text" placeholder='Step : [5]' onChange={(e) => {
            setStep(Number(e.target.value));
          }} />
          <button id='btn1' onClick={decrement}>-</button>
          <button id='btn2' onClick={reset}>Reset</button>
          <button id='btn3' onClick={increment}>+</button>
                    <p >Counter changed from {prevCount} to {count}</p>
    </div>
   
  )
}

export default Counter;