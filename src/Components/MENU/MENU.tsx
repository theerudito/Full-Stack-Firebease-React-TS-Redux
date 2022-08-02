import React from "react";
import { Link } from "react-router-dom";
import { ROUTER_APP } from "../ROUTER/ROUTER";

export const MENU = () => {
  return (
    <div className="menuApp">
      <Link to={ROUTER_APP.home} className="Link">
        <p className="menuTitle">HOME</p>
      </Link>

      <Link to={ROUTER_APP.crud} className="Link">
        <p className="menuTitle">CRUD</p>
      </Link>

      <Link to={ROUTER_APP.store} className="Link">
        <p className="menuTitle">STORE</p>
      </Link>

      <Link to={ROUTER_APP.users} className="Link">
        <p className="menuTitle">USER</p>
      </Link>

      <Link to={ROUTER_APP.upload} className="Link">
        <p className="menuTitle">UPLOAD</p>
      </Link>
    </div>
  );
};
