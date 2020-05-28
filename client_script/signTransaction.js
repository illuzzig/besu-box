const { web3, privateKeys, metaCoinAddress, host, port } = require("./utils");
const axios = require("axios");
const assert = require("assert");

const sendSignTransaction = async (rawTrans, from, to, amount) => {
  assert(
    rawTrans && from && to && amount,
    "Need to specify each param of sendSignTransaction-func"
  );
  assert(web3.utils.isAddress(from), "Sender's address is not valid");
  assert(web3.utils.isAddress(to), "Receiver's address is not valid");
  assert(amount > 0, "Amount is less than or equal to zero");

  //console.log(await web3.eth.getBlock("latest"));
  const signed = await web3.eth.accounts.signTransaction(
    {
      to: metaCoinAddress,
      from: from,
      value: "0",
      data: rawTrans.encodeABI(),
      gasPrice: web3.eth.getGasPrice(), //web3.utils.toWei("20", "gwei"),
      gas: Math.round((await rawTrans.estimateGas({ from })) * 1.5),
      nonce: web3.utils.toHex(
        await web3.eth.getTransactionCount(from, "pending")
      ),
    },
    privateKeys[0]
  );
  await sendSigned(signed.rawTransaction, from, to, amount);
};

const sendSigned = async (rawTxHex, from, to, amount) => {
  try {
    const resp = await axios.post(`http://${host}:${port}/transfer`, {
      sender: from,
      receiver: to,
      amount: amount,
      tx: rawTxHex,
    });
    console.log(resp.data);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  sendSignTransaction: sendSignTransaction,
};
