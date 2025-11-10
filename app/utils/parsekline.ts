import { KLine } from "./types";

export default function parseKline(KlineRaw: any[]){
      const parsedData: KLine[] = [];
      KlineRaw.map((x) => {
        parsedData.push({
            close: x[4],
            end: x[6],
            high: x[2],
            low: x[3],
            open: x[1],
            quoteVolume: x[7],
            start: x[0],
            trades: x[8],
            volume: x[5]
        });
      });
      return parsedData;
}