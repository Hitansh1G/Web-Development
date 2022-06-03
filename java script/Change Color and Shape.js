var toggled = false;

var bodytag = document.getElementsByTagName("body")[0];;
var small = document.getElementById("small");

document.getElementById("toggle").onclick = function(){
    if(!toggled){
        bodytag.classList.add("bck-color-black");
        small.style.marginLeft = "100px";

        toggled = true;
    }
    else{
        bodytag.classList.remove("bck-color-black");
        small.style.marginLeft = "1px";
        
        toggled = false;
    }
}




var cur = "square";

var shape = ["square", "rectangle", "circle", "oval", "triangle-up", "triangle-down", "triangle-topleft", "triangle-bottomleft", "triangle-bottomright", "triangle-right"];

var color = ["blue", "green", "pink", "grey", "yellow", "aqua", "orange", "brown"];


document.getElementById("shape").onclick = function () {
    var rand = shape[Math.floor(Math.random() * shape.length)];
    document.getElementById(cur).setAttribute("id", rand);
    cur = rand;
}

document.getElementById("color").onclick = function () {
    var randColor = color[Math.floor(Math.random() * color.length)];
    document.getElementById("block").style.backgroundColor = randColor;
}