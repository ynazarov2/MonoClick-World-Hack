chrome.contextMenus.create({
      "title" : "Post image on my FB wall",
      "type" : "normal",
      "onclick" : FB.uploadWallPhoto(this),
      "contexts" : ["image"]
});

chrome.contextMenus.create({
      "title" : "Extended sharing",
      "type" : "normal",
      //"onclick" : alert("extended sharing"),
      "contexts" : ["image"]
});