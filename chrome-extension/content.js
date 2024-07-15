chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript({
    code: 'document.querySelector("#dangalPlayer").playbackRate = 1.2',
  })
})
