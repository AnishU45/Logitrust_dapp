/* eslint-disable no-undef */
const Auction = artifacts.require("./Auction.sol");

module.exports = function(deployer){
    deployer.deploy(Auction);
}