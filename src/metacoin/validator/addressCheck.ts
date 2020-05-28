import {ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments} from "class-validator";
import web3 from '../../config/utility'

@ValidatorConstraint({ name: "addressCheck", async: false })
export class IsValiEthAddress implements ValidatorConstraintInterface {
    async validate(address: string): Promise<boolean>{
        return await web3.utils.isAddress(address);
    }
}