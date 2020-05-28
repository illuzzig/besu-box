import { IsString, IsNumber, Validate, IsPositive, Contains } from "class-validator";
//import { IsValiEthAddress } from "../validator/AddressCheck";

export class TokenTransferDto {
    @IsString()
    //@Validate(IsValiEthAddress, { message: "Sender-address is not valid"})
    sender: string;
    
    @IsString()
    //@Validate(IsValiEthAddress, { message: "Receiver-address is not valid"})
    receiver: string;

    @IsNumber()
    @IsPositive()
    amount: number;

    @IsString()
    tx: string;
}