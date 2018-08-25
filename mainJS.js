

//switch to an argument
//old school

// function myFunction() {

// 	document.write("Listen, look, read, then write for you life!");
// }



//innerHTML

// var myText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. <h1>Consectetur, itaque.</h1>";
// var targetDiv = document.getElementById('theDiv');
//targetDiv.innerHTML = myText;
// targetDiv.innerHTML =  myText + targetDiv.innerHTML;



//DOM manipulation methods for greater control

function addNewContent() {

	var para = document.createElement('p'); //create a tag
	var node = document.createTextNode('Willows are funeral trees, rife in Little Venice.');//add text to new tag
	para.appendChild(node);

//add new tag etc to div

var targetDiv = document.getElementById('theDiv');
targetDiv.appendChild(para);
console.log(targetDiv.innerHTML);

}

function domWork() {
	var targetDiv = document.getElementById('theDiv');
	targetDiv.style.backgroundColor = "#bbbbf1";
	console.log(targetDiv.innerHTML);
}


document.getElementById('actButton').onclick=function(){
	addNewContent();
}

document.getElementById('work').onclick=function(){
	domWork();
}

