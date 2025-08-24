// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MemeToken is ERC20 {
    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        address owner
    ) ERC20(name, symbol) {
        require(initialSupply <= 1_000_000_000, "Max supply 1B reached");
        _mint(owner, initialSupply * 10 ** decimals());
    }
}
