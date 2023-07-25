// import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {
  useSingleContactQuery,
  useUpdateContactMutation,
} from "../features/api/contactApi";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const EditContact = () => {
  const nav = useNavigate();
  const token = Cookies.get("token");
  const { id } = useParams();
  const { data } = useSingleContactQuery({ token, id });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [updateContact, { isLoading }] = useUpdateContactMutation();
  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(name, email, phone);
    const newData = { id: data?.contact?.id, name, phone, email, address };
    const { data: updatedData } = await updateContact({ token, newData });
    console.log(updatedData); // <-- Updated variable name
    if (updatedData.success) {
      nav("/");
    }
  };
  useEffect(() => {
    if (data) {
      setName(data.contact.name);
      setEmail(data.contact.email);
      setPhone(data.contact.phone);
    }
  }, [data]);
  return (
    <div className="">
      <Navbar />
      <Sidebar />
      <div className=" max-w-md mx-auto min-h-screen flex justify-center items-center mt-14">
        <form
          onSubmit={submitHandler}
          className="w-full bg-primary p-5 shadow-md rounded"
        >
          <p className=" font-bold text-2xl dark:text-white text-center mb-3 text-white">
            Edit Contact
          </p>
          <hr />
          <div className=" mt-5">
            <label
              htmlFor="name"
              className="block font-bold text-white text-xl mb-2"
            >
              Name
            </label>
            <input
              className=" w-full px-2 py-3  mb-4 text-gray-900 border border-gray-500  bg-gray-50  focus:ring-blue  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              type="text"
              id="name"
              placeholder="Name"
              defaultValue={data?.contact?.name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="">
            <label
              htmlFor="phone"
              className="block font-bold text-white text-xl mb-2"
            >
              Phone
            </label>
            <input
              className=" w-full px-2 py-3  mb-4 text-gray-900 border border-gray-500  bg-gray-50  focus:ring-blue  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              type="number"
              id="phone"
              placeholder="Phone Number"
              defaultValue={data?.contact?.phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="">
            <label
              htmlFor="email"
              className="block font-bold text-white text-xl mb-2"
            >
              Email
            </label>
            <input
              className=" w-full px-2 py-3  mb-4 text-gray-900 border border-gray-500  bg-gray-50  focus:ring-blue  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              type="email"
              id="email"
              placeholder="Email Address"
              defaultValue={data?.contact?.email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="">
            <label
              htmlFor="address"
              className="block font-bold text-white text-xl mb-2"
            >
              Address
            </label>
            <input
              className=" w-full px-2 py-3  mb-4 text-gray-900 border border-gray-500  bg-gray-50  focus:ring-blue  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              type="text"
              id="address"
              placeholder="Address"
              defaultValue={data?.contact?.address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className=" flex justify-between py-3">
            <button
              onClick={() => nav("/")}
              className=" border bg-primary text-white rounded-lg hover:text-primary dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 py-2 px-3"
            >
              Cancel
            </button>
            <button
              className=" border bg-primary text-white rounded-lg hover:text-primary dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 py-2 px-3"
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
