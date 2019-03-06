import '@babel/polyfill';
import Web3 from 'web3';
import EndpassConnect from '@endpass/connect';
import { DEFAULT_NETWORKS, NET_ID } from '../constants';

const web3 = new Web3(DEFAULT_NETWORKS[NET_ID.MAIN].url);

const connect = new EndpassConnect({
  authUrl: ENV.auth.url,
});

const provider = connect.getProvider();
web3.setProvider(provider);

Object.assign(window, {
  ethereum: web3.currentProvider,
  web3,
});
