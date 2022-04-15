document.getElementById("submit").onclick = function() {

    var from = document.getElementById("from")
    var from_id = from.options[from.selectedIndex].text

    var to = document.getElementById("to")
    var to_id = to.options[to.selectedIndex].text

    console.log(from_id)
    console.log(to_id)

    //Watt To ALl 
    if (from_id == "watt-hour(Wh)") {

        //watt to Joules
        if (to_id == "joules(J)") {

            var base = Number(document.getElementById("base").value);

            document.getElementById("result").innerHTML = base + " Wh" + " = " + base + " J/s";
        }
        //watt to Kilojoules
        else if (to_id == "kilojoules(kJ)") {

            var base = Number(document.getElementById("base").value);

            document.getElementById("result").innerHTML = base + " Wh" + " = " + base / 1000 + " kJ/s";
        }
        //watt to kilowatt
        else if (to_id == "kilowatt-hour(kWh)") {

            var base = Number(document.getElementById("base").value);

            document.getElementById("result").innerHTML = base + " Wh" + " = " + base / 1000 + " kWh";

        }
        //watt to watt
        else if (to_id == "watt-hour(Wh)") {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " Wh" + " = " + base + " Wh";

        }

    }
    //kilowatt to all
    else if (from_id == "kilowatt-hour(kWh)") {

        //kilowatt to kilowatt
        if (to_id == "kilowatt-hour(kWh)") {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " kWh" + " = " + base + " kWh";

        }
        //kilowatt to watt
        else if (to_id == "watt-hour(W)") {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " kWh" + " = " + base * 1000 + " Wh";

        }
        //kilowatt to joules
        else if (to_id == "joules(J)") {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " kWh" + " = " + base * 1000 + " J/s";

        }

        //kilowatt to kilojoules
        else if (to_id == "kilojoules(kJ)") {
            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " kWh" + " = " + base + " kJ/s";


        }
    }
    //joules To all
    else if (from_id == "joules(J)") {

        //joules to joules
        if (to_id == "joules(J)") {
            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " J" + " = " + base + " J";
        }
        //joules to watt
        else if (to_id == "watt-hour(Wh)") {
            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " J" + " = " + base * 0.0002777778 + " Wh";
        }
        //joules to kilowatt
        else if (to_id == "kilowatt-hour(kWh)") {
            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " J" + " = " + parseFloat(base / 3600000).toFixed(12) + " kWh";
        }
        //joules to kilojoules
        else if (to_id == "kilojoules(kJ)") {
            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " J" + " = " + base / 1000 + " kJ";
        }
    }
    //kilojolues to all
    else if (from_id == "kilojoules(kJ)") {
        //kilojoules to kilojoules
        if (to_id == "kilojoules(kJ)") {
            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " kJ" + " = " + base + " kJ";
        }
        //kilojoules to joules
        else if (to_id == "joules(J)") {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " kJ" + " = " + base * 1000 + " J";
        }
        //kilojoules to watt
        else if (to_id == "watt-hour(Wh)") {
            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " kJ" + " = " + base * 0.277778 + " Wh";
        }
        //kilojoules to kilowatt
        else if (to_id == "kilowatt-hour(kWh)") {

            var base = Number(document.getElementById("base").value);
            document.getElementById("result").innerHTML = base + " kJ" + " = " + parseFloat(base * 0.0002777778).toFixed(12) + " kWh";
        }
    }
}
