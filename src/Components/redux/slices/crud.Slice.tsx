import { createSlice } from "@reduxjs/toolkit";

export const crudSlice = createSlice({
  name: "crud",
  initialState: {
    crud: [],
  },
  reducers: {
    getDataFibase: (state: any, action: any) => {
      state.crud = action.payload;
    },
  },
});

export const { getDataFibase } = crudSlice.actions;
