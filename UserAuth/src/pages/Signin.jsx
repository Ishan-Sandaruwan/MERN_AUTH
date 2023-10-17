import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();
  const [formData, setFromData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      await axios.post("/api/auth/signin", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  };
  return (
    <div className="bg-slate-100 toMid w-full min-h-screen p-3">
      <div className="bg-white rounded-md shadow-md sm:max-w-5xl max-w-md flex sm:flex-row flex-col">
        <div className="p-3 sm:p-8 flex flex-col gap-2 items-center sm:w-1/2">
          <div>
            <h2 className="gradient-text text-2xl font-bold mb-3">
              We are the lotus team
            </h2>
          </div>
          <form
            className="flex flex-col w-full gap-2 m-1"
            onSubmit={handleSubmit}
          >
            <label>Please login to your account</label>
            <input
              placeholder="Email"
              type="text"
              name="email"
              className="inputtxt mt-2"
              required
              onChange={handleChange}
            />
            <input
              placeholder="Password"
              type="text"
              name="password"
              className="inputtxt mb-4"
              required
              onChange={handleChange}
            />
            <button
              className="button1 shadow-md hover:opacity-80 smooth"
              disabled={loading}
            >
              {loading ? `Loading...` : `LOG IN`}
            </button>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button className="button2 bg-[#DB4437] shadow-md hover:opacity-80 smooth">
              Sign with Google
            </button>
            <button className="button2 bg-[#4267B2] shadow-md hover:opacity-80 smooth">
              Sign with Facebook
            </button>
            <p className="text-center py-3">Forgot password?</p>
          </form>
          <div className="flex w-full justify-between items-center">
            <p>Don&apos;t have an account</p>
            <button
              className="border-2 gradient-border gradient-text px-2 py-1 hover:opacity-80 smooth"
              onClick={() => navigate("/signout")}
            >
              REGISTER
            </button>
          </div>
        </div>
        <div className="gradient1 rounded-b-md sm:rounded-r-lg p-4 text-white flex flex-col sm:items-center sm:justify-center sm:gap-5 sm:w-1/2">
          <h3 className="text-lg mb-3 font-semibold">
            We are more than just a company
          </h3>
          <p className="text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}
