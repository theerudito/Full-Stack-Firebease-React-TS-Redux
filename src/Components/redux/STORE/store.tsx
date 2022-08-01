import { configureStore } from "@reduxjs/toolkit";
import { crudSlice } from "../slices";

export const store = configureStore({
  reducer: {
    crud: crudSlice.reducer,
  },
});
