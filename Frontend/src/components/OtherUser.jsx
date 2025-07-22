// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setSelectedUser } from "../Redux/userSlice";

// const OtherUser = ({ user }) => {
//   const dispatch = useDispatch();
//   const { selectedUser, onlineUsers } = useSelector((store) => store.user);
//   const isOnline = onlineUsers?.includes(user._id);
//   const selectedUserHandler = (user) => {
//     dispatch(setSelectedUser(user));
//   };
//   return (
//     <>
//       <div
//         onClick={() => selectedUserHandler(user)}
//         className={` ${
//           selectedUser?._id === user?._id
//             ? "bg-zinc-200 text-black"
//             : "text-white"
//         } flex gap-2 hover:text-black items-center hover:bg-zinc-200 rounded p-2 cursor-pointer`}
//       >
//         <div className={`avatar ${isOnline ? "online" : ""}`}>
//           <div className="relative w-12 rounded-full">
//             {user?.profilePhoto ? (
//               <img
//                 src={user.profilePhoto}
//                 alt="user-profile"
//                 className="w-full h-full rounded-full"
//               />
//             ) : (
//               <div className="bg-gray-400 w-full h-full rounded-full flex items-center justify-center text-white text-xs">
//                 ?
//               </div>
//             )}
//             {isOnline && (
//               <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
//             )}
//           </div>
//         </div>
//         <div className="flex flex-col flex-1">
//           <div className="flex justify-between gap-2 ">
//             <p>{user?.fullName}</p>
//           </div>
//         </div>
//       </div>
//       <div className="divider my-0 py-0 h-1"></div>
//     </>
//   );
// };

// export default OtherUser;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../Redux/userSlice";

const OtherUser = ({ user }) => {
  const dispatch = useDispatch();
  const { selectedUser, onlineUsers } = useSelector((store) => store.user);
  const isOnline = onlineUsers?.includes(user._id);

  const selectedUserHandler = (user) => {
    dispatch(setSelectedUser(user));
  };

  return (
    <>
      <div
        onClick={() => selectedUserHandler(user)}
        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors 
          ${
            selectedUser?._id === user?._id
              ? "bg-purple-100 text-gray-900"
              : "hover:bg-gray-100 text-gray-700"
          }`}
      >
        {/* Avatar with online status */}
        <div className="relative w-11 h-11">
          {user?.profilePhoto ? (
            <img
              src={user.profilePhoto}
              alt="user-profile"
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <div className="bg-gray-400 w-full h-full rounded-full flex items-center justify-center text-white text-sm font-medium">
              ?
            </div>
          )}
          {isOnline && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          )}
        </div>

        {/* User info */}
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <p className="font-medium truncate">{user?.fullName}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherUser;
