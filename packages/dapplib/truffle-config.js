require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan recipe saddle concert gesture case force gas'; 
let testAccounts = [
"0xdbaac781e8439a4320c62716b1cd073712778b20cf9fa78e8aeba0fa888a1ddf",
"0x4e18ede933e29ed15391d670f9617fc58f0bef757915278a62e0565f0cb46ccf",
"0x4820d44d3e0fbfb2937b9f0f5714b61e755546aea05d0d78287a505e1b0d025e",
"0x3f62ac051488e7020499d3f270d41e68291931ddf4520a3549fbf63c7093e645",
"0x861f5c3468db27a1e8fa3c19e305c0482bd25794a188ffc1974f9e5e01d6c047",
"0x5c4bdd27aea5a1dacefbb26f81a48acb1ef3b3bd9cd613198c589911cef3bfde",
"0x1d6a6faa76d1473b37d7b2f51e167ef352b4aef352380b1f3ca8d5d7b92b626b",
"0x649addfcfdb343c288223b14e23b76534d0df585f8e574c38efbb240c8e7bfd2",
"0x3abd864d9badeb518dba52ebfd46597cf95400e7cf18a81ae4f01a142e57c442",
"0x99d86cd236adbdfdb5b990f31d46dd3f70697012556337f5fb5e09f2d08db3e9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


