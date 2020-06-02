const { address, getContract } = require("./utils");

const {
  getSignedTx,
  sendSignedTx,
  directSendSignedTx,
} = require("./signTransaction");

(async () => {
  const from = address[0];
  const to = address[1];
  const amount = 10;

  const rawTx = await getContract().methods.sendCoin(to, amount);
  const signedTx = await getSignedTx(rawTx, from);

  // REST API call: /transfer
  return await sendSignedTx(signedTx, from, to, amount);

  // direct mode - without REST API
  // return directSendSignedTx(signedTx);
})()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });
