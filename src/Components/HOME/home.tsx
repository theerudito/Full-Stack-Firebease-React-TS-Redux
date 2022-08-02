import { useState } from "react";
import { Auth } from "../HELPERS/API-FIREBASE";
import { onAuthStateChanged } from "firebase/auth";
import { LogOut } from "../AUTH//LogOut";
import { ROUTER_APP } from "../ROUTER/ROUTER";
import { useNavigate, Link } from "react-router-dom";
import { MENU } from "../MENU/MENU";

export const HOME = () => {
  const [dataUser, setDataUser] = useState({});

  onAuthStateChanged(Auth, (currentUse: any) => {
    if (currentUse) {
      setDataUser(currentUse);
    }
  });

  return (
    <div className="containerHome">
      <MENU/>
      <h1>WELCOME: {dataUser?.displayName} </h1>

      <div className="containerDataUser">
        <img src={dataUser?.photoURL} alt="profile" />
        <LogOut />
      </div>

      <div className="containerButton">
        <Link to={ROUTER_APP.crud} className="Link">
          <button className="buttoData"> CRUD</button>
        </Link>

        <Link to={ROUTER_APP.users} className="Link">
          <button className="buttoData"> USERS</button>
        </Link>

        <Link to={ROUTER_APP.upload} className="Link">
          <button className="buttoData"> UPLOAD</button>
        </Link>
      </div>

      <div className="containerProyects">
        <div className="infoBody">
          <img
            src="https://placeimg.com/150/100/animals"
            alt="photo"
            className="photo"
          />
        </div>

        <div className="infoBody">
          <img
            src="https://placeimg.com/150/100/arch"
            alt="photo"
            className="photo"
          />
        </div>

        <div className="infoBody">
          <img
            src="https://placeimg.com/150/100/nature"
            alt="photo"
            className="photo"
          />
        </div>
      </div>
    </div>
  );
};
