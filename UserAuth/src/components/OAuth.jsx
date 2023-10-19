import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function OAuth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGoogleClick = async (e) => {
    e.preventDefault();
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      //   dispatch(signInStart());
      const res = await axios.post(
        "/api/auth/google",
        {
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(signInSuccess(res.data));
      navigate("/");
    } catch (error) {
      // dispatch(signInFailure(error.response.data.message))
      console.log("could not signin with google" + error);
    }
  };
  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="button2 bg-[#DB4437] shadow-md hover:opacity-80 smooth"
    >
      Sign with Google
    </button>
  );
}
