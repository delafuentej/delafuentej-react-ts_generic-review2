import React, { useReducer } from 'react'



const initialState = {
    counter: 0,
};

type ActionType = 
    | {type: 'increment' }
    | {type:  'decrement'}
    | {type: 'reset'}
    | {type: 'custom', payload: number}
;

const counterReducer = (state: typeof initialState, action: ActionType)=> {
    switch(action.type){
        case 'increment':
            return {
                ...state,
                counter: state.counter + 1,
            };
            
            
        case 'decrement':
            return {
                ...state,
                counter: state.counter -1,
            };
        case 'reset':
            return {
                ...state,
                counter: 0,
            };
        case 'custom':
            return {
                ...state,
                counter: action.payload,
            };

            
        default:
            return state;
    }
}
export const RedCounter = () => {
    //{counter} = counterReducer
    const[{counter}, dispatch]= useReducer(counterReducer,initialState)
  return (
    <div>
        <h3 className='mt-3'>UseReducer</h3>
        {/* {counter} = counterReducer.counter */}
        <h5>RedCounter: {counter}</h5>
        <button
            className='btn btn-outline-success'
            onClick={()=> dispatch({type: 'increment'})}
        >
            Increment +1
        </button>
        <button
            className='btn btn-outline-warning'
            onClick={()=> dispatch({type: 'decrement'})}
        >
            Decrement -1
        </button>
        <button
            className='btn btn-outline-danger'
            onClick={()=> dispatch({type: 'reset'})}
        >
            Reset
        </button>
        <button
            className='btn btn-outline-primary'
            onClick={()=> dispatch({type: 'custom', payload: 100})}
        >
            Custom 100
        </button>
       
    </div>
  )
}
