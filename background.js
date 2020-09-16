chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url) {
        chrome.windows.getAll({populate:true},(windows) => {
            windows.forEach((window) => {
                window.tabs.forEach((tab) => {
                    if (tab.url === changeInfo.url && !tab.highlighted && tab.status === "complete" && !tab.url.startsWith('chrome://')) {
                        chrome.tabs.remove(tab.id);
                    }
                });
            });
        });
    }
});