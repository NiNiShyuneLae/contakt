import React, { useState } from "react";
import { RiUserHeartLine } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import Lottie from 'lottie-react';
import animation from '../assets/nothing.json'
import { removeFromFav } from "../features/services/favSlice";

const FavTable = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.fav.fav);
  // let favs = JSON.parse(Cookies.get("fav"));

  const handleRemoveFromFav = (id) => {
    dispatch(removeFromFav(id));
    favs = favs.filter((fav) => fav.id !== id);
  };

  return (
    <div>
      {favs?.length ? (
        <div className="overflow-x-hidden md:overflow-x-visible sm:rounded-lg">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-black uppercase bg-gray-200 hidden lg:table-row-group">
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
            {favs?.map((fav) => (
              <tbody key={fav.id}>
                <tr className="bg-white border-b text-black hidden lg:table-row">
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-white bg-primary p-2 rounded-full">
                        <BsFillPersonFill className="text-2xl" />
                      </div>
                      <span className="text-black">{fav.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">{fav.email}</td>
                  <td className="px-6 py-4">{fav.phone}</td>
                  <td className="px-6 py-4">{fav.address}</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-black hover:underline"
                      onClick={() => handleRemoveFromFav(fav.id)}
                    >
                      <p className="bg-primary border-2 hover:bg-transparent hover:text-primary border-primary transition-all duration-200 rounded inline-block text-white px-4 py-2">
                        Remove from favorite
                      </p>
                    </a>
                  </td>
                </tr>
                <tr className="bg-white border-b text-black lg:hidden ">
                  <td
                    scope="row"
                    colSpan={4}
                    className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap w-full"
                  >
                    <div className="flex items-center   gap-3">
                      <div className="text-white bg-primary p-2 rounded-full">
                        <BsFillPersonFill className="text-2xl" />
                      </div>

                      <span className="text-black">{fav?.name}</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center min-h-screen">
        {/* <div className="bg-primary p-8 text-center rounded flex flex-col gap-5">
        <div className="text-4xl text-white">
            There is no Fav
          </div>

       
        </div> */}
        <Lottie animationData={animation} className="h-[400px]"/>
        {/* <p onClick={() => nav('/')} className="bg-white  border-2 text-primary cursor-pointer border-primary hover:bg-primary hover:text-white hover:border-white px-2 py-1 rounded inline-block">
            Go To Contact
          </p> */}
          <p onClick={() => nav('/')} className="bg-primary text-white px-4 py-2 rounded-lg cursor-pointer">Go To Contact</p>
        </div>
      )}
    </div>
  );
};

export default FavTable;
