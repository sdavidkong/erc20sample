// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol"

contract CustomTokenOZ is ERC20 {

    constructor(uint256 initialSupply) ERC20("CustomTokenOZ", "CTOZ") {
        _mint(msg.msg.sender, initialSupply);
    }

}