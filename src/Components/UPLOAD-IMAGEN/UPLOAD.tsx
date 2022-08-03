import { useEffect, useState } from "react";
import { Storage } from "../HELPERS/API-FIREBASE";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { MENU } from "../MENU/MENU";

export const UPLOAD = () => {
  const [imageUpLoad, setImageUpLoad] = useState<any>(null);
  const [imageUrl, setImageUrl] = useState<[]>([]);
  const generateId = Math.random().toFixed(3);

  const imageListRef = ref(Storage, "images/");

  const upLoadFirebase = (e: any) => {
    e.preventDefault();
    if (imageUpLoad == null) return;

    const imageRef = ref(Storage, `images/${imageUpLoad.name + generateId}`);

    uploadBytes(imageRef, imageUpLoad)
      .then(() => {
        alert("Imagen subida correctamente");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrl((imageUrl) => [...imageUrl, url]);
        });
      });
    });
  }, []);

  return (
    <>
      <MENU />
      <p className="TitleUpload">UPLOAD</p>
      <div className="containerUpload">
        <form className="formUpLoad">
          <input type="text" placeholder="NAME" />
          <input type="text" placeholder="MARC" />
          <input type="text" placeholder="DESCRIPTION" />
          
          <input
            type="file"
            name="choose_file"
            className="inputUpload"
            onChange={(e) => setImageUpLoad(e.target.files[0])}
          />
          <button onClick={upLoadFirebase}>UPLOAD IMAGE</button>
        </form>
      </div>

      {/* {imageUrl.map((url: string, index) => {
        return <img src={url} alt="img" className="imageUploadPrev" key={index} />;
      })} */}
    </>
  );
};
