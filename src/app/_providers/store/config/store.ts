"use client";
import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "@/entities/Counter/reducer/Counter";

const rootReducer = combineReducers({
    counter: counterReducer,
})
const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export {store}