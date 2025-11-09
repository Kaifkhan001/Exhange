"use client";

import { useEffect, useRef } from 'react';
import { createChart, IChartApi, ISeriesApi, CandlestickData } from 'lightweight-charts';
import { type KLine } from './../utils/types'; // Your KLine type

interface TradingViewChartProps {
    data: KLine[];
    symbol: string;
}

export default function TradingViewChart({ data, symbol }: TradingViewChartProps) {
    const chartContainerRef = useRef<HTMLDivElement>(null);
    const chartRef = useRef<IChartApi | null>(null);
    const candlestickSeriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);

    useEffect(() => {
        if (!chartContainerRef.current) return;

        // Create chart
        const chart = createChart(chartContainerRef.current, {
            width: chartContainerRef.current.clientWidth,
            height: 500,
            layout: {
                background: { color: '#1a1a1a' },
                textColor: '#d1d4dc',
            },
            grid: {
                vertLines: { color: '#2a2a2a' },
                horzLines: { color: '#2a2a2a' },
            },
            crosshair: {
                mode: 1,
            },
            rightPriceScale: {
                borderColor: '#2a2a2a',
            },
            timeScale: {
                borderColor: '#2a2a2a',
                timeVisible: true,
                secondsVisible: false,
            },
        });

        chartRef.current = chart;

        // Create candlestick series
        const candlestickSeries = chart.addCandlestickSeries({
            upColor: '#26a69a',
            downColor: '#ef5350',
            borderVisible: false,
            wickUpColor: '#26a69a',
            wickDownColor: '#ef5350',
        });

        candlestickSeriesRef.current = candlestickSeries;

        // Handle resize
        const handleResize = () => {
            if (chartContainerRef.current && chartRef.current) {
                chartRef.current.applyOptions({
                    width: chartContainerRef.current.clientWidth,
                });
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            if (chartRef.current) {
                chartRef.current.remove();
            }
        };
    }, []);

    useEffect(() => {
        if (!candlestickSeriesRef.current || !data.length) return;

        // Transform KLine data to TradingView format
        const chartData: CandlestickData[] = data.map((kline) => ({
            time: Math.floor(Number(kline.end) / 1000), // Convert to seconds
            open: parseFloat(kline.open),
            high: parseFloat(kline.high),
            low: parseFloat(kline.low),
            close: parseFloat(kline.close),
        }));

        // Sort by time
        chartData.sort((a, b) => (a.time as number) - (b.time as number));

        // Update chart data
        candlestickSeriesRef.current.setData(chartData);

        // Fit content to visible range
        if (chartRef.current) {
            chartRef.current.timeScale().fitContent();
        }
    }, [data]);

    return (
        <div className="w-full">
            <div className="mb-4 px-4">
                <h2 className="text-xl font-bold text-white">{symbol}</h2>
            </div>
            <div ref={chartContainerRef} className="relative" />
        </div>
    );
}