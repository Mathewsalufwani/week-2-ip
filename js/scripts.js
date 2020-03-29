function nameReveal(DD, MM, YY, CC, GN) {

    var DD = parseInt(document.getElementById("DD").value);
    if (DD < 1 || DD > 31 || DD !==DD){
        alert("Please enter a valid day of birth")
    }

    var MM = parseInt(document.getElementById("MM").value);
    if (MM < 1 || MM > 12 || MM !==MM){
        alert("Please enter a valid month of birth")
    }

    var YY = parseInt(document.getElementById("YY").value);
    if (YY < 1 || YY > 99 || YY!==YY){
        alert("Please enter a valid year of birth")
    }
}