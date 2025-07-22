import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../Redux/userSlice";
import { BASE_URL } from "../config";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/api/v1/user/login`, user, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log("Login response:", res);
      navigate("/");
      console.log(res);
      dispatch(setAuthUser(res.data));
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
      console.log(error);
    }
    setUser({
      username: "",
      password: "",
    });
  };

  return (
    <div className="min-w-full mx-auto flex items-center justify-center min-h-auto bg-gray-900 text-white">
      <div className="w-full p-6 rounded-lg shadow-lg bg-gray-800 border border-gray-700">
        <h1 className="text-3xl font-bold text-center text-white mb-4">
          Login
        </h1>
        <form onSubmit={onSubmitHandler}>
          <div>
            <label className="block mb-1 text-white">Username</label>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="w-full px-3 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mt-4">
            <label className="block mb-1 text-white">Password</label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full px-3 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              placeholder="Password"
            />
          </div>
          <p className="text-center my-3 text-sm text-gray-300">
            Don't have an account?{" "}
            <Link className="text-blue-400 hover:underline" to="/register">
              Signup
            </Link>
          </p>
          <div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded shadow-md"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
