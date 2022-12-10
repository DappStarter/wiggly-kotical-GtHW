require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enroll supply suggest name remember saddle minor gloom arena army gasp'; 
let testAccounts = [
"0x6975de0d266feb82e7f2aabf57decd0ce3f351170a55bf32a659db5441df648b",
"0xa44fb46b42dd487cbb1dcaed76092f2f64c5486d5d18616d65d7c1e0577788f8",
"0xf75ef30e9d1ec03bde4e6bae470a02d50c97dcb183b1c66eb3f9afa411e5b653",
"0xb8d45556c795f36a26544fb672d5945fe7b080be9a1a592fed8ed9d3c2505c0f",
"0x131e9472e202a8c797f6a761ca752843d635a5be43ff3c5d36f5559a6ec0de98",
"0x5ffa386e5ac0aa44f3d74dd2c3cbc9a6bf67dbd19bb353c410b5f17a1be52188",
"0xf02c0ff1dc6b936db855558201fa5a7787f1f655474858a01ee741dcfd730799",
"0x07e55f2cd6a7dc2b65797d042b42891ffdb3350bd0d1705df614a5fbd0ae079e",
"0x29db8e7f8f326107f3f3ff9c305119a4dc159b5651c354597dc7ce63295b16b0",
"0x3299100b0aca60b92403def7439a5d6208a2721c00e59935e82cdd7fe9a19f60"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

