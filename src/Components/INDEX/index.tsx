import React from "react";
import { Login } from "../AUTH/Login";
import { LogOut } from "../AUTH/LogOut";
import { Register } from "../AUTH/Register";
import { RegisterByGoogle } from "../AUTH/RegisterByGoogle";

export const PAGE_INDEX = () => {
  return (
    <>
      <RegisterByGoogle />
      <br />
      <Register />
      <br />
      <Login />

      <LogOut />
    </>
  );
};
