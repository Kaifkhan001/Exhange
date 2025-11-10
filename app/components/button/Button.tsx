import React from 'react'

const Button = ({ text, onClick, className, isActive }: { text: "BUY" | "SELL"; onClick: (val: "BUY" | "SELL") => void; className?: string; isActive?: boolean;}) => {
  return (
    <button onClick={() => onClick(text)} type="button" className="text-center font-semibold rounded-lg focus:ring-green-200 focus:none focus:outline-none hover:opacity-90 disabled:opacity-80 disabled:hover:opacity-80 relative overflow-hidden h-8 text-sm px-8 py-1.5 mr-4 cursor-pointer"><div className={`absolute inset-0 ${isActive ? (text == "BUY" ? "bg-green-500" : "bg-red-500") : "bg-gray-500"} opacity-16 ${className}`}></div><div className="flex flex-row items-center justify-center gap-4"><p className={`${isActive ? (text == "BUY" ? "text-green-500" : "text-red-500") : "text-gray-500"}`}>{text}</p></div></button>
  )
}

export default Button
