import { Controller, Get, Post, Body, ValidationPipe, UsePipes, Param } from '@nestjs/common';
import { MetaCoinService } from './metacoin.service';
import { TokenTransferDto } from './dto/token-transfer.dto';

@Controller('/')
export class MetaCoinController {

  constructor(private readonly metaCoinService: MetaCoinService) { }

  @Get('/balance/:id')
  async getBalance(@Param('id') id: string): Promise<string> {
    return await this.metaCoinService.getBalance(id);
  }

  @Get('/eth-converter/:id')
  async getBalanceInEth(@Param('id') id: string): Promise<string> {
    return await this.metaCoinService.getBalanceInEth(id);
  }

  @Post('/transfer')
  @UsePipes(ValidationPipe)
  async sendSignedTransaction(@Body() tokenTransferDto: TokenTransferDto): Promise<any> {
    return await this.metaCoinService.sendSignedTransaction(tokenTransferDto);
  }
  @Get('/contractAddress')
  async getContractAddress(): Promise<string> {
    return await this.metaCoinService.getContractAddress()
  }

}