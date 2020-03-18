const jq = require('node-jq');

class JSONScanner {

    constructor(){}

    async getAssetsPath(filter, jsonFilePath, assetType) {
        let assetsPath = await jq.run(filter, jsonFilePath);
        assetsPath = assetsPath.substr(1);
        assetsPath = assetsPath.substr(0, assetsPath.length-1);
        
        switch (assetType) {
            case 'img' : 
            assetsPath += '/img';
            break;
        }
        
        return assetsPath; 
    }
}

module.exports = JSONScanner;