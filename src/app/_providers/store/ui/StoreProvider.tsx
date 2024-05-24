"use client"
import React, {FC, ReactNode} from 'react';
import {Provider} from "react-redux";
import {store} from "@/app/_providers/store/config/store";

type PropsWithChildren = { children?: ReactNode };

const StoreProvider:FC<PropsWithChildren> = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
export default StoreProvider;