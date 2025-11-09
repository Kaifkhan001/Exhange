export interface Depth {
    bids: [string,string][],
    asks: [string,string][],
    lastUpdateId: string
};

export interface Trade {
    id: number;
    isBuyerMaker: boolean;
    price: string;
    quantity: string;
    quoteQuantity: string;
    timestamp: number
}


export interface KLine {
    openTime: number;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    closeTime: number;
    quoteAssetVolume: string;
    numberOfTrades: number;
    takerBuyBaseAssetVolume: string;
    takerBuyQuoteAssetVolume: string;
    ignore: string;
}


export interface Tickers {
    firstPrice: string;
    high: string;
    lastPrice: string;
    low: string;
    priceChange: string;
    priceChangePercent: string;
    quoteVolume: string;
    symbol: string;
    trades: string;
    volume: string;
}

export interface RawTickers{
      "e": string;
      "E": number;
      "s": string;
      "c": string;
      "o": string;
      "h": string;
      "l": string;
      "v": string;
      "q": string;
}

export interface KLine {
    close: string;
    end: string;
    high: string;
    low: string;
    open: string;
    start: string;
    trades: string;
    volume: string;
}