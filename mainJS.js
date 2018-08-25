

//switch to an argument
//old school

function myFunction() {

	document.write("Listen, look, read, then write for you life!");
}



//innerHTML

var myText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, itaque.";
var targetDiv = document.getElementById('theDiv');
//targetDiv.innerHTML = targetDiv.innerHTML + myText;


document.getElementById('actButton').onclick=function(){
	myFunction();
}


