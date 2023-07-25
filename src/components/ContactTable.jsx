// import React, { useEffect, useState } from "react";
// import { HiOutlineDotsHorizontal } from "react-icons/hi";
// import { BiPencil } from "react-icons/bi";
// import { LuTrash } from "react-icons/lu";
// import { RiUserHeartLine } from "react-icons/ri";
// import { BsFillPersonFill } from "react-icons/bs";
// import { useNavigate } from "react-router-dom";
// import {
//   useDeleteContactMutation,
//   useGetContactsQuery,
// } from "../features/api/contactApi";
// import Cookies from "js-cookie";
// import { useDispatch, useSelector } from "react-redux";
// import { addContacts } from "../features/services/contactSlice";
// import { addToFav } from "../features/services/favSlice";

// const ContactTable = () => {
//   const token = Cookies.get("token");

//   const [clicked, setClicked] = useState(null);
//   const nav = useNavigate();
//   const clickHandler = (id) => {
//     if (clicked === id) {
//       setClicked(null); // Toggle off if clicked again
//     } else {
//       setClicked(id);
//     }
//   };

//   const favHandler = (contact) => {
//     console.log(contact);
//     setClicked(null);
//     dispatch(addToFav(contact));
//   };

//   const [deleteContact] = useDeleteContactMutation();
//   const deleteHandler = async () => {
//     const deleteData = await deleteContact();
//   };
//   const { data } = useGetContactsQuery(token);
//   // const data = Cookies.get('user')
//   console.log(data);

//   const dispatch = useDispatch();
//   const contacts = useSelector((state) => state?.contactSlice?.contacts);
//   const searchTerm = useSelector((state) => state?.contactSlice?.searchTerm);
//   useEffect(() => {
//     dispatch(addContacts(data?.contacts?.data));
//   }, [data]);

//   return (
//     <div>
//       <div className=" overflow-x-hidden md:overflow-x-visible  sm:rounded-lg ">
//         <table className="w-full text-sm text-left">
//           <thead className="text-xs text-black uppercase bg-gray-200  hidden lg:table-row-group">
//             <tr>
//               <th scope="col" className="px-6 py-3">
//                 Name
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Email Address
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Phone Number
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Address
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           {data?.contacts?.data
//             .filter((item) => {
//               if (searchTerm === "") {
//                 return item;
//               } else if (
//                 item?.name
//                   .toLowerCase()
//                   .includes(searchTerm?.toLocaleLowerCase())
//               ) {
//                 return item;
//               }
//             })
//             ?.map((contact) => {
//               return (
//                 <tbody className="" key={contact.id}>
//                   <tr className="bg-white border-b text-black hidden lg:table-row ">
//                     <td
//                       scope="row"
//                       className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap "
//                     >
//                       <div className="flex items-center  gap-3">
//                         <div className="text-white bg-primary p-2 rounded-full">
//                           <BsFillPersonFill className="text-2xl" />
//                         </div>
//                         <span className="text-black">{contact?.name}</span>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4">{contact?.gmail}</td>
//                     <td className="px-6 py-4">{contact?.phone}</td>
//                     <td className="px-6 py-4">{contact?.address}</td>
//                     <td className="px-6 py-4">
//                       <a
//                         href="#"
//                         onClick={() => clickHandler(contact?.id)}
//                         className="font-medium text-black hover:underline"
//                       >
//                         <HiOutlineDotsHorizontal />
//                       </a>
//                     </td>
//                   </tr>
//                   <tr className="bg-white border-b text-black lg:hidden ">
//                     <td
//                       scope="row"
//                       colSpan={4}
//                       className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap w-full"
//                     >
//                       <div className="flex items-center   gap-3">
//                         <div className="text-white bg-primary p-2 rounded-full">
//                           <BsFillPersonFill className="text-2xl" />
//                         </div>

//                         <span className="text-black">{contact?.name}</span>
//                       </div>
//                     </td>
//                   </tr>
//                   {clicked === contact?.id && (
//                     <tr className="relative" key={contact?.id}>
//                       <td colSpan="5" className=" p-0">
//                         <div className="absolute top-[-20px] right-0">
//                           <table className="bg-white border border-gray-200 flex flex-col gap-1 cursor-pointer">
//                             <tbody>
//                               <tr
//                                 onClick={() => favHandler(contact)}
//                                 className="flex items-center gap-3 hover:bg-primary hover:text-white px-3 py-2"
//                               >
//                                 <td>
//                                   <RiUserHeartLine className="text-2xl" />
//                                 </td>
//                                 <td>
//                                   <p>Add to Favorite</p>
//                                 </td>
//                               </tr>
//                               <tr
//                                 onClick={() => nav(`/edit/${contact.id}`)}
//                                 className="flex items-center gap-3 hover:bg-primary hover:text-white px-3 py-2"
//                               >
//                                 <td>
//                                   <BiPencil className="text-2xl" />
//                                 </td>
//                                 <td>
//                                   <p>Edit</p>
//                                 </td>
//                               </tr>
//                               <tr
//                                 onClick={async () =>
//                                   await deleteContact({
//                                     id: contact?.id,
//                                     token,
//                                   })
//                                 }
//                                 className="flex items-center gap-3 hover:bg-primary hover:text-white px-3 py-2"
//                               >
//                                 <td>
//                                   <LuTrash className="text-2xl" />
//                                 </td>
//                                 <td>
//                                   <p>Delete</p>
//                                 </td>
//                               </tr>
//                             </tbody>
//                           </table>
//                         </div>
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               );
//             })}
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ContactTable;

import React, { useEffect, useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BiPencil } from "react-icons/bi";
import { LuTrash } from "react-icons/lu";
import { RiUserHeartLine } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from "../features/api/contactApi";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { addContacts } from "../features/services/contactSlice";
import { addToFav } from "../features/services/favSlice";
import Swal from "sweetalert2";

const ContactTable = () => {
  const token = Cookies.get("token");

  const [clicked, setClicked] = useState(null);
  const nav = useNavigate();
  const clickHandler = (id) => {
    if (clicked === id) {
      setClicked(null); // Toggle off if clicked again
    } else {
      setClicked(id);
    }
  };

  const favHandler = (contact) => {
    console.log(contact);
    setClicked(null);
    dispatch(addToFav(contact));
  };

  const [deleteContact] = useDeleteContactMutation(token);
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
  const { data } = useGetContactsQuery(token);

  const dispatch = useDispatch();
  const contacts = useSelector((state) => state?.contactSlice?.contacts);
  const searchTerm = useSelector((state) => state?.contactSlice?.searchTerm);
  useEffect(() => {
    dispatch(addContacts(data?.contacts?.data));
  }, [data]);
  const detailHandler = (id) => {
    nav(`/detail/${id}`);
  };

  return (
    <div>
      <div className=" overflow-x-hidden md:overflow-x-visible  sm:rounded-lg mt-16">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-black uppercase bg-gray-200  hidden lg:table-row-group">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email Address
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          {data?.contacts?.data
            .filter((item) => {
              if (searchTerm === "") {
                return item;
              } else if (
                item?.name
                  .toLowerCase()
                  .includes(searchTerm?.toLocaleLowerCase())
              ) {
                return item;
              }
            })
            ?.map((contact) => {
              return (
                <tbody className="" key={contact.id}>
                  <tr className="bg-white border-b text-black hidden lg:table-row ">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap "
                    >
                      <div className="flex items-center  gap-3">
                        <div className="text-white bg-primary p-2 rounded-full">
                          <BsFillPersonFill className="text-2xl" />
                        </div>
                        <span className="text-black">{contact?.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">{contact?.gmail}</td>
                    <td className="px-6 py-4">{contact?.phone}</td>
                    <td className="px-6 py-4">{contact?.address}</td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        onClick={() => clickHandler(contact?.id)}
                        className="font-medium text-black hover:underline"
                      >
                        <HiOutlineDotsHorizontal />
                      </a>
                    </td>
                  </tr>

                  <tr
                    onClick={() => detailHandler(contact?.id)}
                    className="bg-white border-b cursor-pointer text-black lg:hidden "
                  >
                    <td
                      scope="row"
                      colSpan={4}
                      className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap w-full"
                    >
                      <div className="flex items-center   gap-3">
                        <div className="text-white bg-primary p-2 rounded-full">
                          <BsFillPersonFill className="text-2xl" />
                        </div>

                        <span className="text-black">{contact?.name}</span>
                      </div>
                    </td>
                  </tr>
                  {clicked === contact?.id && (
                    <tr className="relative" key={contact?.id}>
                      <td colSpan="5" className=" p-0">
                        <div className="absolute top-[-20px] right-0">
                          <table className="bg-white border border-gray-200 flex flex-col gap-1 cursor-pointer">
                            <tbody>
                              <tr
                                onClick={() => favHandler(contact)}
                                className="flex items-center gap-3 hover:bg-primary hover:text-white px-3 py-2"
                              >
                                <td>
                                  <RiUserHeartLine className="text-2xl" />
                                </td>
                                <td>
                                  <p>Add to Favorite</p>
                                </td>
                              </tr>
                              <tr
                                onClick={() => nav(`/edit/${contact.id}`)}
                                className="flex items-center gap-3 hover:bg-primary hover:text-white px-3 py-2"
                              >
                                <td>
                                  <BiPencil className="text-2xl" />
                                </td>
                                <td>
                                  <p>Edit</p>
                                </td>
                              </tr>
                              <tr
                                onClick={() =>
                                  deleteHandler( contact?.id)
                                }
                                className="flex items-center gap-3 hover:bg-primary hover:text-white px-3 py-2"
                              >
                                <td>
                                  <LuTrash className="text-2xl" />
                                </td>
                                <td>
                                  <p>Delete</p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              );
            })}
        </table>
      </div>
    </div>
  );
};

export default ContactTable;
