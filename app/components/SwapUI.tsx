import React, { useState } from 'react'
import Button from './button/Button';
import { IoIosSwap } from "react-icons/io";

const SwapUI = () => {
  const [currentSide, setCurrentSide] = useState<"BUY" | "SELL">("BUY");
  const [currentBuyType, setCurrentBuyType] = useState<"LIMIT" | "MARKET">("LIMIT");

  const handleClick = (val: string) => {
      if(val == "BUY" || val == "SELL") setCurrentSide(val);
      if(val == "Limit" || val == "Market") setCurrentBuyType(val.toUpperCase() as "LIMIT" | "MARKET");


  }

  return (
    <div className="buy-sell col-span-2 bg-black/80 mt-22 px-4 py-2">
     <nav className='flex w-full items-center justify-between gap-2'>
      <Button text='BUY' onClick={handleClick} isActive={currentSide == "BUY"} className='px-12 py-2' colorPref={{bg: "bg-green-500", text: "text-green-500"}}/>
      <Button text='SELL' onClick={handleClick} isActive={currentSide == "SELL"} className='px-16 py-2' colorPref={{bg: "bg-red-500", text: "text-grereden-500"}}/>
     </nav>
     <span className='py-2 flex items-center  justify-center gap-2'>
       <Button text='Limit' onClick={handleClick} isActive={currentBuyType == "LIMIT"} colorPref={{bg: "bg-gray-400", text: "text-white"}} />
       <Button text='Market' onClick={handleClick} isActive={currentBuyType == "MARKET"} colorPref={{bg: "bg-gray-400", text: "text-white"}}/>
     </span>
     <p className='py-3'>Balance:- </p>
     <p className='flex gap-2 items-center text-xl'>Quantity <IoIosSwap color='white'/></p>
     <input step="0.01" placeholder="0" className="border-base-background-l2 bg-base-background-l2 placeholder-med-emphasis focus:border-accent-blue h-12 w-full rounded-lg border-2 border-solid pr-10 text-left ring-0 transition focus:ring-0 text-2xl px-2 mt-3"  type="number" value="" />
    </div>
  )
}

export default SwapUI
