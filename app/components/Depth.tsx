import React, { useEffect, useState } from 'react'
import { getDepth, getTickers } from '../utils/httpClient';
import { type Depth } from '../utils/types';
import Asks from './Asks';
import Bids from './Bids';
import SignalingManager from '../utils/SignalingManager';

const Depth = ({ market }: {market: string}) => {
    const [bids, setBids] = useState<[string, string][]>([]);
    const [asks, setAsks] = useState<[string,string][]>([]);
    const [price, setPrice] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      console.log("Started running:- ");
      SignalingManager.getInstace().registerCallback("depthUpdate", (data: any) => {
      setPrice(
       ((Number(data.bids[0][0]) + Number(data.asks[0][0])) / 2).toString());

        setBids((originalBids) => {
          const UpdatedBids = [...(originalBids || [])];

          if(UpdatedBids.length === 0){
            return data.bids;
          }
          for(let i=0;i<UpdatedBids.length;i++){
            for(let j=0;j<data.bids.length;j++){
              if(UpdatedBids[i][0] === data.bids[j][0]){
                UpdatedBids[i][1] = data.bids[j][1];
                break;
              }
            }
          }
          return UpdatedBids;
        });

        setAsks((originalAsks) => {
          const updatedAsks = [...(originalAsks || [])];

          if(updatedAsks.length == 0){
            return data.asks;
          }

          for(let i=0;i<updatedAsks.length;i++){
            for(let j=0;j<data.asks.length;j++){
              if(updatedAsks[i][0] == data.asks[j][0]){
                   updatedAsks[i][1] = data.asks[j][1];
                   break;
              }
            }
          }
          return updatedAsks;
        });
        console.log("Asks:- ", asks);
        console.log("Bids:- ", bids);
      }, `DEPTH-${market}`);

     console.log("Asks and bids:- ",)
     console.log(asks)
     console.log(bids);
      SignalingManager.getInstace().sendMessage({"method":"SUBSCRIBE","params":["!miniTicker@arr@3000ms","solusdc@depth"],"id":130}	)
      return () => {
           SignalingManager.getInstace().sendMessage({"method":"UNSUBSCRIBE","params":["!miniTicker@arr@3000ms","solusdc@depth"],"id":130});
           SignalingManager.getInstace().deRegisterCallback("depthUpdate", `DEPTH-${market}`);
      }
    }, []);
    

  return (
     <div className="orderbook col-span-2 min-h-full bg-black border-l-2 border-white py-1 px-2 overflow-y-auto">
            <TableHeader />
            {asks && <Asks asks={asks}/>}
            {price ? <div className='py-1'>{Number(price).toFixed(2)}</div> : <div className='py-6'></div>}
            {bids && <Bids bids={bids}/>}

    </div>
  )
}

export default Depth;



function TableHeader(){
    return <div className='w-full flex justify-between text-sm'>
        <div className='text-white'>Prize</div>
        <div className='text-slate-500'>Size</div>
        <div className='text-slate-500'>Total</div>
    </div>
}
