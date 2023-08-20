import { KucoinSDK } from "./kucoin-sdk";
import { BinanceSDK } from "./binance-sdk";

class BinanceAdapter implements KucoinSDK {
    private exchanger: BinanceSDK;

    constructor(exchanger: BinanceSDK) {
        this.exchanger = exchanger;
    }

    getBalanceUsd(): number {
        const balance = this.exchanger.getBalanceByAsset('usd');
        return Number(balance);
    }

    getUserAssets(): { [key: string]: number; } {
        const assets = this.exchanger.getAssets();

        const assetM: { [key:string]: number } = {};

        for (const asset of assets) {
            assetM[asset.asset] = Number(asset.amount);
        }

        return assetM;
    }

    getPriceUsd(asset: string): number {
        const price = this.exchanger.getPriceByAsset(asset, 'usd');
        return Number(price);
    }
}

function clientCode() {
    const sdk = new BinanceAdapter(new BinanceSDK());

    console.log('My balance:', sdk.getBalanceUsd());
    console.log('My assets:', sdk.getUserAssets());
    console.log('BTC price:', sdk.getPriceUsd('btc'));
    console.log('ETH price:', sdk.getPriceUsd('eth'));
}

clientCode();