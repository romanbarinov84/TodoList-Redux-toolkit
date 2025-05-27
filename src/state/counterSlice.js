import { createSlice } from "@reduxjs/toolkit";


const initialState = {  //начальное состояние счетчика
    count: 0,
};

const counterSlice = createSlice({
    name: "Counter",
    initialState,
    reducers:{          //функции для обновления состояния счетчика
       increment: (state) => {
         state.count++            //state.count это предидущее значение
       },

       decrement: (state) => {
        state.count--
       },

       incrByAmount: (state,actions) => {
         state.count += actions.payload
       },

       decrByAmount: (state, actions) => {
          state.count -= actions.payload
       }
    }
})

export const counterReducer = counterSlice.reducer;
export const {increment,decrement,incrByAmount,decrByAmount} = counterSlice.actions;