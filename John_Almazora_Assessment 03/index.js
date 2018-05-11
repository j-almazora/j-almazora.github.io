var postcard = document.getElementById("postcard"),
    preview = document.getElementById("preview"),
    toDiv = document.getElementById("to"),
    messageDiv = document.getElementById("message"),
    fromDiv = document.getElementById("from"),
    controls = document.getElementById("controls"),
    toInput = document.getElementById("toInput"),
    msgInput = document.getElementById("messageInput"),
    fromInput = document.getElementById("fromInput"),
    bgimgInput = document.getElementById("bgimgInput"),
    addGallery = document.getElementById("addGallery"),
    saveArray = document.getElementById("saveArray"),
    loadArray = document.getElementById("loadArray");

var num = 1;

//ARRAY
var postcardArray = [];


//LEVEL 4 CREATING FUNCTION
function createPostcard(to, bgImg, from, msg) {
    var miniPostcard = document.createElement("div");
    var miniTo = document.createElement("div");
    
    miniPostcard.className = "miniPostcard";
    miniPostcard.style.backgroundImage = bgImg.style.backgroundImage;
    preview.appendChild(miniPostcard);

    
    miniTo.className = "miniTo";
    miniTo.innerHTML = to.value;
    miniPostcard.appendChild(miniTo);

    preview.appendChild(miniPostcard);
    miniPostcard.appendChild(miniTo);

    var postcardJson = {
        bgimg: miniPostcard.style.backgroundImage,
        to: toInput.value,
        message: msgInput.value,
        from: fromInput.value
    }

    postcardArray.push(postcardJson);
    console.log(postcardArray);

    miniPostcard.addEventListener("click", function () {
        toDiv.innerHTML = postcardJson.to;
        messageDiv.innerHTML = postcardJson.message;
        fromDiv.innerHTML = postcardJson.from;
        bgImg.style.backgroundImage = postcardJson.bgimg;
    })
};

//LEVEL 2 KEY UP EVENT
bgimgInput.addEventListener("keyup", function (ev) {
    if (ev.keyCode == 13) {
        if (this.value == "") {
            postcard.style.backgroundImage = "url(imgs/default.png)";
        } else if (this.value == "auto") {
            postcard.style.backgroundImage = "url(imgs/auto" + num + ".jpg)";
            num++;
            if (num >= 4) {
                num = 1;
            }
        } else {
            postcard.style.backgroundImage = "url(" + bgimgInput.value + ")";
        }
    }
});

toInput.addEventListener("keyup", function (ev) {
    toDiv.innerHTML = "To: " + this.value;
});

msgInput.addEventListener("keyup", function (ev) {
    messageDiv.innerHTML = this.value;
});

fromInput.addEventListener("keyup", function (ev) {
    fromDiv.innerHTML = "From: " + this.value;
});

//LEVEL 3 OnCLICK EVENT
addGallery.addEventListener("click", function () {
    createPostcard(toInput, postcard, fromDiv, messageDiv);
});

//LEVEL 4 SAVING & LOADING FROM LOCALSTORAGE

saveArray.addEventListener("click", function () {
    localStorage.setItem("cardstore", JSON.stringify(postcardArray));
});

loadArray.addEventListener("click", function () {
    var cards = localStorage.getItem("cardstore");
    
    preview.innerHTML = "";
    
    if (cards) {
        cards = JSON.parse(cards);
        for (var i = 0; i < cards.length; i++) {
            createCard(cards[i]);
        }
    }
});

function createCard(curitem) {
    var newImg = document.createElement("div");
    var newCap = document.createElement("div");

    newImg.className = "miniPostcard";
    newImg.style.backgroundImage = curitem.bgimg;

    newCap.className = "miniTo";
    newCap.innerHTML = curitem.to;

    preview.appendChild(newImg);
    newImg.appendChild(newCap);

    newImg.addEventListener("click", function () {
        toDiv.innerHTML = curitem.to;
        messageDiv.innerHTML = curitem.message;
        fromDiv.innerHTML = curitem.from;
        postcard.style.backgroundImage = curitem.bgimg;
    });
}
