import { combineReducers } from "@reduxjs/toolkit";
import competitionsReducer from "./competitionsSlice";

const rootReducer = combineReducers({
  competitions: competitionsReducer,
});

export default rootReducer;
