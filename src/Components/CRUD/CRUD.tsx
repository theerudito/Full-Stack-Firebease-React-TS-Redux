import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_DATA_FIREBASE } from "../HELPERS/FIREBASE_METHOD";
import { MENU } from "../MENU/MENU";
import { getDataFibase } from "../redux/slices";

export const CRUD = () => {
  const dispatch = useDispatch();

  const { crud = [] } = useSelector((store: any) => store.crud);

  const GET_FIREBASE = async () => {
    const data = await GET_DATA_FIREBASE();
    dispatch(getDataFibase(data));
  };

  useEffect(() => {
    GET_FIREBASE();
  }, []);

  return (
    <>
      <MENU />
      <form className="containerFormCrud">
        <input type="text" placeholder="NAME" />
        <input type="text" placeholder="AGE" />
        <button>CREATE</button>
      </form>
      <div className="containerTitlesCrud">
        <p>NAME</p>
        <p>AGE</p>
        <p>ACTION</p>
      </div>
  

      <ul className="containerUlCrud">
        {crud.map((item: any) => (
          <>
          
            <li key={item.id} className="containerCrud">
              {item.name}
            </li>
            <li key={item.id} className="containerCrud">
              {item.age}
            </li>
            <li>
              <button className="buttonCrudUpdate">
                <i className="fa-solid fa-arrows-rotate"></i>
              </button>
              <button className="buttonCrudDelete">
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </li>
          </>
        ))}
      </ul>
    </>
  );
};
