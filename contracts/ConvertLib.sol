// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <=0.6.8;

library ConvertLib{
	function convert(uint amount,uint conversionRate) public pure returns (uint convertedAmount)
	{
		return amount * conversionRate;
	}
}
