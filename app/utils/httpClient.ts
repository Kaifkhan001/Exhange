import axios from "axios";
import type { Depth, Trade, KLine, Tickers } from './types'
import { BASE_URI } from "./Const";

export async function getDepth(market: string): Promise<Depth>{
    console.log("Going to make a get req on :- ", `${BASE_URI}/api/v1/depth?symbol=${market}`)
    const res = await axios.get(`http://api.binance.com/api/v3/depth?symbol=${market}`);
    return res.data;
}

export async function getTrades(market: string): Promise<Trade[]>{
    const res = await axios.get(`${BASE_URI}/api/v1/trades?symbol=${market}`);
    console.log("Url in the function:- " + `${BASE_URI}/api/v1/trades?symbol=${market}`)
    return res.data;
}


export async function getkLines(market: string, limit: number ): Promise<KLine[]>{
    const res = await axios.get(`https://api.binance.com/api/v3/klines?symbol=${market}&interval=1h&limit=${limit}`);
    const data: KLine[] = res.data;

    return data.sort((x,y) => (Number(x.end) < Number(y.end) ? -1 : 1))
}

export async function getTickers(market: string){
    const res = await axios.get(`https://api.binance.com/api/v3/ticker/24hr?symbol=SOLUSDT`);
    return res.data;
}
