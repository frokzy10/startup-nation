import {RootState} from "@/app/_providers/store/config/store";

const getCounterState = (state:RootState) => state.counter.count;
export const CounterSelectors = {
    getCounterState
};