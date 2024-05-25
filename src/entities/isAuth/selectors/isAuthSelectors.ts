import {RootState} from "@/app/_providers/store/config/store";
import {createSelector} from "reselect";

const getIsAuthState = (state:RootState) => state.auth;


const getIsAuth = createSelector(
    getIsAuthState,
    (state) => state.isAuth
)

export const isAuthSelectors = {
    getIsAuth,
    getIsAuthState
}