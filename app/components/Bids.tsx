import React from 'react'

const Bids = ({ bids }: {bids: [string,string][]}) => {
  let currentTotal = 0;
  const relevantBids = bids.slice(0,15);

  relevantBids.reverse();

  const BidsWithTotal: [string, string, number][] = [];
  for (let i = relevantBids.length - 1; i>=0; i--)  {
        const [price, quantity] = relevantBids[i];
        BidsWithTotal.push([price, quantity, currentTotal += Number(quantity)]);
    }
    const maxTotal = relevantBids.reduce((acc, [_, quantity]) => acc + Number(quantity), 0);
   
    BidsWithTotal.reverse();


   return <div>
        {BidsWithTotal.map(([price, quantity, total]) => <Bid maxTotal={maxTotal} key={price} price={price} quantity={quantity} total={total} />)}
    </div>
}

export default Bids


function Bid({price, quantity, total, maxTotal}: {price: string, quantity: string, total: number, maxTotal: number}) {
    return <div
    style={{
        display: "flex",
        position: "relative",
        width: "100%",
        backgroundColor: "transparent",
        overflow: "hidden",
    }}
>
    <div
        style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: `${(100 * total) / maxTotal}%`,
        height: "100%",
        background: "rgba(68, 228, 75, 0.325)",
        transition: "width 0.3s ease-in-out",
        }}
    ></div>
    <div className="flex justify-between text-xs w-full">
        <div className='text-green-600 font-semibold'>
            {Number(price).toFixed(2)}
        </div>
        <div>
            {Number(quantity).toFixed(2)}
        </div>
        <div>
            {total?.toFixed(2)}
        </div>
    </div>
    </div>
}