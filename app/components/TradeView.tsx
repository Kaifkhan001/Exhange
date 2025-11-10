import React, { useEffect, useRef } from 'react'
import { ChartManager } from '../utils/ChartManager';
import { KLine } from '../utils/types';
import SignalingManager from '../utils/SignalingManager';
import { getkLines } from '../utils/httpClient';
import parseKline from '../utils/parsekline';
import { timeStamp } from 'console';
// import { createChart } from 'lightweight-charts';
// import { getkLines } from '../utils/httpClient';
// import type { KLine } from '../utils/types';

const TradeView = ({ market }: { market: string }) => {
  const chartRef = useRef<HTMLDivElement>(null)
  const chartManagerRef = useRef<ChartManager>(null);

  useEffect(() => {
    const init = async() => {
      try {
        let KlineRaw = [];
        KlineRaw = await  getkLines("SOLUSDC", 150);
        const KlineData: KLine[] = parseKline(KlineRaw);
        // SignalingManager.getInstace().registerCallback("kline", (data: KLine) => {
         if(chartRef){
           if(chartManagerRef.current)
            chartManagerRef.current.destroy();
          }
          // KlineData.push(data);
          // if(KlineData.length > 40) KlineData.shift();

          const chartManager = new ChartManager(
            chartRef.current,
            [...KlineData.map((x) => ({
              close: parseFloat(x.close),
              high: parseFloat(x.high),
              low: parseFloat(x.low),
              open: parseFloat(x.open),
              timestamp: new Date(x.end)
            }))
            //   ...data?.map((x) => ({
            //     close: parseFloat(x.close),
            //     high: parseFloat(x.high),
            //     low: parseFloat(x.low),
            //      open: parseFloat(x.open),
            //      timestamp: new Date(x.end),
            //   })
            // ),
            ].sort((x,y) => (x.timestamp < y.timestamp ? -1 : 1)) || [],
            {
               background: "#0e0f14",
            color: "white",
            }
          )
          chartManagerRef.current = chartManager;

        // }, `KLINE-${market}`);

        SignalingManager.getInstace().sendMessage({"method":"SUBSCRIBE","params":["solusdc@kline_1d"],"id":3});
      } catch (e) { }

    }

    init();

    return () => {
       SignalingManager.getInstace().sendMessage({"method":"UNSUBSCRIBE","params":["solusdc@kline_1d"],"id":3});
       SignalingManager.getInstace().deRegisterCallback("kline", `KLINE-${market}`);
          
    }
  }, [market, chartRef]);
  
  

  return (
    <>
    <div
      ref={chartRef}
      className="chartarea bg-gray-900 text-white flex items-center justify-center col-span-6"
    >
    </div>
    </>
  );
};

export default TradeView;
