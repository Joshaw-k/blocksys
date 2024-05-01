import { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const chains = [
  "Select Chain",
  "Ethereum",
  "Binance",
  "Polygon",
  "Avalanche",
  "Fantom",
  "Arbitrum",
  "Cranos",
];

const Hero = () => {
  const [dropDown, setDropDown] = useState(false);
  const [chain, setChain] = useState("Select Chain");

  const handleDropDown = (e) => {
    if (!e.target.classList.contains("chain")) {
      setDropDown(false);
    }
  };

  return (
    <div
      className="container mx-auto my-10 min-h-[100vh]"
      onClick={handleDropDown}
    >
      <div className="">
        <h1 className="text-6xl text-center lg:text-9xl my-0 font-passion text-[#019DEA]">
          Blockchain
          <br />
          Rectification
        </h1>
      </div>
      <div className="w-95 mx-auto my-5 font-urbanist text-white text-center p-2">
        <p className="mb-8">
          Every digital artwork on Upside is authentic and truly unique.
        </p>

        <p className="mb-8">
          Blockchain technology makes this new approach to digital ownership
          possible.
          <br />
          Open and decentralized protocol for syncing various Wallets issues on
          Secure Server.
        </p>

        <p className="mb-8">
          This is not an app but a protocol that establishes a remote resolution
          <br />
          between all noncustodial wallet It is an online server which gets you
          across to every wallet <br />
          representative to enable effective complain and rectification of
          issues.
        </p>

        <p className="mb-8">
          You will be on a chat with an Artificial Intelligence Robot with zero
          Human interference.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-y-3 font-urbanist justify-between md:w-[50%] mx-auto">
        <Link
          to="/connectwallet"
          className="py-3 px-4 lg:px-8 md:w-[48%] bg-[#019DEA] rounded-full font-bold text-center"
        >
          Connect Wallet
        </Link>
        <div className="md:w-[48%] relative">
          <button
            className="pl-5 pr-1 py-1 w-full chain lg:gap-x-4 bg-transparent rounded-full font-bold inline-flex justify-between text-[#019DEA] ring-1 ring-inset ring-[#019DEA] items-center"
            onClick={() => setDropDown(!dropDown)}
          >
            {chain}{" "}
            {dropDown ? (
              <RiArrowUpSLine className="text-4xl bg-[#019DEA] text-white rounded-full" />
            ) : (
              <RiArrowDownSLine className="text-4xl chain bg-[#019DEA] text-white rounded-full" />
            )}
          </button>
          {dropDown && (
            <div className="bg-[#0F0F0F] border border-[rgba(48,48,48,0.9)] rounded-xl h-56 overflow-hidden overflow-y-auto absolute top-14 left-0 right-0 scrollbar-thin scrollbar-thumb-[#019DEA] z-30">
              {chains.map((item, index) => {
                return (
                  <div className="px-6 py-3" key={index}>
                    <h5
                      className="text-white font-semibold cursor-pointer hover:text-[#019DEA]"
                      onClick={() => setChain(item)}
                    >
                      {item}
                    </h5>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
