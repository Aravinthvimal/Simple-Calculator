function sum() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    if(num1 == ""){
        alert("Enter a valid number")
        document.getElementById("num1").focus();
        return;
    }

    if(num2 == ""){
        alert("Enter a valid number")
        document.getElementById("num2").focus();
        return;
    }

    var add = parseInt(num1) + parseInt(num2);

    var res = document.getElementById("result");
    res.innerHTML = "The sum = " + add;
}

function sub() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    if(num1 == ""){
        alert("Enter a valid number")
        document.getElementById("num1").focus();
        return;
    }

    if(num2 == ""){
        alert("Enter a valid number")
        document.getElementById("num2").focus();
        return;
    }

    var diff = parseInt(num1) - parseInt(num2);

    var res = document.getElementById("result");
    res.innerHTML = "The Difference = " + diff;
}



