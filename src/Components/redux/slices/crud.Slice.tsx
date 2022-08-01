import { createSlice } from "@reduxjs/toolkit";

export const crudSlice = createSlice({
  name: "crud",
  initialState: {
    crud: [],
    login: true,
    register: false,
  },
  reducers: {
    getDataFibase: (state: any, action: any) => {
      state.crud = action.payload;
    },
    goLogin: (state: any, action: any) => {
      state.login = action.payload;
      state.register = false;
    },
    goRegister: (state: any, action: any) => {
      state.register = action.payload;
      state.login = true;
    },
  },
});

export const { getDataFibase, goLogin, goRegister } = crudSlice.actions;
