import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface ICountSchema {
    count: number
}

const initialState: ICountSchema = {
    count: 0
}

const countSlice = createSlice({
    name: "counterReducer",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.count += action.payload
        },
    },
});

export const {increment,decrement,incrementByAmount} = countSlice.actions;

export default countSlice.reducer