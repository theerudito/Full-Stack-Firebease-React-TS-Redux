import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { Auth } from "../HELPERS/API-FIREBASE";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";

// for gemail
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(Auth, provider)
    .then((result) => {
      console.log(result);
      const name = result.user.displayName;
      const email = result.user.email;
      const photo = result.user.photoURL;

      localStorage.setItem("name", name || "");
      localStorage.setItem("email", email || "");
      localStorage.setItem("photo", photo || "");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const RegisterByGoogle = () => {
  const navigate = useNavigate();
  const loginByGoogle = async (e: any) => {
    e.preventDefault();
    signInWithGoogle();

    try {
    } catch (error) {
      console.log(error);
    }
    navigate("/home");
  };

  return (
    <div className="botton_google">
      <GoogleButton onClick={loginByGoogle} />
    </div>
  );
};
