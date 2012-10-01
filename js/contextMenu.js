chrome.contextMenus.create({
      "title" : "Share on Facebook",
      "type" : "normal",
      "contexts" : ["image"]
});

chrome.contextMenus.create({
      "title" : "Extended sharing",
      "type" : "normal",
      "contexts" : ["image"]
});
/*
    chrome.contextMenus.create({
      "title" : "ВКонтакте",
      "type" : "normal",
      "parentId": parseInt(localStorage.img_context_id),
      "contexts" : ["image"],
      "onclick" : likeVK()
    });

    chrome.contextMenus.create({
      "title" : "в Twitter",
      "type" : "normal",
      "parentId": parseInt(localStorage.img_context_id),
      "contexts" : ["image"],
      "onclick" : likeTW()
    });

    localStorage.img_context_id = chrome.contextMenus.create({
      "title" : "в Facebook",
      "type" : "normal",
      "parentId": parseInt(localStorage.img_context_id),
      "contexts" : ["image"],
      "onclick" : likeFB()
    });

    //Selection
    localStorage.sel_context_id = chrome.contextMenus.create({
      "title" : "Поделиться",
      "type" : "normal",
      "contexts" : ["selection"]
    });

    chrome.contextMenus.create({
      "title" : "Вконтакте",
      "type" : "normal",
      "parentId": parseInt(localStorage.sel_context_id),
      "contexts" : ["selection"],
      "onclick" : insertSelectionVK()
    });

    chrome.contextMenus.create({
      "title" : "в Facebook",
      "type" : "normal",
      "parentId": parseInt(localStorage.sel_context_id),
      "contexts" : ["selection"],
      "onclick" : insertSelectionFB()
    });

    chrome.contextMenus.create({
      "title" : "в Twitter",
      "type" : "normal",
      "parentId": parseInt(localStorage.sel_context_id),
      "contexts" : ["selection"],
      "onclick" : insertSelectionTW()
    });

    function insertSelectionVK(){
      return function(info, tab){
        Facade.toVK();
        Facade.VK.Login('forced');
        chrome.tabs.executeScript(null, {file: "scripts/inject/get_selection.js"});
      }
    }

    function insertSelectionFB(){
      return function(info, tab){
        Facade.toFB();
        Facade.FB.Login('forced');
        chrome.tabs.executeScript(null, {file: "scripts/inject/get_selection.js"});
      }
    }

    function insertSelectionTW(){
      return function(info, tab){
        Facade.toTW();
        chrome.tabs.executeScript(null, {file: "scripts/inject/get_selection.js"});
      }
    }

    function likeFB(){
      return function(info, tab){
        Facade.toFB();
        Facade.FB.Login('forced');
        console.log('toFB');
        Facade.LikeAdvanced(info);
      }
    }

    function likeVK(){
      return function(info, tab){
        Facade.toVK();
        Facade.VK.Login('forced');
        console.log('toVK');
        Facade.LikeAdvanced(info);
      }
    }

    function likeTW(){
      return function(info, tab){
        Facade.toTW();
        //Facade.Login();
        console.log('toTW');
        Facade.LikeAdvanced(info);
      }
    }*/