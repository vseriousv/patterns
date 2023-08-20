export class BinanceSDK {
    getBalanceByAsset(assetTo: string): string {
        switch (assetTo) {
            case 'btc':
                return '0.0005';
            case 'usd':
                return '120';
            case 'eur':
                return '110';
            default: 
                return '120';
        }
    }

    getAssets(): { asset: string; amount: string}[] {
        const assets: { asset: string; amount: string}[] = [];
        assets.push({ asset: 'btc', amount: '0.001' });
        assets.push({ asset: 'eth', amount: '0.12' });

        return assets;
    }

    getPriceByAsset(assetfrom: string, assetTo: string): string {
        switch (assetfrom) {
            case 'btc':
                if (assetTo == 'usd') {
                    return '26000';
                } else if (assetTo == 'eur') {
                    return '22000';
                } else {
                    return '1';
                }
            case 'eth':
                if (assetTo == 'usd') {
                    return '1800';
                } else if (assetTo == 'eur') {
                    return '1500';
                } else {
                    return '1';
                }
            default:
                return '0';
         }
    }
}