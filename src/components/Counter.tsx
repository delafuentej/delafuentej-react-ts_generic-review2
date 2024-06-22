import { useState } from 'react'

export const Counter = () => {
    const [counter, setCounter]= useState(0);

    const increment=(num:number): void=>{
        setCounter(prevCounter => prevCounter + num);
    };

    const decrement=(num: number)=>{
        setCounter(prevCounter => prevCounter - num);
    };
    const reset=()=>{
        setCounter(0);
    };


  return (
    <>
        <h3 className="mt-5">Counter : {counter}</h3>
        <br/>
        <button 
        onClick={()=>increment(1)}
        className='btn btn-outline-success'>Increment +1
        </button>
        <button 
        onClick={()=>increment(2)}
        className='btn btn-outline-success'>Increment +2
        </button>
        <button 
        onClick={()=>decrement(1)}
        className='btn btn-outline-warning'>Decrement -1
        </button>
        <button 
        onClick={()=>decrement(2)}
        className='btn btn-outline-warning'>Decrement -2
        </button>
        <button 
        onClick={reset}
        className='btn btn-outline-danger'>Reset
        </button>
    </>
  )
}
