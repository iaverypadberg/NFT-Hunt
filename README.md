# NFT-Hunt

We create a website to better display what we are trying to accompmlish.
Website: 

Note: As a group, this is the first time any of us have tried to develop a dapp. A lot of time was spend watching videos, learning solidity, and mapping out what we should aim for as a final product. We set our sights pretty high and definitely did not achieve exaclty what we set out to do. Instead, we learned a whole lot about the strucuture of dapps and the approach we would take next time we tackle something like this.


Our idea is to create a real world NFT hunt.

NFT Creator can place an NFT somewhere on the map.

NFT hunter can search for NFT's on the map.

Rules: Users will travel to predetermined locations to collect NFT’s representing those areas. The corresponding NFT will cost some eth.

The only way to aquire one of these NFT's is to be in the predetermined location.

If the user would like to purchase the NFT, they can initiate the smart contract using the eth in their wallet.

Initial Steps

After looking into the two leading decentralized geolocation projects, XYO and FOAM, it is obvious that the space has some serious development issues. Both of these projects are plagued by their inability to produce a dynamic location. This severely limits the usability of the network and renders it almost useless for our purposes.

As a temporary solution it is going to be best to use GPS data from a user’s phone. This would look like the following: A user walks up to a predetermined location. The user sends its location data to an oracle. The oracle sends the GPS data to the smart contract presiding over that area. If the users phone gps data is within the acceptable latitude/longitude combination, they will be given the oppotunity to purchase the NFT. 

Other Ideas:
Use VRF to generate NFT’s on different parts on the planet. One could be generated for every square mile. 

Can increase NFT generation based on density of population in those areas. 

Takes a certain amount of time for that NFT to become purchasable in that location again. Include a map showing where the NFT is located and show distance from current user location.


