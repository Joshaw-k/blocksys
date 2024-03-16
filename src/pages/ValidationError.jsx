import React from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const ValidationError = () => {
  return (
    <>
      <Link to="/" className="absolute left-5 top-20 w-[4rem] h-[4rem]">
        <img src={logo} alt="logo.png" className="w-full" />
      </Link>
      <div className="min-h-screen">
        <div className="bg-[#FFE8E8] w-[70%] max-w-xs md:mt-10 mt-28 flex flex-col items-center rounded-3xl py-8 px-3 m-auto">
          <div>
            <RiErrorWarningFill className="text-[#CF1212] text-5xl" />
          </div>
          <p className="mt-3 text-center font-semibold">
            Unable To Validate Wallet!!! ,<br />
            Try A Different Wallet.
          </p>
          <Link
            to="/connectwallet"
            className="bg-[#FF1E1E] py-4 px-14 mt-5 rounded-full text-white"
          >
            Cancel
          </Link>
        </div>
      </div>
    </>
  );
};

export default ValidationError;
