import { configureStore } from "@reduxjs/toolkit";
import REDUCERS from "../REDUCERS";

export const store = configureStore({
  reducer: {
    data: REDUCERS,
  },
});
