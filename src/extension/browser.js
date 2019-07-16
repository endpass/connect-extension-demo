import EndpassConnect from '@endpass/connect';
import { MESSAGE } from '@/constants';
import proxyProvider from '@/proxyProvider';

const connect = new EndpassConnect({
  authUrl: ENV.auth.url,
  // widget: false,
  oauthClientId: 'should_replace_by_real_token',
});

const provider = proxyProvider.wrapEnable(connect.getProvider());
proxyProvider.useDefaultWeb3(provider);

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
