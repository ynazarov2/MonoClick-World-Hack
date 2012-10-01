chrome.contextMenus.create({
      "title" : "Post image on my FB wall",
      "type" : "normal",
      "onclick" : FB.uploadWallPhoto(),
      "contexts" : ["image"]
});

chrome.contextMenus.create({
      "title" : "Add comment and schedule",
      "type" : "normal",
      "onclick" : FB.uploadExtended(),
      "contexts" : ["image"]
});