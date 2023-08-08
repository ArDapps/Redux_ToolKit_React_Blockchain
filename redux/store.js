import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./cakeSlice";

const store = configureStore({
  cake: cakeReducer,
});
export default store;
