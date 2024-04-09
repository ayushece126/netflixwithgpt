import React from "react";
import { IoIosCheckboxOutline } from "react-icons/io";
import Header from "./Header";
import { Link, BrowserRouter as Router } from "react-router-dom";
const Signup = () => {
  return (
    <div>
      <Header></Header>
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="img"
        className="bg-cover bg-center bg-blend-darken absolute"
      />
      <form className="absolute w-3/12 my-20 left-0 right-0 mx-auto bg-black p-12 opacity-85 ">
        <div className=" flex flex-col">
          <div className="text-4xl text-white font-bold mb-5  ">Sign Up</div>
          <input
            type="text"
            placeholder="Name"
            className="mt-2 rounded-md outline-none p-3 my-2 bg-zinc-700 text-white"
          />
          <input
            type="text"
            placeholder="Email or phone number"
            className="mt-2 rounded-md outline-none p-3 my-2 bg-zinc-700 text-white"
          />
          <br />
          <input
            type="text"
            placeholder="Password "
            className="  rounded-md outline-none p-3 bg-zinc-700 text-white"
          />
          <br />
          <button className=" bg-red-800 p-3 my-5 text-white rounded-md opacity-100">
            Sign Up{" "}
          </button>
          <div className="flex justify-between ">
            <div className="text-gray-500 text-sm flex">
              <IoIosCheckboxOutline
                style={{ color: "white", strokeWidth: "2px" }}
                size={25}
              />
              Remember me
            </div>
            <div className="text-gray-500 text-sm"> Need help?</div>
          </div>
        </div>

        <div className="flex text-gray-500 mt-10 gap-4">
          Already a member
          <Link
            className="text-white font-semibold  hover:underline-offset-1"
            to="/signin "
          >
            Sign In now
          </Link>
        </div>
        <div className="text-gray-500 text-xs my-6">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <Link
            className="text-blue-500 hover:underline-offset-auto hover:decoration-blue-500"
            to="/learnmore"
          >
            Learn more.
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
