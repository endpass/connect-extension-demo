import '@babel/polyfill';
import Web3 from 'web3';
import EndpassConnect from '@endpass/connect';
import Network from '@endpass/class/Network';
import { MESSAGE } from '@/constants';

const web3 = new Web3(Network.NETWORK_URL_HTTP[Network.NET_ID.MAIN][0]);

const connect = new EndpassConnect({
  authUrl: ENV.auth.url,
  widget: false,
  oauthClientId: 'should_replace_by_real_token',
});

const provider = connect.getProvider();
web3.setProvider(provider);

Object.assign(window, {
  ethereum: web3.currentProvider,
  web3,
});

const messageHandlers = {
  openAccount() {
    connect.openAccount();
  },
};

window.addEventListener('message', request => {
  const { scope, to, method } = request.data;
  if (scope !== MESSAGE.SCOPE || to !== MESSAGE.BROWSER) {
    return;
  }
  const handler = messageHandlers[method];
  // eslint-disable-next-line
  handler && handler();
});
