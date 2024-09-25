function toggleStyles(element, color1, color2, textColor1, textColor2) {
    const isColor1 = element.style.backgroundColor === color1;
    if (isColor1) {
        element.style.backgroundColor = color2;
        element.style.color = textColor2;
    } else {
        element.style.backgroundColor = color1;
        element.style.color = textColor1;
    }
}

document.getElementById("education").onclick = function () {
    toggleStyles(this, "yellow", "green", "red", "blue");
};

document.querySelector("#information").addEventListener("click", function () {
    toggleStyles(this, "blue", "purple", "pink", "white");
});

function addImage() {
    document.getElementById("cityImage").style.display = "block";
}

function zoomIn() {
    const img = document.getElementById("cityImage");
    let currentWidth = img.clientWidth;
    img.style.width = (currentWidth + 50) + "px";
}

function zoomOut() {
    const img = document.getElementById("cityImage");
    let currentWidth = img.clientWidth;
    if (currentWidth > 50) {
        img.style.width = (currentWidth - 50) + "px";
    }
}

function removeImage() {
    document.getElementById("cityImage").style.display = "none";
}