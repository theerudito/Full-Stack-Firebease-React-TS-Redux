import React from "react";
import { Login } from "../AUTH/Login";
import { LogOut } from "../AUTH/LogOut";
import { Register } from "../AUTH/Register";
import { RegisterByGoogle } from "../AUTH/RegisterByGoogle";
import { UPLOAD_FIREBASE } from "../UPLOAD-IMAGEN/UPLOAD";

export const PAGE_INDEX = () => {
  return (
    <>
      <RegisterByGoogle />
      <br />
      <UPLOAD_FIREBASE/>
      <br />
      <Register />
      <br />
      <Login />

      <LogOut />
    </>
  );
};
