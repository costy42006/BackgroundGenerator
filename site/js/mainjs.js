var d = new Date();
document.getElementById("cyear").innerHTML = d.getFullYear();
document.getElementById("cyear2").innerHTML = d.getFullYear();


function myFunction() {
    var x =
        document.getElementById("myInput").value;
    document.getElementById("myTD").innerHTML = x;
}

function myFunctionb() {
    var y =
        document.getElementById("myInputb").value;
    console.log(y);
    document.getElementById("myTDb").innerHTML = y;
}