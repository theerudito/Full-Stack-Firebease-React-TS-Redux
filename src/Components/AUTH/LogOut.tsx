import { signOut } from "firebase/auth";
import { Auth } from "../HELPERS/API-FIREBASE";

export const LogOut = () => {

  
  const logout = async () => {
    await signOut(Auth);
  };

  return (
    <>
      <button onClick={logout}>LogOut</button>
    </>
  );
};
