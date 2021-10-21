import { combineReducers } from "redux";
import * as types from "./type";

// INITIAL GLOBAL STATE
const initialGlobalState = {
  isInitLoading: true,
};

// GLOBAL REDUCER
const globalReducer = (state = initialGlobalState, { type, payload }) => {
  switch (type) {
    case types.INITLOAD_DONE:
      return {
        ...state,
        isInitLoading: false,
      };
    default:
      return state;
  }
};

// COMBINED REDUCERS
const reducers = {
  global: globalReducer,
};

export default combineReducers(reducers);
