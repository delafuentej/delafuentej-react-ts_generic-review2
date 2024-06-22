import React, { useState } from 'react'
import { Timer } from './Timer'

export const TimerFather = () => {
    const[miliseconds, setMiliseconds]= useState(1000)
  return (
    <div className='mt-5'>
        <h3>useEffect- useRef</h3>
        <span>Miliseconds {miliseconds}</span>
        <br/>
        <button 
            className='btn btn-outline-success'
            onClick={()=> setMiliseconds(1000)}
            >
            1000
        </button>
        <button 
            className='btn btn-outline-success'
            onClick={()=> setMiliseconds(2000)}
            >
            2000
        </button>
        <button 
            className='btn btn-outline-success'
            onClick={()=> setMiliseconds(3000)}
            >
            3000
        </button>
        <button 
            className='btn btn-outline-success'
            onClick={()=> setMiliseconds(4000)}
            >
            4000
        </button>
        <button 
            className='btn btn-outline-success'
            onClick={()=> setMiliseconds(5000)}
            >
            5000
        </button>
        <Timer miliseconds={miliseconds}/>


    </div>
  )
}
