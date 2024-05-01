import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const WalletError = () => {
  return (
    <>
    <Link to="/" className='absolute left-5 top-20 w-[4rem] h-[4rem]'><img src={logo} alt="logo.png" className='w-full' /></Link>
    <div className='min-h-screen'>
      <div className='bg-[#FFE8E8] w-[80%] max-w-lg md:mt-10 mt-28 rounded-full flex justify-between items-center py-3 px-5 m-auto'>
        <div className='flex justify-between items-center gap-x-5'>
            <div><RiErrorWarningFill className='text-[#CF1212] text-2xl'/></div>
            <small className='text-[#151515] md:text-md'>Please click on the connect button to connect!</small>
        </div>
        <div className=''>
            <AiOutlineClose className='text-[#151515] text-lg'/>
        </div>
      </div>
    </div>
    </>
  )
}

export default WalletError
