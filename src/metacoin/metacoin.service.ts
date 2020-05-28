import { Injectable, BadRequestException } from '@nestjs/common';
import * as truffleContract from 'truffle-contract';
import * as metacoinArtifact from '../../build/contracts/MetaCoin.json';
import web3 from '../config/utility'
import { TokenTransferDto } from './dto/token-transfer.dto';

const MetaCoin = truffleContract(metacoinArtifact);
MetaCoin.setProvider(web3.currentProvider);

@Injectable()
export class MetaCoinService {

  async getBalance(account: string): Promise<string> {
    try {
      const instance = await MetaCoin.deployed();
      const value = await instance.getBalance.call(account, { from: account });
      const balance = value.toString();

      return JSON.stringify({
        address: account,
        balance: balance
      });
    } catch (error) {
      console.log(error)
      throw new BadRequestException({ description: 'Unable to get balance of account: '+ account});
    }
  }


  async getBalanceInEth(account: string): Promise<string> {
    try {
      const instance = await MetaCoin.deployed();
      const value = await instance.getBalanceInEth.call(account, { from: account });
      const balance = value.toString();

      return JSON.stringify({
        address: account,
        balance: balance
      });
    } catch (error) {
      console.log(error)
      throw new BadRequestException({ description: 'Unable to get balance of account: '+ account});
    }
  }


  async getContractAddress(): Promise<string> {
    const instance = await MetaCoin.deployed();
    return JSON.stringify({
      contractAddress: instance.address
    });
  }


  async sendSignedTransaction(tokenTransferDto: TokenTransferDto): Promise<string> {
    const { tx } = tokenTransferDto;
    let resp;
    try {
      await web3.eth.sendSignedTransaction(tx).on('receipt', receipt => {
        const { transactionHash, status, to, blockNumber } = receipt;
        resp = {
          transactionHash: transactionHash,
          status: status,
          to: to,
          blockNumber: blockNumber
        }
      });
    } catch (error) {
      console.log(error)
      throw new BadRequestException({ description: error.message });
    }
    return resp;
  }

}