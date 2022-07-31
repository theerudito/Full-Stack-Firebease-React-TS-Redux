import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_DATA_FIREBASE } from "./HELPERS/FIREBASE_METHOD";

export const DATA_FIREBASE = () => {
  const dispatch = useDispatch();

  const infor = useSelector((store: any) => store.data.result.data);

  const getDataFirebase = async () => {
    return await GET_DATA_FIREBASE();
  };

  useEffect(() => {
    getDataFirebase().then((data: any) => {
      dispatch({
        type: "GET_FIREBASE",
        payload: data,
      });
    });
  }, []);

  return (
    <>
      {infor.map((item: any) => (
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
