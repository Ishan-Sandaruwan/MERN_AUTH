import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase.js";
export default function Profile() {
  const fileRef = useRef(null);
  const { currentUser } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [filePerc, SetFilePerc] = useState(0);
  const [fileUploadError, SetFileUploadError] = useState(false);
  const [formData, SetfromData] = useState({});

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    try {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          SetFilePerc(Math.round(progress));
        },
        (error) => {
          SetFileUploadError(true);
          console.error(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
            SetfromData({ ...formData, avator: downloadURL })
          );
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  console.log(filePerc);
  console.log(fileUploadError);
  console.log(formData);

  return (
    <div className="">
      <div className="p-3 max-w-lg sm:max-w-xl mx-auto min-h-[90vh] flex flex-col justify-between gap-4 ">
        <h1 className="text-3xl font-semibold text-center ">
          {currentUser.username} profile
        </h1>
        <form className="flex flex-col gap-3">
          <input
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            ref={fileRef}
            hidden
            accept="image/*"
          />
          <img
            onClick={() => fileRef.current.click()}
            src={formData.avator || currentUser.avator}
            alt="profile"
            className="rounded-full h-24 w-24 sm:h-32 sm:w-32 object-cover cursor-pointer self-center mt-2"
          />
          <p className="text-center">
            {fileUploadError ? (
              <span className="text-red-600">Error image uploading</span>
            ) : filePerc > 0 && filePerc < 100 ? (
              <span className="text-green-600">{`Uploading ${filePerc}% `}</span>
            ) : filePerc === 100 ? (
              <span className="text-green-700">
                Image uploaded successfully
              </span>
            ) : null}
          </p>
          <input
            type="text"
            placeholder="username"
            id="username"
            className="border p-3 rounded-lg"
          />
          <input
            type="email"
            placeholder="email"
            id="email"
            className="border p-3 rounded-lg"
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            className="border p-3 rounded-lg"
          />
          <button className="button1 shadow-md hover:opacity-80 smooth ">
            update
          </button>
        </form>
        <div className="flex flex-col text-red-600 ">
          <p className="font-bold">Danger ZONE</p>
          <div className="flex justify-between mt-4">
            <span className=" cursor-pointer smooth hover:font-bold ">
              Delete account
            </span>
            <span className="cursor-pointer smooth hover:font-bold ">
              Sign out
            </span>
          </div>
        </div>
        {/* <p className="text-red-700 mt-5 text-center">{error ? error : ''}</p> */}
        {/* <p className="text-green-700 mt-3 text-center">{updateSuccess ? 'user is updated successfully ' : ''}</p> */}
      </div>
    </div>
  );
}
