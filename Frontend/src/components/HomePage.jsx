// import React, { useEffect } from "react";
// import SideBar from "./SideBar";
// import MessageContainer from "./MessageContainer";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const HomePage = () => {
//   const { authUser } = useSelector((store) => store.user);
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (!authUser) {
//       navigate("/login");
//     }
//   }, []);
//   return (
//     <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//       <SideBar />
//       <MessageContainer />
//     </div>
//   );
// };

// export default HomePage;

// import React, { useEffect } from "react";
// import SideBar from "./SideBar";
// import MessageContainer from "./MessageContainer";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const HomePage = () => {
//   const { authUser } = useSelector((store) => store.user);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!authUser) {
//       navigate("/login");
//     }
//   }, []);

//   return (
//     <div className="h-screen w-screen bg-gray-100 flex items-center justify-center p-2 sm:p-6">
//       <div className="flex w-full max-w-7xl h-full sm:h-[85vh] bg-white rounded-xl shadow-lg overflow-hidden">
//         {/* Sidebar - 30% */}
//         <div className="w-[28%] border-r border-gray-200 bg-white">
//           <SideBar />
//         </div>

//         {/* Message Container - 70% */}
//         <div className="flex-1 bg-white flex flex-col">
//           <MessageContainer />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React, { useEffect } from "react";
import SideBar from "./SideBar";
import MessageContainer from "./MessageContainer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { authUser } = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authUser) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="h-screen w-screen bg-green-100 flex items-center justify-center p-2 sm:p-6">
      <div className="flex w-full  h-full sm:h-[95vh] bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Sidebar */}
        <div className="w-[28%] bg-white border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-center text-indigo-600 tracking-wide">
              ChatSphere
            </h1>
          </div>
          <SideBar />
        </div>

        {/* Chat */}
        <div className="flex-1 bg-white flex flex-col">
          <MessageContainer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
