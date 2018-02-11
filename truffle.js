module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545, // This is the Ganache default port. You can change it to the conventional 8545 if your network runs on 8545
      network_id: "4", // Match any network id. You may need to replace * with your network Id
      from: "0x9758238291b3fadb9a9488698965d38b8f3bf4ac", // Add your unlocked account within the double quotes
      gas: 4444444
    }
  }
};
