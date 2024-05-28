"use client";
import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "@/entities/Counter/reducer/Counter";
import isAuthReducer from "@/entities/isAuth/reducer/isAuthReducer";
import {citiesApi} from "@/entities/getCitiesData/reducer/getCitiesReducer";
import {countriesApi} from "@/entities/getCountriesData/reducer/getCountriesData";
import {productApi} from "@/entities/getProductData/reducer/productReducer";


const rootReducer = combineReducers({
    counter: counterReducer,
    auth: isAuthReducer,
    [citiesApi.reducerPath]: citiesApi.reducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
    [productApi.reducerPath]:productApi.reducer,
})
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(citiesApi.middleware)
            .concat(countriesApi.middleware)
            .concat(productApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export {store}