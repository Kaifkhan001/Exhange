"use client"

import ChartNav from '@/app/components/ChartNav';
import { useParams } from 'next/navigation'
import React from 'react'

const Trade = () => {
  const market = useParams();
  return (
    <div className='w-full h-screen bg-red-50 grid grid-cols-10'>
       <div className="chart w-full col-span-8 flex flex-col h-full">
        <ChartNav market={market.market as string} currentPrice='242.42' High24Hour='255.34' Low24hour='230.34' volume='234234' ChangeIn24hours='34212'  />
        <div className='w-full grid grid-cols-5 h-full'>
         <div className="chartarea bg-red-400 col-span-3 min-h-full">
dnfsjfnskjnfksjn
         </div>
         <div className="orderbook bg-green-500 col-span-2 min-h-full">
sdnskjdnkjsnkjn
         </div>
        </div>
       </div>
       <div className="buy-sell col-span-2 bg-green-50">

       </div>
    </div>
  )
}

export default Trade

