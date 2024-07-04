const getCurrentTab = async () => {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
};

const getCurrentTabId = async () => {

  const currentTab = await getCurrentTab();
  if (currentTab) {
    if(currentTab.url == undefined || !currentTab.url.includes('?')) {
      return null;
    }
    const urlParams = new URLSearchParams(currentTab.url.split("?")[1]);
    const id = urlParams.get('id');
    return id;
  }
};



export {
  getCurrentTabId
}
