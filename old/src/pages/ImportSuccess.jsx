import React from 'react'
import { VscPassFilled } from "react-icons/vsc";
import { Link, useParams } from 'react-router-dom';
import logo from '../assets/logo.png'

const ImportSuccess = () => {
  const {wallet} = useParams()
  return (
    <>
    <Link to="/" className='absolute left-5 top-20 w-[4rem] h-[4rem]'><img src={logo} alt="logo.png" className='w-full' /></Link>
    <div className='min-h-screen'>
      <div className='bg-[#FFE8E8] w-[70%] max-w-xs flex flex-col items-center rounded-3xl py-8 px-3 m-auto mt-5'>
        <div><VscPassFilled className='text-[rgba(0,200,32,1)] text-5xl'/></div>
        <p className='mt-3 text-center font-semibold'>Your {wallet} wallet has successfully been imported</p>
        <Link to="/" className='bg-[rgba(0,200,32,1)] py-4 px-14 mt-5 rounded-full text-white'>Cancel</Link>
      </div>
    </div>
    </>
  )
}

export default ImportSuccess
