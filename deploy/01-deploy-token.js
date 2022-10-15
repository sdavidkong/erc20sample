const { network } = require("hardhat");
const {
  developmentChains,
  INITIAL_SUPPLY,
} = require("../helper-hardhat-config");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const customTokenOz = await deploy("CustomTokenOZ", {
    from: deployer,
    args: [INITIAL_SUPPLY],
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });
  log(`Token has been deployed to ${customTokenOz.address}`);
};

module.exports.tags = ["all", "token"];
