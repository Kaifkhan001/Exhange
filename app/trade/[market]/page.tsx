"use client"

import ChartNav from '@/app/components/ChartNav';
import Depth from '@/app/components/Depth';
import SwapUI from '@/app/components/SwapUI';
import TradeView from '@/app/components/TradeView';
import { useParams } from 'next/navigation'
import React from 'react'

const Trade = () => {
  const market = useParams();
  return (
    <div className='w-full h-screen bg-slate-800 grid grid-cols-10'>
       <div className="chart w-full col-span-8 flex flex-col h-full">
        <ChartNav market={market.market as string} currentPrice='242.42' High24Hour='255.34' Low24hour='230.34' volume='234234' ChangeIn24hours='34212'  />
        <div className='w-full grid grid-cols-8 h-full'>
         <TradeView market='SOL_USD'/>
         <Depth market='SOL_USDC'/>  
         {/* SOL_USDC */}
        </div>
       </div>
       <SwapUI />
       
    </div>
  )
}

export default Trade

