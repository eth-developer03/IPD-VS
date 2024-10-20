/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('dotenv').config();
require('@nomiclabs/hardhat-ethers');

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: '0.8.11',
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      accounts: [
        {
          privateKey: PRIVATE_KEY,
          balance: '10000000000000000000000', // Example balance (in wei)
        },
      ],
    },
  },
};
