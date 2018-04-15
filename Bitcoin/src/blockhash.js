'use strict';

const ERRSTRING = "ERROR!";
const BLOCKCYPHERURL = "https://api.blockcypher.com/v1/btc/";
const BLOCKCYPHERMAINNET = "main";
const BLOCKCYPHERTESTNET = "test3"
const MAINNET = "mainnet";
const TESTNET = "testnet"

var request  = require ('request');

class BlockHash {
    constructor() {
        this.api = BLOCKCYPHERURL;
    }

    getNetwork(network) {
        if (network === MAINNET) {
            return BLOCKCYPHERMAINNET;            
        } else //unless asked for, always return testnet
        {
            return BLOCKCYPHERTESTNET;
        }
    }

    getBlockHash(network_req, blockHash) {
        let callerNetwork = this.getNetwork(network_req);
        submitRequest(this.api + callerNetwork + "/blocks/" + blockHash);
    }

}

//function which takes the URL and returns the response body
function submitRequest(url) {
    var request = require("request");
    var url = url;
    request.get(url, (err, resp, body) => {
        console.log((body));
    });

}

module.exports = BlockHash;