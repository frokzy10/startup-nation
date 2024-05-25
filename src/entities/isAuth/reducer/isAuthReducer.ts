import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IIsAuth {
    isAuth:boolean,
    error:null
}

const initialState:IIsAuth = {
    isAuth: false,
    error: null
}

export const isAuthSlice = createSlice({
    name: "isAuth",
    initialState,
    reducers: {
        setIsAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
        }
    }
})

export const {setIsAuth} = isAuthSlice.actions;
export default isAuthSlice.reducer;