require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.19",
    paths: {
        sources: "./contracts",
        artifacts: "./artifacts"
    }
}; 