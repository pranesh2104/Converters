document.getElementById("submit").onclick = function() {

    var from = document.getElementById("from")
    var from_id = from.options[from.selectedIndex].text

    var to = document.getElementById("to")
    var to_id = to.options[to.selectedIndex].text

    console.log(from_id)
    console.log(to_id)

    //Decimal To all
    if (from_id == "Decimal") {

        //Decimal To Decimal
        if (to_id == "Decimal") {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base;
        }

        //Decimal To HexaDecimal
        else if (to_id == "HexaDecimal") {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base.toString(16).toUpperCase();
        }
        // Decimal To Binary
        else if (to_id == "Binary") {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base.toString(2);
        }

        //Decimal To Octal
        else if (to_id == "Octal") {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base.toString(8);
        }

    }
    // Binary To All
    else if (from_id == "Binary") {
        //Binary To Decimal
        if (to_id == "Decimal") {

            var base = Number(document.getElementById("base").value);
            var dec = parseInt((base + '').replace(/[^01]/gi, ''), 2);
            document.getElementById("result").innerHTML = dec;
        }
        // Binary To HexaDecimal
        else if (to_id == "HexaDecimal") {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = parseInt(base, 2).toString(16).toUpperCase();
        }
        // Binary To Octal
        else if (to_id == "Octal") {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = parseInt(base, 2).toString(8);
        }

        //Binary To Binary
        else if (to_id == "Binary") {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base;
        }
    }
    // HexaDecimal To All
    else if (from_id == "HexaDecimal") {

        //HexaDecimal To Decimal
        if (to_id == "Decimal") {

            var base = document.getElementById("base").value;
            document.getElementById("result").innerHTML = parseInt(base, 16)
        }
        // HexaDecimal TO Binary
        else if (to_id == "Binary") {

            var base = document.getElementById("base").value;
            document.getElementById("result").innerHTML = parseInt(base, 16).toString(2);
        }
        // HexaDecimal To Octal
        else if (to_id == "Octal") {

            var base = document.getElementById("base").value;
            document.getElementById("result").innerHTML = parseInt(base, 16).toString(8);
        }

        //HexaDecimal To HexaDecimal
        else if (to_id == "HexaDecimal") {

            var base = document.getElementById("base").value;
            document.getElementById("result").innerHTML = base;
        }
    }
    // Octal To All
    else if (from_id == "Octal") {
        //Octal To Decimal
        if (to_id == "Decimal") {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = parseInt(base, 8);
        }
        // Octal To Binary
        else if (to_id == "Binary") {
            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = parseInt(base, 8).toString(2);
        }
        //Octal To HexaDecimal
        else if (to_id == "HexaDecimal") {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = parseInt(base, 8).toString(16).toUpperCase();
        }
        //Octal TO Octal
        else if (to_id == "Octal") {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base;
        }
    }
}