import { combineReducers } from "@reduxjs/toolkit";
import competitionsReducer from "./competitionsSlice";
import sportsReducer from "./sportsSlice";

const rootReducer = combineReducers({
  competitions: competitionsReducer,
  sports: sportsReducer,
});

export default rootReducer;
