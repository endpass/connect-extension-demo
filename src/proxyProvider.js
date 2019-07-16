import Web3Default from 'web3-old';
import Web3Latest from 'web3';

export default class proxyProvider {
  static wrapEnable(provider) {
    const oldEnable = provider.enable;
    provider.enable = async function() {
      proxyProvider.useLatestWeb3(provider);
      return oldEnable.call(this);
    };
    return provider;
  }

  static useWeb3(Web3Class, provider) {
    const web3 = new Web3Class(provider);

    Object.assign(window, {
      ethereum: web3.currentProvider,
      web3,
    });
  }

  static useLatestWeb3(provider) {
    proxyProvider.useWeb3(Web3Latest, provider);
  }

  static useDefaultWeb3(provider) {
    proxyProvider.useWeb3(Web3Default, provider);
  }
}
