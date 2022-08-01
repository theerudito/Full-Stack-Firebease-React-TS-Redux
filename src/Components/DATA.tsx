import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_DATA_FIREBASE } from "./HELPERS/FIREBASE_METHOD";
import { getDataFibase } from "./redux/slices";

export const DATA_FIREBASE = () => {
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
      {crud.map((item: any) => (
        <div key={item.id}>
          <p>
            {item.name} - {item.age}
            <button>
              <i className="fa-solid fa-arrows-rotate"></i>
            </button>
            <button>
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </p>
        </div>
      ))}
    </>
  );
};
