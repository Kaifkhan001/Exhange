"use client"

import React from 'react'
// import Button from './Button'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className=" dark:bg-gray-900 w-full ">
        <div className="flex flex-wrap justify-between   w-full items-center mx-auto p-4">
               <div className='flex gap-5 items-center justify-center'>
                 <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Exchange</span>
                 <span onClick={() => router.push('/market')} className='cursor-pointer hover:text-gray-600'>Market</span>
                 <span onClick={() => router.push("/trade/SOL_USDC")} className='cursor-pointer hover:text-gray-600'>Trade</span>
               </div>
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
                {/* <Button text='Get Started' baseColor='red' />
                <Button text='Sign-In' baseColor='green'/> */}
                <button type="button" className="text-center font-semibold rounded-lg focus:ring-green-200 focus:none focus:outline-none hover:opacity-90 disabled:opacity-80 disabled:hover:opacity-80 relative overflow-hidden h-8 text-sm px-3 py-1.5 mr-4 cursor-pointer"><div className="absolute inset-0 bg-green-500 opacity-16"></div><div className="flex flex-row items-center justify-center gap-4"><p className="text-green-500">Deposit</p></div></button>
                <button type="button" className="text-center font-semibold rounded-lg focus:ring-blue-200 focus:none focus:outline-none hover:opacity-90 disabled:opacity-80 disabled:hover:opacity-80 relative overflow-hidden h-8 text-sm px-3 py-1.5 mr-4 cursor-pointer"><div className="absolute inset-0 bg-blue-500 opacity-16"></div><div className="flex flex-row items-center justify-center gap-4"><p className="text-blue-500">Withdraw</p></div></button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
