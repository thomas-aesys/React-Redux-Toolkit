import React from 'react'
import Button from './button';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../slices/counterReducer';

const Counter = () => {
    const countSelector = state => state.counter
    const count = useSelector(countSelector)

    const dispatch = useDispatch()
    return (
        <div>
            <h1>Counter: {count}</h1>
            <Button onClick={()=> dispatch(increment())}>+</Button>
            <Button onClick={()=> dispatch(decrement())}>-</Button>
        </div>
    )
}

export default Counter;