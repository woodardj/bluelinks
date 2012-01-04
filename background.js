var links_to_open;
var locked = false;
// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
  // If the letter 'g' is found in the tab's URL...
  if (tab.url.indexOf('http://www.reddit.com') > -1) {
    // ... show the page action.
    console.log("Welcome to Reddit");
    chrome.pageAction.show(tabId);
  }
};

function askContentScriptForBlueLinks( tab ){
  console.log(tab);
//  port = chrome.tabs.connect(tab, object connectInfo);
  chrome.tabs.executeScript(tab.id, {'file': 'find_links.js'}, function(){});
  
}

function openTabs( list ){
  chrome.tabs.create({
    'url': request.the_list[i],
    'active': false //Don't switch to it.
  });
}

function RedditLink(url){
  this.url = url;
  this.conditionally_open = function(){
    chrome.history.getVisits({'url':this.url},function(items){
      if(items.length == 0){
        chrome.tabs.create({
          'url':this.args[0].url,
          'active':false
        })
      }
    });
    
  }
}

chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    if (request.message == "OPEN ALL THE TABS!"){
      console.log("Open ALL the tabs? :(");
      console.log(request.the_list);

      for(i in request.the_list){
        l = new RedditLink(request.the_list[i]);
        l.conditionally_open();
      }
    }
  });

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);

chrome.pageAction.onClicked.addListener(askContentScriptForBlueLinks);