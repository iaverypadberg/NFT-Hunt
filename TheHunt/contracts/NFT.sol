//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract BurlingtonNFT is ERC721 {

    constructor() ERC721("GameItem", "ITM") public{

    }
}