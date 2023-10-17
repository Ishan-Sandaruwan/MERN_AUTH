import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signout() {
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
      await axios.post("/api/auth/signup", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setLoading(false);
      navigate("/signin");
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
            <h2 className="gradient-text2 text-2xl font-bold mb-3">
              We are the lotus team
            </h2>
          </div>
          <form
            className="flex flex-col w-full gap-2 m-1"
            onSubmit={handleSubmit}
          >
            <label>Please cretae your account</label>
            <input
              placeholder="Username"
              type="text"
              name="username"
              className="inputtxt mt-2"
              required
              onChange={handleChange}
            />
            <input
              placeholder="email"
              type="text"
              name="email"
              className="inputtxt "
              required
              onChange={handleChange}
            />
            <input
              placeholder="Password"
              type="text"
              name="password"
              className="inputtxt "
              required
              onChange={handleChange}
            />
            <input
              placeholder="Comfirm Password"
              type="text"
              name="comfirmPassword"
              className="inputtxt mb-4"
              required
              onChange={handleChange}
            />

            <button
              className="button3 uppercase shadow-md hover:opacity-80 smooth"
              disabled={loading}
            >
              {loading ? `Loading...` : `CREATE account`}
            </button>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button className="button2 bg-[#DB4437] shadow-md hover:opacity-80 smooth">
              Continue With Google
            </button>
            <button className="button2 bg-[#4267B2] shadow-md hover:opacity-80 smooth">
              Continue With Facebook
            </button>
          </form>
          <div className="flex w-full justify-between items-center">
            <p>Do You have an account</p>
            <button
              className="border-2 gradient-border2 gradient-text2 px-2 py-1 hover:opacity-80 smooth"
              onClick={() => navigate("/signin")}
            >
              LOGIN
            </button>
          </div>
        </div>
        <div className="gradient2 rounded-b-md sm:rounded-r-lg p-4 text-white flex flex-col sm:items-center sm:justify-center sm:gap-5 sm:w-1/2">
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
