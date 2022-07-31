import { collection, getDocs } from "firebase/firestore";
import { dbFirebase } from "./API-FIREBASE";

export const GET_DATA_FIREBASE = async () => {
  try {
    const userDoc: any = collection(dbFirebase, "users");
    const data = await getDocs(userDoc);
    const info = data.docs.map((doc: any) => ({...doc.data(), id: doc.id}));
    return info;
  } catch (error) {
    console.log(error);
  }
};
