import React, { useEffect, useRef, useState } from 'react'
// import { createChart } from 'lightweight-charts';
// import { getkLines } from '../utils/httpClient';
// import type { KLine } from '../utils/types';

const TradeView = () => {
  // const chartRef = useRef<HTMLDivElement | null>(null);
  // const seriesRef = useRef<any>(null);

  // const [formattedData, setFormattedData] = useState<KLine[] | null>(null);

  // 1. Create chart once when ref is ready
  // useEffect(() => {
  //   if (!chartRef.current) return;

  //   const chart = createChart(chartRef.current, {
  //     width: 600,
  //     height: 400,
  //   });

  //   seriesRef.current = chart.addCandlestickSeries();

  // }, []);

  // 2. Fetch data
  // useEffect(() => {
  //   getkLines("1h").then((res) => setFormattedData(res));
  // }, []);

  // // 3. Update chart when data arrives
  // useEffect(() => {
  //   if (!formattedData || !seriesRef.current) return;
  //   seriesRef.current.setData(formattedData);
  // }, [formattedData]);

  return (
    <div
      // ref={chartRef}
      className="chartarea bg-gray-900 text-white flex items-center justify-center col-span-6 min-h-full"
    >
      Chart Area
    </div>
  );
};

export default TradeView;
