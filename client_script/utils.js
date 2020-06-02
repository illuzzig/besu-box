const Web3 = require("web3");
const metacoinArtifact = require("../build/contracts/MetaCoin.json");

const web3_provider_host =
  process.env.PRODUCTION_WEB3_PROVIDER_HOST || "http://127.0.0.1";
const web3_provider_port = process.env.PRODUCTION_WEB3_PROVIDER_PORT || 8545;
const provider = `${web3_provider_host}:${web3_provider_port}`;

const web3 = new Web3(new Web3.providers.HttpProvider(provider));

// ******************************************************************** //
//replace with your smart contract address
const metaCoinAddress = "0xDE87AF9156a223404885002669D3bE239313Ae33";
// ******************************************************************** //

const privateKeys = [
  "8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63",
  "c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3",
  "ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f",
];

const address = [
  web3.eth.accounts.privateKeyToAccount(privateKeys[0]).address,
  web3.eth.accounts.privateKeyToAccount(privateKeys[1]).address,
  web3.eth.accounts.privateKeyToAccount(privateKeys[2]).address,
];

function getContract() {
  let c = new web3.eth.Contract(metacoinArtifact.abi, metaCoinAddress);
  contract = c.clone();
  return contract;
}

module.exports = {
  privateKeys: privateKeys,
  address: address,
  web3: web3,
  getContract: getContract,
  metaCoinAddress: metaCoinAddress,
  host: process.env.APP_HOST || "127.0.0.1",
  port: process.env.APP_PORT || 3000,
};
