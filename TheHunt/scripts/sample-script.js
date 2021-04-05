// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const BigNumber = require('bignumber.js');



async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy

  canBuyNFT = false;

  //Chainlink smart contrac will pull in the longitude and latitude here
  // Change the inputted number to a big number
  latitude = new BigNumber(44.479010);
  longitude = new BigNumber(-75.213653);
  // Format the number so that solidty wont complain
  latitude = latitude.shiftedBy(12)
  longitude = longitude.shiftedBy(12)


  // Depoly the GPS_Check contract to check the newly aquired location
  const GPS_Check = await hre.ethers.getContractFactory("GPS_Check");

  // Call the smart contract constructor with the BigNumber, buc change them to ints
  const gps = await GPS_Check.deploy(latitude.toNumber(),longitude.toNumber());
  await gps.deployed();


  // Call the smart contract with the new coordinates
  //await console.log(gps.setLat(44.479010*100000000));
 // await console.log(gps.setLong(-73.213653*100000000));


  // Run the GPS check coordinates function
  if(await gps.checkCoords(gps.getLat(),gps.getLong()) == true){
    canBuyNFT = true;
    // Connect to the NFT HERE
  }
  else{
    canBuyNFT = false;
    console.log("Sorry, you are not in the specified location")
  }

   
  //Allow the user to access the pre stored NFT and buy it if they are within the coordinates

  //Present an error if the user is not in the specified location


  //new BigNumber(3.141592); //From a numeric value
  //await gps.setLat(44.479010*1000000000000);
 
  //await gps.setLong(-73.213653*1000000000000);
  number = await gps.getLat()
  console.log(number.toNumber());
  //latitude = new BigNumber(gps.latitude);
  //console.log(latitude.toNumber());

  console.log("Contract deployed to:", gps.address);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
