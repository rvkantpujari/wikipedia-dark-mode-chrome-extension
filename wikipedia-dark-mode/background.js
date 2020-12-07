chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    let msg = {
        darkMode : "true"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}