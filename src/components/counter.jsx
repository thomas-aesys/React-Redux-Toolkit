import React from 'react'
import Button from './button';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../reducers/counterReducer';
import './counter.css'

const Counter = () => {
    const countSelector = state => state.counter
    const count = useSelector(countSelector)

    const dispatch = useDispatch()
    return (
        <div className="container_counter">
            <h1>Counter: {count}</h1>
            <Button className="button_flex" onClick={()=> dispatch(increment())}>+</Button>
            <Button className="button_flex" onClick={()=> dispatch(decrement())}>-</Button>
        </div>
    )
}

export default Counter;