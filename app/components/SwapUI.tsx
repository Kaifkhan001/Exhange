import React, { useState } from 'react'
import Button from './button/Button';

const SwapUI = () => {
  const [currentButton, setCurrentButton] = useState<"BUY" | "SELL">("BUY");

  const handleClick = (val: "BUY" | "SELL") => {
      setCurrentButton(val);
      
  }

  return (
    <div className="buy-sell col-span-2 ">
     <nav className='flex w-full items-center justify-between px-6 pt-20'>
      <Button text='BUY' onClick={handleClick} isActive={currentButton == "BUY"}/>
      <Button text='SELL' onClick={handleClick} isActive={currentButton == "SELL"}/>



     </nav>
    </div>
  )
}

export default SwapUI
