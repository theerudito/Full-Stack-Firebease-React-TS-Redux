import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Auth } from "../HELPERS/API-FIREBASE";
import { goRegister } from "../redux/slices";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispach = useDispatch();
  const navigate = useNavigate();

  const LoginFirebase = async (e: any) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(Auth, email, password);

      console.log(user);
    } catch (error) {
      console.log(error);
    }
    navigate("/home");
  };

  return (
    <>
      <form>
        <p>Login</p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Pasword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={LoginFirebase}>
          Login
        </button>
        <button
          type="submit"
          onClick={(e) => dispach(goRegister(false), e.preventDefault())}
        >
          Register
        </button>
      </form>
    </>
  );
};
