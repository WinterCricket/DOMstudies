

//switch to an argument
//old school

// function myFunction() {

// 	document.write("Listen, look, read, then write for you life!");
// }



//innerHTML

var myText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. <h1>Consectetur, itaque.</h1>";
var targetDiv = document.getElementById('theDiv');
//targetDiv.innerHTML = myText;
targetDiv.innerHTML = targetDiv.innerHTML + myText;



//DOM manipulation methods


document.getElementById('actButton').onclick=function(){
	myFunction();
}


