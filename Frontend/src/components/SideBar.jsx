import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import OtherUsers from "./OtherUsers";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setAuthUser,
  setOtherUsers,
  setSelectedUser,
} from "../Redux/userSlice";
import { setMessages } from "../Redux/messageSlice";
import { BASE_URL } from "../config";

const SideBar = () => {
  const [search, setSearch] = useState("");
  const { otherUsers } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/v1/user/logout`);
      navigate("/login");
      toast.success(res.data.message);
      dispatch(setAuthUser(null));
      dispatch(setMessages(null));
      dispatch(setOtherUsers(null));
      dispatch(setSelectedUser(null));
      
    } catch (error) {
      console.log(error);
    }
  };

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    const conversationUser = otherUsers?.find((user) =>
      user.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversationUser) {
      dispatch(setOtherUsers([conversationUser]));
    } else {
      toast.error("User not found!");
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Top section: Search + Users */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Search bar */}
        <form
          onSubmit={searchSubmitHandler}
          className="flex items-center gap-2 mb-4"
        >
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="bg-zinc-700 hover:bg-zinc-800 text-white p-2 rounded-md"
          >
            <BiSearchAlt2 className="w-5 h-5" />
          </button>
        </form>

        {/* Divider */}
        <div className="border-b border-gray-300 mb-4"></div>

        {/* Users List */}
        <OtherUsers />
      </div>

      {/* Bottom: Logout Button */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={logoutHandler}
          className="bg-black text-white px-4 py-2 rounded shadow-md hover:bg-gray-800 w-full"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideBar;
