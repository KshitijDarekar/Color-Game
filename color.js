
var color = generaterandomcolors(6);
var square = document.getElementsByClassName("square");
var pickedcolor = pickcolor();
var colordisplay = document.getElementById("colordisplay");
colordisplay.textContent = pickedcolor;
var messagedisplay = document.getElementById("messagedisplay");
var head = document.getElementById("header");
var resetbutton = document.getElementById("reset");
var easybtn = document.getElementById("easybtn");
var hardbtn = document.getElementById("hardbtn");
easybtn.addEventListener("click", function () {
    hardbtn.classList.remove("selected");
    easybtn.classList.add("selected");
    color = generaterandomcolors(3);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    resetbutton.textContent = "NEW COLORS";//added myself
    for (var i = 0; i < square.length; i++)
        if (color[i]) {
            square[i].style.background = color[i];
        }
    else {
        square[i].style.display = "none";
    }
});
hardbtn.addEventListener("click", function () {
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    color = generaterandomcolors(6);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    resetbutton.textContent = "NEW COLORS";//added mself
    for (var i = 0; i < square.length; i++)

    {
        square[i].style.background = color[i];
        square[i].style.display = "block";
    }

});

resetbutton.addEventListener("click", function () {
    color = generaterandomcolors(6);
    pickedcolor = pickcolor();
    messagedisplay.textContent="";
    colordisplay.textContent = pickedcolor;
    this.textContent = "NEW COLORS";// instead of this resetbutton.textcontent will also do
    //
    for (var i = 0; i < square.length; i++) {
        square[i].style.background = color[i];
    }
    head.style.backgroundColor = "steelblue";

});
console.log(color); ///jst checking no need
console.log(square);///jst checking no need
for (var i = 0; i < square.length; i++) { //add initial color
    square[i].style.background = color[i];
    //add click listener
    square[i].addEventListener("click", function () {
        // compare topicked colour
        var clickedcolor = this.style.background;
        console.log(clickedcolor, pickedcolor);///jst checking no need
        //compare
        if (clickedcolor === pickedcolor) {
            messagedisplay.textContent = "CORRECT";
            resetbutton.textContent = "PLAY AGAIN ?";
            head.style.backgroundColor = clickedcolor;

            changecolor(pickedcolor);

        } else {
            messagedisplay.textContent = "TRY AGAIN";
            this.style.background = "#234353";
        }
    });
}

function changecolor(color) {
    for (var i = 0; i < square.length; i++) {
        square[i].style.background = color;
    }
}

function pickcolor() {
    var random = Math.floor(Math.random() * color.length);
    return color[random];
}

function generaterandomcolors(x) {
    var arr = [];
    for (var i = 0; i < x; i++) {
        arr.push(randomcolor());
        // return arr ; NOTE: If returned here then output will not be as expected
    }
    return arr;
}

function randomcolor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"; //space between nos

}