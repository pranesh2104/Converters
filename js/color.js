document.getElementById("submit").onclick = function() {

    var base = document.getElementById("hexval").value


    let hearray = base.split(' ');
    console.log(hearray)

    var r = parseInt(hearray[0].slice(0, 2), 16);
    var g = parseInt(hearray[0].slice(2, 4), 16);
    var b = parseInt(hearray[0].slice(4, 6), 16);

    console.log(r);
    console.log(g);
    console.log(b)



    document.getElementById("r").value = r;
    document.getElementById("g").value = g;
    document.getElementById("b").value = b;

    document.getElementById("hexval").value = base.toUpperCase();

    document.getElementById("color").style.background = 'rgb(' + r + ', ' + g + ', ' + b + ')';


};


function hexToRGB() {

    var r = document.getElementById("r").value;
    var g = document.getElementById("g").value;
    var b = document.getElementById("b").value;

    document.getElementById("hexval").value = hex(r).toUpperCase() + hex(g).toUpperCase() + hex(b).toUpperCase();

    document.getElementById("color").style.background = 'rgb(' + r + ', ' + g + ', ' + b + ')';




};

function hex(value) {

    var hex = parseInt(value).toString(16);

    if (hex.length == 1) {
        hex = "0" + hex
    }

    return hex
}