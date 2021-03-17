let msg = {
    darkMode : "true"
}

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    msg.darkMode = !msg.darkMode;
    chrome.tabs.sendMessage(tab.id, msg);
}