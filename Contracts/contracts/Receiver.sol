// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Receiver {

	struct MetaTransaction{
		address token;
		address from;	
		address to;
		uint256 amount;

	}
	///@notice Used to parse The meta transaction and run each transaction
	function relayer(MetaTransaction [] calldata _meta) external {
		require(_meta.length > 0, "empty tx");
		for(uint i; i < _meta.length; i++){

			MetaTransaction memory _tx = _meta[i]; 
			IERC20(_tx.token).transferFrom(_tx.from, _tx.to, _tx.amount);

		}

	}

}