import { createSlice } from "@reduxjs/toolkit";


interface Counter {
    id: number,
    value: number
}



const initialState: Counter[] = [
    {
        id: 1,
        value: 0
    },
    {
        id: 2,
        value: 0
    }
]


const countersSlice = createSlice({
    name: 'counters',
    initialState,
    reducers: {
        increment: (state, action) => {
            const counterIndex = state.findIndex(c => c.id == action.payload);
            state[counterIndex].value++;
        },
        decrement: (state, action) => {
            const counterIndex = state.findIndex(c => c.id == action.payload);
            state[counterIndex].value--;
        }
    }
})


export default countersSlice.reducer;

export const {increment, decrement} = countersSlice.actions;