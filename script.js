function compute()
{
    validateP(); //validate amount/principal first

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year= new Date().getFullYear() + parseInt(years);

    //Set result text
    document.getElementById("result").innerHTML= "If you deposit " + principal + 
    ",\<br\>at an interest rate of " + rate + 
    "%\<br\>You will receive an amount of " +
    interest + ",\<br\>in the year " + year + "\<br\>";

    document.getElementById("interest").innerHTML = interest;
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

//validate principal
function validateP()
{
    var principal = document.getElementById("principal").value;
    if (parseInt(principal) <= 0 || isNaN(principal))
    {
        alert("Enter a number larger than 0.");
        document.getElementById("principal").focus();
    }
}