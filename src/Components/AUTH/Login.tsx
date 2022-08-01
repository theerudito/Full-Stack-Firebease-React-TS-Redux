import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Auth } from "../HELPERS/API-FIREBASE";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginFirebase = async (e: any) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(Auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
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
        <button onClick={LoginFirebase}>Login</button>
      </form>
    </>
  );
};
