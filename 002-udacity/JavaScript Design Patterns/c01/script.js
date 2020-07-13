

let model = {
    currentCat: null,
    cats : [
        { name: "Cat01", clicks: 0, image: "cat01.jpg" },
        { name: "Cat02", clicks: 0, image: "cat02.jpg" },
        { name: "Cat03", clicks: 0, image: "cat03.jpg" },
        { name: "Cat04", clicks: 0, image: "cat04.jpg" },
        { name: "Cat05", clicks: 0, image: "cat05.jpg" },
    ]
}

let octopus = {
    init : function() {
        catListView.render(model.cats);

        let adminButton = document.getElementById("adminButton");
        let adminForm =   document.getElementById("adminForm");
        adminButton.onclick = function() { 
            adminForm.style.display = adminForm.style.display == "none" ? "block" : "none";
        }
    },
    setCurrentCat : function(cat) {
        model.currentCat = cat;
    },
    setCatClicks : function() {
        model.currentCat.clicks++;
    }
    
};

let catListView = {
    render : function(cats) {
        let list = document.createElement('ul');

        for (const cat of cats) {
            let listElem = document.createElement('li');
            listElem.innerHTML = cat.name;
            listElem.onclick = (function(cat) {
                return function () {
                    octopus.setCurrentCat(cat);
                    catView.render(cat);
                }
            })(cat);
            
            list.appendChild(listElem);
        }
    
        let catListDiv = document.getElementById('catList');
        catListDiv.innerHTML = '';
        catListDiv.appendChild(list);
    }
};

let catView = {
    render : function (cat) {
        let catNameP = document.getElementById('catName');
        let clickCountP = document.getElementById('clickCount');;
        let catImage = document.getElementById('catImage');
        
        catNameP.innerHTML = cat.name;
        clickCountP.innerHTML = "click count: " + String(cat.clicks);
        catImage.setAttribute('src', cat.image);
        catImage.setAttribute('alt', cat.name + "image");
        
        catImage.onclick = function() {
            octopus.setCatClicks();
            clickCountP.innerHTML = "click count: " + cat.clicks;
        };
    }
};

let adminView = {
    
};

octopus.init();