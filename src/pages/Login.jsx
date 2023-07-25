import React, { useState } from "react";

import { useLoginMutation } from "../features/api/authApi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../features/services/authSlice";
import photo from "../assets/image1.jpg";
import Lottie from "lottie-react";
import animation from "../assets/login.json";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("Login");
  const [login] = useLoginMutation();
  const nav = useNavigate();
  const dispatch = useDispatch();
  const loginHandler = async (e) => {
    e.preventDefault();
    const user = { email, password };
    const { data } = await login(user);
    if (!data?.success) {
      setMessage(data?.message);
    }

    if (data?.success) {
      setMessage(data?.message);
      nav("/");
      dispatch(
        addUser({
          user: data?.user,
          token: data?.token,
        })
      );
    }
    // console.log(data);
  };
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        {/* <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        /> */}
        <Lottie animationData={animation} loop={true} />
      </div>
      <div className="md:w-1/3 px-4 md:px-0 max-w-sm">
        <form action="" onSubmit={loginHandler}>
          <h1 className="font-bold text-xl text-slate-700">LOG IN</h1>

          <div>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-sm mt-4 w-full outline-none px-4 py-2 border  border-gray-300 rounded"
              type="email"
              placeholder="Email Address"
            />
          </div>
          <div>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="password"
              placeholder="Password"
            />
          </div>

          <h1 className="mt-4  font-semibold text-sm text-slate-500 text-center ">
            Don&apos; have an account?
            <Link to={"/register"}>
              <span
                className="text-primary hover:underline hover:underline-offset-4"
                href="#"
              >
                {" "}
                Register Here
              </span>
            </Link>
          </h1>
          <div className="text-center md:text-left">
            <button
              className="mt-4 w-full bg-primary hover:bg-transparent border-2 border-primary hover:text-primary px-6 py-2 text-white uppercase rounded text-xs float-right  tracking-wider"
              type="submit"
            >
              {message}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
