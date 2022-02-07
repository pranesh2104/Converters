document.getElementById("submit").onclick = function() {

    var from = document.getElementById("from")
    var from_id = from.options[from.selectedIndex].text

    var to = document.getElementById("to")
    var to_id = to.options[to.selectedIndex].text

    console.log(from_id)
    console.log(to_id)



    //Kilogram To All
    if (from_id == "Kilogram(kg)") {


        //Kilogram To Gram
        if (to_id == "Gram(g)") {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " kg " + " = " + base * 1000 + " g";
        }
        //Kilogram to Kilogram
        else if (to_id == "Kilogram(kg)") {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " kg " + " = " + base + " kg";

        }
        //Kilogram to Pound
        else if (to_id == "Pound(lb)") {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " kg " + " = " + base * 2.205 + " lb";
        }

    }
    // Gram To all
    else if (from_id == "Gram(g)") {

        //Gram To Gram
        if (to_id == "Gram(g)") {
            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " g " + " = " + base + " g";
        }
        //Gram To Kilogram
        else if (to_id == "Kilogram(kg)") {
            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " g " + " = " + base / 1000 + " kg";
        }
        //Gram To Pounds
        else if (to_id == "Pound(lb)") {
            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " g " + " = " + base / 454 + " lb";

        }
    }
    //Pound To All
    else if (from_id == "Pound(lb)") {
        //Pound To Pound
        if (to_id == "Pound(lb)") {
            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " lb " + " = " + base + " lb";

        }
        // Pound To Gram
        else if (to_id == "Gram(g)") {
            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " lb " + " = " + base * 453.5 + " g";
        }
        //Pound To Kilogram
        else if (to_id == "Kilogram(kg)") {
            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " lb " + " = " + base / 2.205 + " kg";
        }
    }

}