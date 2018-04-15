//uses blockcypher API to interact with BTC Blockchain

const MAINNET = "mainnet";
const TESTNET = "testnet"

var NetworkInfo = require('./src/networkinfo');
var BlockHeight = require('./src/blockheight');
var BlockHash = require('./src/BlockHash');
var Transaction = require('./src/transaction');
var PublicAddress = require('./src/address');

var netinfo = new NetworkInfo();
var bheight = new BlockHeight();
var bhash = new BlockHash();
var transaction = new Transaction();
var pubAddr = new PublicAddress();

netinfo.getNetworkInfo(MAINNET);
bheight.getBlockHeight(MAINNET, 500);
bhash.getBlockHash(MAINNET, "0000000000000000189bba3564a63772107b5673c940c16f12662b3e8546b412");
transaction.getTransaction(MAINNET, "f854aebae95150b379cc1187d848d58225f3c4157fe992bcd166f58bd5063449");
pubAddr.getPubAddress(MAINNET, "1DEP8i3QJCsomS4BSMY2RpU1upv62aGvhD");
