const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'jeans brass celery rocket book maid repeat pencil pear crouch famous report',
  'https://rinkeby.infura.io/v3/803528ab55704239b12a35c68c09cb81'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({ data: '0x' + bytecode, arguments: ['Hello World']})
  .send({ from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
}
deploy();

// Contract deployed to 0xBF23baC8721FD209Ba3bE12C087Bd8F328e5B226
