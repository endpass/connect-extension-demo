function addScript(src, onLoad) {
  const script = document.createElement('script');
  script.src = chrome.extension.getURL(src);
  script.onload = onLoad;
  (document.head || document.documentElement).appendChild(script);
}

function addScripts(list, cb) {
  const evs = [];
  evs.length = list.length;
  list.forEach((src, index) => {
    addScript(src, () => {
      evs[index] = true;
      if (evs.indexOf(undefined) === -1) {
        cb();
      }
    });
  });
}

const loadScripts = ['browser.js', 'injected.js'];
addScripts(loadScripts, function() {});

const scriptsMap = loadScripts.reduce((map, item) => {
  const key = item.split('.')[0];
  // eslint-disable-next-line
  map[key] = true;
  return map;
}, {});

chrome.runtime.onMessage.addListener(function(request) {
  if (scriptsMap[request.to]) {
    window.postMessage(request, '*');
  }
});
