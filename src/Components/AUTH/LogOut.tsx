import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Auth } from "../HELPERS/API-FIREBASE";

export const LogOut = () => {
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(Auth);
    navigate("/");
  };

  return (
    <>
      <button onClick={logout}>Logout</button>
    </>
  );
};
