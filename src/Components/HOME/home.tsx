import { useState } from "react";
import { Auth } from "../HELPERS/API-FIREBASE";
import { onAuthStateChanged } from "firebase/auth";
import { LogOut } from "../AUTH//LogOut";
import { PORSTDATA } from "../HELPERS/POST";

export const HOME = () => {
  const [dataUser, setDataUser] = useState({});

  onAuthStateChanged(Auth, (currentUse) => {
    if (currentUse) {
      setDataUser(currentUse);
    }
  });

  return (
    <div className="containerHome">
      <h1>WELCOME: {dataUser?.displayName} </h1>
      <div className="containerDataUser">
        <img src={dataUser?.photoURL} alt="profile" />
        <LogOut />
      </div>

      <div className="containerProyects">
        {PORSTDATA.map((data) => (
          <div key={data.id}>
            <div className="infoBody">
              <img src={data.img} alt="photo" className="photo" />

              <button className="buttoData">{data.title} </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
