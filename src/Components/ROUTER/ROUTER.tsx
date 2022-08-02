import React from "react";
import { Route, Routes } from "react-router-dom";
import { CRUD } from "../CRUD/CRUD";
import { HOME } from "../HOME/home";
import { PAGE_INDEX } from "../INDEX";
import { STORE } from "../STORE/STORE";
import { UPLOAD } from "../UPLOAD-IMAGEN/UPLOAD";
import { USER } from "../USER/USER";
import { PAGE404 } from "./PAGE404";

export const ROUTER_APP = {
  index: "/",
  home: "/home",
  crud: "/crud",
  users: "/users",
  upload: "/upload",
  store: "/store",
};

export const ROUTER = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTER_APP.index} element={<PAGE_INDEX />} />
        <Route path={ROUTER_APP.home} element={<HOME />} />
        <Route path={ROUTER_APP.crud} element={<CRUD />} />
        <Route path={ROUTER_APP.users} element={<USER />} />
        <Route path={ROUTER_APP.upload} element={<UPLOAD />} />
        <Route path={ROUTER_APP.store} element={<STORE />} />
        <Route path="*" element={<PAGE404 />} />
      </Routes>
    </>
  );
};
