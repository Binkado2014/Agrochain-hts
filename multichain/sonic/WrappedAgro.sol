// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract WrappedAgro is ERC20, Ownable {
    constructor() ERC20("Wrapped AgroToken", "wAGRO") {}

    // Minting only by bridge/owner (relayer)
    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    // Burning when redeeming back to Hedera
    function burn(address from, uint256 amount) external onlyOwner {
        _burn(from, amount);
    }
}
