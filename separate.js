function multiply()
{
	var x = document.getElementById("firstNumber").value; 
	var y = document.getElementById("secondNumber").value;
	document.getElementById("result").value=(x*y);
}
function divide()
{
	var x = document.getElementById("firstNumber").value; 
	var y = document.getElementById("secondNumber").value;
	document.getElementById("result").value=(x/y);
}

function subtract()
{
	var x = document.getElementById("firstNumber").value; 
	var y = document.getElementById("secondNumber").value;
	document.getElementById("result").value=(x-y);
}
function add()
{
	var x = document.getElementById("firstNumber").value; 
	var y = document.getElementById("secondNumber").value;
	document.getElementById("result").value=eval(x)+eval(y);
}