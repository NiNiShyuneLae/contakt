import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { LuLogOut } from "react-icons/lu";
import { FcBusinessContact } from "react-icons/fc";
import { FiPlus } from "react-icons/fi";
import { RiContactsLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../features/services/contactSlice";
import { useGetContactsQuery } from "../features/api/contactApi";
import Cookies from "js-cookie";
import { useLogoutMutation } from "../features/api/authApi";
import { removeUser } from "../features/services/authSlice";

const Navbar = () => {
  const nav = useNavigate();
  const token = Cookies.get("token");
  const user = JSON.parse(Cookies.get('user'))
  // console.log(token);
  const [show, setShow] = useState(false);
  const [drop, setDrop] = useState(false);
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.contactSlice.searchTerm);
  const { data } = useGetContactsQuery(token);
  const [logout] = useLogoutMutation();

  const logoutHandler = async () => {
    const { data: lgdata } = await logout(token);
    console.log(lgdata);

    if (data?.success) {
      dispatch(removeUser());
      nav("/login");
    }
  };
  return (
    <div>
      <nav className="bg-gray-200 border-gray-200 dark:bg-gray-900 fixed top-0 left-0 right-0">
        <div className=" flex flex-wrap items-center justify-between  p-4">
          <p className="text-3xl font-bold flex items-center gap-2">
            <FcBusinessContact />
            contaKt
          </p>
          <div className="flex items-center gap-3 lg:order-2">
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => dispatch(setSearchTerm(e.target.value))}
              />
            </div>
            <button
              // data-collapse-toggle="navbar-search"
              onClick={() => setShow(!show)}
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-400 rounded-lg md:hidden hover:text-primary  dark:text-gray-400"
              // aria-controls="navbar-search"
              // aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <button
              onClick={() => setDrop(!drop)}
              // data-dropdown-toggle='dropdown'
              // id="dropdownDefaultButton"
              className="text-center inline-flex items-center "
            >
              <CgProfile className="text-3xl text-gray-400 hover:text-primary" />
            </button>
            <div className="">
              <div
                // id="dropdown"
                // style={{
                //   position: 'absolute',
                //   inset: '0px auto auto 0px',
                //   margin: '0px',
                //   transform: 'translate3d(359.333px, 61px, 0px)'
                // }}
                // data-popper-placement="bottom"
                className={`${
                  drop ? "fixed top-14 right-5" : "hidden"
                } z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
              >
                <ul
                  className="flex flex-col text-sm text-gray-700 dark:text-gray-200 cursor-pointer"
                  // aria-labelledby="dropdownDefaultButton"
                >
                  <li className="flex items-center gap-4 px-4 py-2 hover:bg-primary rounded-t-lg hover:text-white">
                  <div className=" text-black opacity-50 text-3xl">
                    <CgProfile />
                  </div>
                  <div className="overflow-x-clip">
                    <p className="font-bold ">{user?.name}</p>
                    <p className="text-xs overflow-hidden overflow-ellipsis">{user?.email}</p>
                  </div>
                </li>
                <hr />
                  <li
                    onClick={() => logoutHandler()}
                    className="text-center  px-4 py-2 hover:bg-primary rounded-lg hover:text-white"
                  >
                    <p className="flex items-center  gap-4  font-bold">
                      {" "}
                      <LuLogOut className="  text-2xl" />
                      Log Out
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`items-center justify-between  w-full md:flex md:w-auto md:order-1 ${
              show ? "null" : "hidden"
            }`}
            // id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            <ul className="flex flex-col overflow-hidden visible md:invisible bg-primary p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li onClick={() => nav("/create")}>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white hover:text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <span className="flex items-center gap-4 ml-3 whitespace-nowrap">
                    <FiPlus />
                    Create Contact
                  </span>
                </a>
              </li>
              <li onClick={() => nav("/")}>
                <a
                  href="#"
                  className="flex items-center gap-2 py-2 pl-3 pr-4 text-white hover:text-primary  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <span className="flex items-center gap-4 ml-3 whitespace-nowrap">
                    <RiContactsLine />
                    My Contacts
                  </span>
                  <div className="ml-auto inline-flex items-center justify-center w-3 h-3 p-3  text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  {data?.contacts?.data?.length}
                    
                  </div>
                </a>
              </li>
              <li onClick={() => nav("/favorite")}>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white hover:text-primary  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <span className="flex items-center gap-4 ml-3 whitespace-nowrap">
                    <AiOutlineHeart />
                    Favorite
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// import { useState } from "react";
// import { CgProfile } from "react-icons/cg";
// import { LuLogOut } from "react-icons/lu";
// import { FcBusinessContact } from "react-icons/fc";
// import { FiPlus } from "react-icons/fi";
// import { RiContactsLine } from "react-icons/ri";
// import { AiOutlineHeart } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setSearchTerm } from "../features/services/contactSlice";
// import { useGetContactsQuery } from "../features/api/contactApi";
// import Cookies from "js-cookie";
// import { useLogoutMutation } from "../features/api/authApi";
// import { removeUser } from "../features/services/authSlice";

// const Navbar = () => {
//   const user = JSON.parse(Cookies.get("user"));
//   console.log(user);

//   const nav = useNavigate();
//   const token = Cookies.get("token");
//   const [show, setShow] = useState(false);
//   const [drop, setDrop] = useState(false);
//   const [logout] = useLogoutMutation();
//   const navigate = useNavigate();

//   const dispatch = useDispatch();
//   const searchTerm = useSelector((state) => state.contactSlice.searchTerm);
//   const { data } = useGetContactsQuery(token);
//   // console.log(data);
//   const logoutHandler = async () => {
//     const data = await logout(token);
//     dispatch(removeUser());
//     // console.log(data);
//     navigate("/login");
//   };
//   return (
//     <div>
//       <nav className="bg-gray-200 border-gray-200 dark:bg-gray-900">
//         <div className=" flex flex-wrap items-center justify-between  p-4">
//           <p className="text-3xl font-bold flex items-center gap-2">
//             <FcBusinessContact />
//             contaKt
//           </p>
//           <div className="flex items-center gap-3 lg:order-2">
//             <div className="relative hidden md:block">
//               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                 <svg
//                   className="w-5 h-5 text-gray-500"
//                   aria-hidden="true"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//                     clipRule="evenodd"
//                   ></path>
//                 </svg>
//                 <span className="sr-only">Search icon</span>
//               </div>
//               <input
//                 type="text"
//                 id="search-navbar"
//                 className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
//                 placeholder="Search..."
//                 value={searchTerm}
//                 onChange={(e) => dispatch(setSearchTerm(e.target.value))}
//               />
//             </div>
//             <button
//               // data-collapse-toggle="navbar-search"
//               onClick={() => setShow(!show)}
//               type="button"
//               className="inline-flex items-center p-2 text-sm text-gray-400 rounded-lg md:hidden hover:text-primary  dark:text-gray-400"
//               // aria-controls="navbar-search"
//               // aria-expanded="false"
//             >
//               <span className="sr-only">Open menu</span>
//               <svg
//                 className="w-6 h-6"
//                 aria-hidden="true"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
//             </button>
//             <button
//               onClick={() => setDrop(!drop)}
//               // data-dropdown-toggle='dropdown'
//               // id="dropdownDefaultButton"
//               className="text-center inline-flex items-center "
//             >
//               <CgProfile className="text-3xl text-gray-400 hover:text-primary" />
//             </button>
//             <div className="">
//               <div
//                 // id="dropdown"
//                 // style={{
//                 //   position: 'absolute',
//                 //   inset: '0px auto auto 0px',
//                 //   margin: '0px',
//                 //   transform: 'translate3d(359.333px, 61px, 0px)'
//                 // }}
//                 // data-popper-placement="bottom"
//                 className={`${
//                   drop ? "fixed top-14 right-5" : "hidden"
//                 } z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
//               >
//                 <ul
//                   className="flex flex-col text-sm text-gray-700 dark:text-gray-200 cursor-pointer"
//                   // aria-labelledby="dropdownDefaultButton"
//                 >
//                   <li className="flex items-center gap-3 px-4 py-2 hover:bg-primary rounded-t-lg hover:text-white">
//                     <div className=" text-black opacity-50 text-3xl">
//                       <CgProfile />
//                     </div>
//                     <div>
//                       <p className="font-bold ">{user?.name}</p>
//                       <p>{user?.email}</p>
//                     </div>
//                   </li>
//                   <hr />
//                   <li
//                     onClick={logoutHandler}
//                     className="text-center px-4 py-2 hover:bg-primary rounded-lg hover:text-white"
//                   >
//                     <p className="flex items-center  gap-4  font-bold">
//                       {" "}
//                       <LuLogOut className="  text-2xl" />
//                       Log Out
//                     </p>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div
//             className={`items-center justify-between  w-full md:flex md:w-auto md:order-1 ${
//               show ? "null" : "hidden"
//             }`}
//             // id="navbar-search"
//           >
//             <div className="relative mt-3 md:hidden">
//               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                 <svg
//                   className="w-5 h-5 text-gray-500"
//                   aria-hidden="true"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//                     clipRule="evenodd"
//                   ></path>
//                 </svg>
//               </div>
//               <input
//                 type="text"
//                 id="search-navbar"
//                 className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 placeholder="Search..."
//               />
//             </div>
//             <ul className="flex flex-col overflow-hidden visible md:invisible bg-primary p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//               <li onClick={() => nav("/create")}>
//                 <a
//                   href="#"
//                   className="block py-2 pl-3 pr-4 text-white hover:text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   <span className="flex items-center gap-4 ml-3 whitespace-nowrap">
//                     <FiPlus />
//                     Create Contact
//                   </span>
//                 </a>
//               </li>
//               <li onClick={() => nav("/")}>
//                 <a
//                   href="#"
//                   className="flex items-center gap-2 py-2 pl-3 pr-4 text-white hover:text-primary  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   <span className="flex items-center gap-4 ml-3 whitespace-nowrap">
//                     <RiContactsLine />
//                     My Contacts
//                   </span>
//                   <div className="ml-auto inline-flex items-center justify-center w-3 h-3 p-3  text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
//                     3
//                   </div>
//                 </a>
//               </li>
//               <li onClick={() => nav("/favorite")}>
//                 <a
//                   href="#"
//                   className="block py-2 pl-3 pr-4 text-white hover:text-primary  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   <span className="flex items-center gap-4 ml-3 whitespace-nowrap">
//                     <AiOutlineHeart />
//                     Favorite
//                   </span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
