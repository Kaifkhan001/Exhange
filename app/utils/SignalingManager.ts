import { RawTickers } from "./types";

const BASE_URL = "wss://stream.binance.com/stream";

export default class SignalingManager{
    private ws : WebSocket;
    private static instance : SignalingManager;
    private intialized: boolean = false;
    private id : number;
    private bufferedMessages: any[] = [];
    private callbacks: any = {};

    
    private constructor(){
        this.ws = new WebSocket(BASE_URL);
        this.bufferedMessages = [];
        this.id = 1;
        this.init();
    }

    public static getInstace(){
        if(!this.instance){
            this.instance = new SignalingManager();
        };

        return this.instance;
    }
    init(){
        this.ws.onopen = () => {
            this.intialized = true;
            console.log("Connection made");
            if(this.bufferedMessages.length > 0){
                this.bufferedMessages.forEach((message) => {
                    this.ws.send(JSON.stringify(message));
                })
            }
        }

        this.ws.onmessage = (event) => {
            const message = JSON.parse(event.data);
            console.log("Message:- ", message);
            const type = message.data?.e ?? message.data[0].e;
            console.log("Type in each case:- ", type);
            if(this.callbacks[type]){
               if(type == "depthUpdate"){
                 this.callbacks[type].forEach(({ callback }: { callback: any}) => {
                       const updatedBids = message.data.b;
                       const updatedAsks = message.data.a;
                       callback({ bids: updatedBids, asks: updatedAsks });
                  })
               }
               if(type == "24hrMiniTicker"){
                    this.callbacks.forEach(({ callback } : { callback: any}) => {
                    let data: RawTickers | null = null;
                    for(let i=0;i<message.data.length;i++){
                        if(message.data[i]["s"] == "SOLUSDC"){
                         data = message.data[i];
                         break;
                        }
                    }
                    if(data){
                            const newTicker = {
                            lastprice: data.c,
                            high: data.h,
                            low: data.l,
                            volume: data.h,
                            quoteVolume: data.q,
                            symbol: data.s
                        }
                        callback(newTicker);
                        }
                })
               }
            }
        }
    }

    sendMessage(message: any){
        console.log("Message subscribed:- ", message);
        const messageToSend = {
            ...message,
            id : this.id++
        };

        if(!this.intialized){
            this.bufferedMessages.push(messageToSend);
            return;
        }
        this.ws.send(JSON.stringify(message));
    }

    registerCallback(type: string, callback: any, id: string){
        this.callbacks[type] = this.callbacks[type] || [];
        this.callbacks[type].push({ callback, id });
    }

    deRegisterCallback(type: string, id: string){
        if(this.callbacks[type]){
           this.callbacks[type] = this.callbacks[type]?.filter(obj => obj.id != id);
        }
    }

}