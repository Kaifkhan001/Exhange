import React from 'react'

const ChartNav = ( {market, currentPrice, ChangeIn24hours, High24Hour, Low24hour, volume} : { market: string; currentPrice: string; ChangeIn24hours: string, High24Hour: string; Low24hour: string; volume: string} ) => {
  return (
    <div className='w-full py-4 flex items-center gap-8 text-lg px-6 border-b-2 border-gray-600'>
        <div className='text-2xl font-semibold'>
           {market}
        </div>

        <div className='flex flex-col '>
            <span className='text-xl text-green-600'>{"$" + currentPrice}</span>
            {currentPrice}
        </div>

        <div className='flex flex-col  text-start '>
            <span className=' text-start text-sm text-gray-400'>24H Change</span>
            {ChangeIn24hours + " %"}
        </div>

        <div className='flex flex-col'>
            <span className=' text-start text-sm text-gray-400'>24H High</span>
            {High24Hour}
        </div>

        <div className='flex flex-col'>
            <span className=' text-start text-sm text-gray-400'>24H Low</span>
            {Low24hour}
        </div>

        <div className='flex flex-col text-start'>
            <span className=' text-start text-sm text-gray-400'>24H Volume</span>
            {volume}
        </div>
    </div>
  )
}

export default ChartNav
