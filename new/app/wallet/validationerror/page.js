import React from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import Link from "next/link";
export default function page() {
  return (
    <div>
      <div className="min-h-screen">
        <div className="bg-[rgba(48,48,48,0.3)] w-[70%] max-w-xs md:mt-10 mt-28 flex flex-col items-center rounded-3xl py-8 px-3 m-auto">
          <div>
            <RiErrorWarningFill className="text-[#CF1212] text-5xl" />
          </div>
          <p className="mt-3 text-center font-semibold text-white">
            Unable To Validate Wallet!!! ,<br />
            Try A Different Wallet.
          </p>
          <Link
            href="/wallet/"
            className="bg-[#FF1E1E] py-4 px-14 mt-5 rounded-full text-white"
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}
