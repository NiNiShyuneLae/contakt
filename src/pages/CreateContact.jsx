// import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useCreateContactMutation } from "../features/api/contactApi";
import { useForm } from "@mantine/form";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { TextInput } from "@mantine/core";

const CreateContact = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
  });

  const [getCreateContact, { isLoading }] = useCreateContactMutation();
  const token = Cookies.get("token");
  const nav = useNavigate();

  return (
    <div>
      <div className="">
        <Navbar />
        <Sidebar />
        <div className=" max-w-md mx-auto min-h-screen flex justify-center items-center mt-14">
          <form
            className="w-full bg-primary p-5 shadow-md rounded"
            onSubmit={form.onSubmit(async (values) => {
              const { data } = await getCreateContact({ token, data: values });
              if (data?.success) {
                nav("/");
              }
            })}
          >
            <p className=" font-bold text-2xl dark:text-white text-center mb-3 text-white">
              Create A New Contact
            </p>
            <hr />
            <div className=" mt-5">
              <label
                htmlFor="name"
                className="block font-bold text-white text-xl mb-2"
              >
                Name
              </label>
              <TextInput
                className="mb-5"
                size="lg"
                placeholder="Name"
                {...form.getInputProps("name")}
              />
              <label
                htmlFor="email"
                className="block font-bold text-white text-xl mb-2"
              >
                Email
              </label>
              <TextInput
                className="mb-5"
                size="lg"
                placeholder="Email"
                {...form.getInputProps("email")}
              />
              <label
                htmlFor="phone"
                className="block font-bold text-white text-xl mb-2"
              >
                Phone Number
              </label>
              <TextInput
                className="mb-5"
                size="lg"
                placeholder="Phone"
                {...form.getInputProps("phone")}
              />
              <label
                htmlFor="address"
                className="block font-bold text-white text-xl mb-2"
              >
                Address
              </label>
              <TextInput
                className="mb-5"
                size="lg"
                placeholder="Address"
                {...form.getInputProps("address")}
              />
            </div>
            {""}
            <div className=" flex justify-between py-3">
              <button
                onClick={() => nav("/")}
                className=" border bg-primary text-white rounded-lg hover:text-primary dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 py-2 px-3"
              >
                Cancle
              </button>
              <button
                type="submit"
                className=" border bg-primary text-white rounded-lg hover:text-primary dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 py-2 px-3"
                disabled={isLoading}
              >
                {isLoading ? "Creating..." : "Create"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateContact;
