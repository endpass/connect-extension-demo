chrome.runtime.onInstalled.addListener(function() {
  // add an action here
  console.log('background loaded');

  chrome.browserAction.onClicked.addListener(function(tab) {
    const contentPayload = {
      scope: 'endpass',
      to: 'browser',
      method: 'openAccount',
    };
    chrome.tabs.sendMessage(tab.id, contentPayload);
  });
});
