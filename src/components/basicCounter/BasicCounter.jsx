import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../../store/slices/counterSlice'
import { Button } from '../button/Button'

export const BasicCounter = () => {

    const counterState = useSelector(select => select.counter.counter)

    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(increment())
    }

    const handleDecrement = () => {
        dispatch(decrement())
    }

    const handleReset = () => {
        dispatch(reset())
    }


  return (
    <section>
        <h2>{counterState}</h2>
        <Button text="+" funcion={handleIncrement}/>
        <Button text="-" funcion={handleDecrement}/>
        <Button text="Reset" funcion={handleReset}/>
    </section>
  )
}
