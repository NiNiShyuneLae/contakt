import React from "react";
import notfound from "../assets/Na_Nov_26.jpg";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const nav = useNavigate()
  return (
    <div className="flex flex-col gap-5 justify-center items-center min-h-screen">
      <img src={notfound} alt="" className="h-96" />
      <div onClick={() => nav('/')} className="  text-white bg-primary border-2 hover:border-primary hover:bg-transparent hover:text-primary transition-all duration-200 px-4 py-1 rounded  text-center uppercase tracking-wider font-semibold cursor-pointer ">
        Go back Home
      </div>
    </div>
  );
};

export default NotFound;
