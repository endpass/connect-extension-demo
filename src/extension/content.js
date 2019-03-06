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

addScripts(['browser.js', 'injected.js'], function() {});
