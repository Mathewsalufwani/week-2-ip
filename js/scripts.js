function nameReveal(DD, MM, YY, CC, GN) {

    var DD = parseInt(document.getElementById("DD").value);
    if (DD < 1 || DD > 31 || DD !== DD){
        alert("Please enter a valid day of birth")
    }

    var MM = parseInt(document.getElementById("MM").value);
    if (MM < 1 || MM > 12 || MM !== MM){
        alert("Please enter a valid month of birth")
    }

    var YY = parseInt(document.getElementById("YY").value);
    if (YY < 1 || YY > 99 || YY !== YY){
        alert("Please enter a valid year of birth")
    }

    var CC = parseInt(document.getElementById("CC").value);
    if (CC < 1 || CC > 20 || CC !== CC){
        alert("Please enter a valid century of birth")
    }

    var GN = document.getElementById("GN").value;

    var calculateDate = parseInt(((((CC/4) -2*CC-1) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD ) % 7));

    var guyNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    if (GN === "Male"){
        var chosenAkan = guyNames[calculateDate];
        bld.innerHTML = "Your Akan name is " + chosenAkan + "";
    } else {
        var chosenAkan = femNames[calculateDate];
        bld.innerHTML = "Your Akan name is " + chosenAkan + "";
    }
}