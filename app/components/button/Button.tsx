import React from 'react'

const Button = ({ text, onClick, className, isActive, colorPref }: { text: string; onClick: (val: string) => void; className?: string; isActive?: boolean; colorPref: {bg: string, text: string};}) => {
  return (
    <button onClick={() => onClick(text)} type="button" className="text-center font-semibold rounded-lg focus:ring-green-200 focus:none focus:outline-none hover:opacity-90 disabled:opacity-80 disabled:hover:opacity-80 relative overflow-hidden  text-sm px-8 py-1.5  cursor-pointer"><div className={`absolute inset-0 ${ isActive ? colorPref.bg : ""} opacity-16`}></div><div className="flex flex-row items-center justify-center gap-4"><p className={`${isActive ? colorPref.text : "text-gray-500"} ${className}`}>{text}</p></div></button>
  )
}

export default Button
