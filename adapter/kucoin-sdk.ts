export class KucoinSDK {
    getBalanceUsd(): number {
        return 100;
    }

    getUserAssets(): { [key:string]: number } {
        return {
            btc: 0.001,
            eth: 0.12,
        };
    }

    getPriceUsd(asset: string): number {
        switch (asset) {
            case 'btc':
                return 26000;
            case 'eth':
                return 1800;
            default:
                return 0;
        }
    }
}