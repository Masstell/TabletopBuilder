import fs from 'fs';

// file for game specific resources that need to be loaded for testing

// ** Imports **
//
// example: import jsonAsset from '../assets/json/json-asset.json';

// ** Hooks **
//
// useful for loading specific kinds of resources

// ** addJsonAssetsToGameCache **
//
// called by env for loading project specific json assets

export function addJsonAssetsToGameCache (game) {
    // placeholder for adding atlas assets needed in game cache for testing of things to succeed.
    // you will need to add imports of JSON files to the top of this file.
    //
    // example: game.cache.addJON('jsonAsset', null, jsonAsset);
}

// ** addPNGAtlasAsset **
//
// helper function you can call in addAtlasAssetsToGameCache to add one atlas asset

export function addPNGAtlasAsset (game, pngFile, jsonFile, cacheKey) {
    return new Promise((resolve, reject) => {
        // manually load sprite asset
        var img, json;

        fs.readFile(pngFile, 'base64', function (err, data) {
            if (err) {
                reject(err);
            }

            img = data;

            fs.readFile(jsonFile, 'utf8', function (err, data) {
                if (err) {
                    reject(err);
                }

                json = JSON.parse(data);

                game.cache.addTextureAtlas(cacheKey, pngFile, 'data:image/png;base64,' + img, json, Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);

                resolve(game);
            });
        });
    });
}

// ** addPNGAtlasAssetsToGameCache **
//
// called by env for loading project specific atlas assets

export function addPNGAtlasAssetsToGameCache (game) {
    // placeholder for adding atlas assets needed in game cache for the testing of things to succeed.
    // put each call to addAtlasAsset in the anonymous array passed to Promise.all

    return Promise.all([
        new Promise((resolve, reject) => { resolve(); })
        // example: addPNGAtlasAsset(game, '../assets/images/game-atlas.png', '../assets/json/game-atlas.json', 'gameAtlas'),
    ]);
}
