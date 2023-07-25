// import React from "react";
// import Navbar from "../components/Navbar";

// // import { FiPlus } from "react-icons/fi";
// // import { RiContactsLine } from "react-icons/ri";
// // import { AiOutlineHeart } from "react-icons/ai";
// import { BsPerson } from "react-icons/bs";
// import { RiUserHeartLine } from "react-icons/ri";
// import { BiPencil } from "react-icons/bi";
// import { LuTrash } from "react-icons/lu";
// import { Link } from "react-router-dom";
// import { AiTwotoneHome } from "react-icons/ai";
// import Sidebar from "../components/Sidebar";

// const Detail = () => {
//   return (
//     <div>
//       <Navbar />
//       {/* <aside
//         // id="default-sidebar"
//         className="fixed top-0 left-0 z-40 w-64 h-screen  -translate-x-full sm:translate-x-0 "
//         aria-label="Sidebar"
//       >
//         <div className="h-full rounded-r-xl px-3 py-4 overflow-y-auto bg-primary dark:bg-gray-800 mt-16 text-white">
//           <ul className="space-y-4 font-medium ">
//             <li>
//               <a
//                 href="#"
//                 className="flex items-center p-2  rounded-lg dark:text-white transition-all duration-200 hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700"
//               >
//                 <span className="flex items-center gap-4 ml-3 whitespace-nowrap">
//                   <FiPlus />
//                   Create Contact
//                 </span>
//               </a>
//             </li>
//             <li className="hover:text-black transition-all duration-200 ">
//               <a
//                 href="#"
//                 className="flex items-center p-2  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
//               >
//                 <span className="flex items-center gap-4 ml-3 whitespace-nowrap">
//                   <RiContactsLine />
//                   My Contacts
//                 </span>
//                 <div className="ml-12 inline-flex items-center justify-center w-3 h-3 p-3  text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
//                   3
//                 </div>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="flex items-center p-2  rounded-lg dark:text-white hover:text-black transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
//               >
//                 <span className="flex items-center gap-4 ml-3 whitespace-nowrap">
//                   <AiOutlineHeart />
//                   Favorite
//                 </span>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </aside> */}
//       <Sidebar/>
//       <div className="flex h-screen   lg:hidden sm:ml-60 justify-center mt-32">
//         <div className="">
//           <div className="bg-primary  mx-auto mb-5 w-24 h-24 flex text-center justify-center items-center rounded-full">
//             <BsPerson className="text-6xl text-white" />
//           </div>
//           <h1 className="text-center text-lg text-primary mb-5 ">
//             Ei Khaing Soe
//           </h1>
//           <div className="inline-flex rounded-md mb-5 shadow-sm" role="group">
//             <button
//               type="button"
//               className="inline-flex rounded-l-lg items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-primary hover:text-white  dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
//             >
//               <RiUserHeartLine className="mr-2" />
//               Add to Favarite
//             </button>
//             <button
//               type="button"
//               className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-primary hover:text-white  dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
//             >
//               <BiPencil className="mr-2" />
//               Edit
//             </button>
//             <button
//               type="button"
//               className="inline-flex rounded-r-lg items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-primary hover:text-white  dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
//             >
//               <LuTrash className="mr-2" />
//               Delete
//             </button>
//           </div>

//           <div className="w-full max-w-md mb-5  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
//             <div className="">
//               <ul
//                 role="list"
//                 className="divide-y  divide-gray-200 dark:divide-gray-700"
//               >
//                 <li className="py-3 sm:py-4 hover:text-primary">
//                   <div className="flex items-center justify-between space-x-4">
//                     <div>Phone</div>
//                     <div className=" text-bold text-base">09456639939</div>
//                     {/*
//                                         <div className="inline-flex items-center text-base font-semibold hover:text-primary text-gray-900 dark:text-white">
//                                             09456639939
//                                         </div> */}
//                   </div>
//                 </li>
//                 <li className="py-3 sm:py-4">
//                   <div className="flex items-center hover:text-primary justify-between space-x-4">
//                     <div>Email</div>
//                     <div className=" text-bold text-base">
//                       eikhaingsoe@gmail.com
//                     </div>

//                     {/* <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
//                                             eikhaingsoe@gmail.com
//                                         </div> */}
//                   </div>
//                 </li>

//                 <li className="pt-3 pb-0 sm:pt-4">
//                   <div className="flex items-center justify-between">
//                     <div>Address</div>
//                     <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
//                       Yangon
//                     </div>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <Link to={"/"}>
//             <button className="bg-primary flex items-center gap-3 rounded-lg text-white px-5 py-2">
//               <AiTwotoneHome />
//               Back to Home
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Detail;

// import React from "react";
import Navbar from "../components/Navbar";

// import { FiPlus } from "react-icons/fi";
// import { RiContactsLine } from "react-icons/ri";
// import { AiOutlineHeart } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { RiUserHeartLine } from "react-icons/ri";
import { BiPencil } from "react-icons/bi";
import { LuTrash } from "react-icons/lu";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai";
// import Sidebar from "../components/Sidebar";
import Cookies from "js-cookie";
import { useDeleteContactMutation, useSingleContactQuery } from "../features/api/contactApi";
import Swal from "sweetalert2";

const Detail = () => {
  const { id } = useParams();
  const token = Cookies.get("token");
  const { data } = useSingleContactQuery({ token, id });
  const [deleteContact] = useDeleteContactMutation(token);
  const nav = useNavigate();
  // const deleteHandler = (id, token) => {
  //   const data = deleteContact({ id, token });
  //   console.log(data);
  // };
  const deleteHandler = (id) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085D6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            );
            nav ('/')
            const deleteData = await deleteContact({ id, token })
        }
    })
}
  const singleContact = data?.contact;
  // console.log(singleContact);

  return (
    <div>
      <Navbar />
      {/* <aside
        // id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen  -translate-x-full sm:translate-x-0 "
        aria-label="Sidebar"
      >
        <div className="h-full rounded-r-xl px-3 py-4 overflow-y-auto bg-primary dark:bg-gray-800 mt-16 text-white">
          <ul className="space-y-4 font-medium ">
            <li>
              <a
                href="#"
                className="flex items-center p-2  rounded-lg dark:text-white transition-all duration-200 hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="flex items-center gap-4 ml-3 whitespace-nowrap">
                  <FiPlus />
                  Create Contact
                </span>
              </a>
            </li>
            <li className="hover:text-black transition-all duration-200 ">
              <a
                href="#"
                className="flex items-center p-2  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="flex items-center gap-4 ml-3 whitespace-nowrap">
                  <RiContactsLine />
                  My Contacts
                </span>
                <div className="ml-12 inline-flex items-center justify-center w-3 h-3 p-3  text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2  rounded-lg dark:text-white hover:text-black transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="flex items-center gap-4 ml-3 whitespace-nowrap">
                  <AiOutlineHeart />
                  Favorite
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside> */}
      {/* <Sidebar/> */}
      <div className="flex    lg:hidden  justify-center mt-20">
        <div className="">
          <div className="bg-primary  mx-auto mb-5 w-24 h-24 flex text-center justify-center items-center rounded-full">
            <BsPerson className="text-6xl text-white" />
          </div>
          <h1 className="text-center text-lg text-primary mb-5 ">
            {singleContact?.name}
          </h1>
          <div className="inline-flex rounded-md mb-5 shadow-sm" role="group">
            <Link to={"/favorite"}>
              <button
                type="button"
                className="inline-flex rounded-l-lg items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-primary hover:text-white  dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                <RiUserHeartLine className="mr-2" />
                Add to Favarite
              </button>
            </Link>

            <Link to={`/edit/${id}`}>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-primary hover:text-white  dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                <BiPencil className="mr-2" />
                Edit
              </button>
            </Link>

            <button
              type="button"
              // onClick={()=> deleteHandler({ id: singleContact?.id, token })
              onClick={() => deleteHandler(singleContact?.id)}
              className="inline-flex rounded-r-lg items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-primary hover:text-white  dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              <LuTrash className="mr-2" />
              Delete
            </button>
          </div>

          <div className="w-full max-w-md mb-5  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="">
              <ul
                role="list"
                className="divide-y  divide-gray-200 dark:divide-gray-700"
              >
                <li className="py-3 sm:py-4 hover:text-primary">
                  <div className="flex items-center justify-between space-x-4">
                    <div>Phone</div>
                    <div className=" text-bold text-base">
                      {singleContact?.phone}
                    </div>
                    {/*                             
                                        <div className="inline-flex items-center text-base font-semibold hover:text-primary text-gray-900 dark:text-white">
                                            09456639939
                                        </div> */}
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center hover:text-primary justify-between space-x-4">
                    <div>Email</div>
                    <div className=" text-bold text-base">
                      {singleContact?.email}
                    </div>

                    {/* <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            eikhaingsoe@gmail.com
                                        </div> */}
                  </div>
                </li>

                <li className="pt-3 pb-0 sm:pt-4">
                  <div className="flex items-center hover:text-primary justify-between">
                    <div>Address</div>
                    <div className="inline-flex items-center text-base font-semibold  dark:text-white">
                      {singleContact?.address}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <Link to={"/"}>
            <button className="bg-primary flex items-center gap-3 rounded-lg text-white px-5 py-2 mx-auto">
              <AiTwotoneHome />
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
