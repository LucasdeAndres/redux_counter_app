import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { incrementByAmount } from '../../store/slices/counterSlice'
import { Button } from '../button/Button'

export const AddAmount = () => {

    const dispatch = useDispatch()

    const[payload, setPayload] = useState(0)

    const handleValue = (e) => {
        setPayload(e.target.value)
    }

    const handleAddAmount = () => {
        dispatch(incrementByAmount(Number(payload)))
    }


  return (
    <section>
        <input 
         type="number"
        value={payload}
        onChange={handleValue}
        ></input>
        <Button text="Add" funcion={handleAddAmount}></Button>
    </section>
  )
}
