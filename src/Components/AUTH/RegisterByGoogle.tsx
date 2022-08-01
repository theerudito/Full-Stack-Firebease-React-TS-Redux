import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { Auth } from "../HELPERS/API-FIREBASE";

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
  const loginByGoogle = async (e: any) => {
    e.preventDefault();
    signInWithGoogle();
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button type="submit" className="google" onClick={loginByGoogle}>
        Sign up with Google
      </button>

      <img src={localStorage.getItem("photo")} alt="" />
    </>
  );
};
