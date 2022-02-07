document.getElementById("submit").onclick = function() {

    var from = document.getElementById("from")
    var from_id = from.options[from.selectedIndex].text

    var to = document.getElementById("to")
    var to_id = to.options[to.selectedIndex].text

    console.log(from_id)
    console.log(to_id)

    //Centimeter To ALl
    if (from_id == "Centimeter(cm)") {

        //Centimeter To Meter
        if (to_id == "Meter(m)") {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " cm " + " = " + base / 100 + " m";
        }
        //Centimeter To Centimeter
        else if (to_id == "Centimeter(cm)") {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " cm " + " = " + base + " cm";
        }
        //Centimeter To Millimeter
        else if (to_id == "Millimeter(mm)") {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " cm " + " = " + base * 10 + " mm";
        }
        //Centimeter To Kilometer
        else if (to_id == "Kilometer(km)") {
            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " cm " + " = " + base / 100000 + " km";

        }

    }
    //Meter To ALl
    else if (from_id == "Meter(m)") {
        //Meter To Centimeter
        if (to_id == "Centimeter(cm)") {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " m " + " = " + base * 100 + " cm";

        }
        //Meter To Meter
        else if (to_id == "Meter(m)") {
            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " m " + " = " + base + " m";

        }
        //Meter To Millimeter
        else if (to_id == "Millimeter(mm)") {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " m " + " = " + base * 1000 + " mm";

        }
        //Meter To Kilometer 
        else if (to_id == "Kilometer(km)") {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " m " + " = " + base / 1000 + " km";

        }

    }
    //Millimeter To All
    else if (from_id == "Millimeter(mm)") {
        //Millimeter To Millimeter
        if (to_id == "Millimeter(mm)") {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " mm " + " = " + base + " mm";
        }
        //Millimeter To Meter
        else if (to_id == "Meter(m)") {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " mm " + " = " + base / 1000 + " m";
        }
        //Millimeter To centimeter
        else if (to_id == "Centimeter(cm)") {
            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " mm " + " = " + base / 10 + " cm";

        }
        //Millimeter To Kilometer
        else if (to_id == "Kilometer(km)") {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " mm " + " = " + base / 1e+6 + " km";
        }
    }
    //Kilometer To All
    else if (from_id == "Kilometer(km)") {

        //Kilometer To Kilometer 
        if (to_id == "Kilometer(km)") {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " km " + " = " + base + " km";
        }
        //Kilometer To Meter
        else if (to_id == "Meter(m)") {
            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " km " + " = " + base * 1000 + " m";
        }
        //Kilometer To Millimeter
        else if (to_id == "Millimeter(mm)") {
            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " km " + " = " + base * 1e+6 + " mm";

        }
        //Kilometer TO Centimeter
        else if (to_id == "Centimeter(cm)") {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " km " + " = " + base * 100000 + " cm";
        }
    }
}