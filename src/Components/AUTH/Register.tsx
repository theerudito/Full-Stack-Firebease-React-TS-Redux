import { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { Auth } from "../HELPERS/API-FIREBASE";

export const Register = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dataUser, setDataUser] = useState({});

  const userRef = useRef<String>();
  const emailRef = useRef();
  const passwordRef = useRef();

  onAuthStateChanged(Auth, (currentUser) => {
    if (currentUser) {
      setDataUser(currentUser);
    }
  });

  const register = async (e: any) => {
    e.preventDefault();
    try {
      const data = await createUserWithEmailAndPassword(Auth, email, password);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={register}>
        <p>Register</p>
        <input
          type="text"
          placeholder="User"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
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
        <button type="submit">Register</button>
      </form>
      {dataUser?.email}
    </>
  );
};
