const { address, getContract } = require("./utils");
const { sendSignTransaction } = require("./signTransaction");

const transfer = async () => {
  try {
    const from = address[0];
    const to = address[1]
    const amount = 10;

    const rawTrans = await getContract().methods.sendCoin(to, amount);
    return await sendSignTransaction(rawTrans, from, address[1], amount);
  } catch (err) {
    console.error(err.message);
  }
};

transfer();
