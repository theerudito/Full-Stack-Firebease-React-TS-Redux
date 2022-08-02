import { useSelector } from "react-redux";
import { Login } from "../AUTH/Login";
import { Register } from "../AUTH/Register";
import { RegisterByGoogle } from "../AUTH/RegisterByGoogle";

export const PAGE_INDEX = () => {
  const { login } = useSelector((store: any) => store.crud);

  return (
    <div className="containerIndex">
      <div className="containerBody">
        <RegisterByGoogle />

        <p className="or">- OR -</p>

        {login ? <Register /> : <Login />}
      </div>
    </div>
  );
};
