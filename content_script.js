var pageInfo = {
  "type": "pageInfo",
  "title": document.title
  //"selection": window.getSelection().toString()
};
//console.log("4seg content script ran");

//chrome.extension.sendRequest(pageInfo);

chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
/*    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");*/
    sendResponse({
      "url":window.location.href,
      "title":document.title
    }); // snub them.
  });