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

    var dateCheck = parseInt(((((CC/4) -2*CC-1) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD ) % 7));

}