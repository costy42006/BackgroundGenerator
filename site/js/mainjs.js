var d = new Date();
document.getElementById("cyear").innerHTML = d.getFullYear();
document.getElementById("cyear2").innerHTML = d.getFullYear();


function myFunction() {
    var x = document.getElementById("myInput").value;
    document.getElementById("myTD").innerHTML = x;
    document.getElementById("myInput").value = "";
}

function myFunctionb() {
    var y = document.getElementById("myInputb").value;
    document.getElementById("myTDb").innerHTML = y;
    document.getElementById("myInputb").value = "";
}