import React from "react";
import { Route, Routes } from "react-router-dom";
import { HOME } from "../HOME/home";
import { PAGE_INDEX } from "../INDEX";

export const ROUTER_APP = {
  index: "/",
  home: "/home",
  crud: "/crud",
  
};

export const ROUTER = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTER_APP.index} element={<PAGE_INDEX />} />
        <Route path={ROUTER_APP.home} element={<HOME />} />
      </Routes>
    </>
  );
};
