import { useSelector } from "react-redux";
import { Login } from "../AUTH/Login";
import { Register } from "../AUTH/Register";
import { RegisterByGoogle } from "../AUTH/RegisterByGoogle";

export const PAGE_INDEX = () => {
  const { login } = useSelector((store: any) => store.crud);

  return (
    <div className="containerIndex">
      <RegisterByGoogle />
      <br />
      <p>- OR -</p>
      <br />

      {login ? <Register /> : <Login />}
    </div>
  );
};
