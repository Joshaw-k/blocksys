import { wallets } from "../utils/wallets";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";

export default function page() {
  return (
    <div>
      <Link href="/" className="absolute left-5 top-20 w-[4rem] h-[4rem]">
        <Image
          width={90}
          height={90}
          src={logo}
          alt="logo.png"
          className="w-full"
        />
      </Link>
      <div>
        <h1 className="text-[#019DEA] text-center font-semibold text-xl md:text-2xl lg:text-3xl my-10">
          Wallet Connect
        </h1>
        <div className="px-10 mb-10 py-6 max-w-2xl w-[90%] mx-auto bg-[rgba(48,48,48,0.3)] border border-[#019DEA] rounded-3xl">
          <h3 className="text-white mb-6">Connect to a wallet</h3>
          {wallets.map((item, index) => {
            const { icon, title } = item;
            return (
              <Link
                href={`/wallet/initialization/${index}`}
                className="flex justify-between px-6 py-3 mb-2 cursor-pointer items-center bg-[rgba(48,48,48,0.3)] hover:bg-[rgba(1,157,234,0.5)] rounded-full"
                key={index}
              >
                <div className="flex gap-x-5 items-center">
                  <div className="w-3 h-3 rounded-full bg-[#80FF77]"></div>
                  <h5 className="text-white font-semibold">{title}</h5>
                </div>
                <div className="w-[25px] h-[25px]">
                  <Image
                    width={30}
                    height={30}
                    src={icon}
                    alt="logo.png"
                    className="w-full"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
