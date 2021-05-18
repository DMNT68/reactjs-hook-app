import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter();

    return (
        <>
            <h1>Counter with hook: { state }</h1>
            <hr/>

            <button onClick={ () => increment(2) } className="btn btn-primary me-2"> +1 </button>   
            <button onClick={ () => decrement(2) } className="btn btn-secondary me-2"> -1 </button>   
            <button onClick={ reset } className="btn btn-light"> Reset </button>   
        </>
    )
}
