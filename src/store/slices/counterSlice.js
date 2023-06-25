import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    counter: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment: (state) => {
            state.counter += 1;
          },
          decrement: (state) => {
            state.counter -= 1;
          },
          incrementByAmount: (state, action) => {
            state.counter += action.payload;
          },
          reset: (state) => {
            state.counter = 0;
          }
    }
})

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions

export default counterSlice.reducer