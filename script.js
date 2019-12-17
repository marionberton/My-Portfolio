//Changing a word every seconds
//change it back to the word passionate 

	let adjectives = ["passionate", "selftaught", "fun", "beginner"];
	let colors = ["#C56BD6", "#44D7B6", "#e9425e","#fbc531"]
	let element = document.querySelector("#changingtext");
	let index = 0;
	
	
	function changeText() {
		
		if(index > adjectives.length -1){ // when index is bigger than the legth we want it to clear and go back to passionate first index else the element increase until it reach the length
			clearInterval(interval);
			element.innerText = adjectives[0];
			element.style.color = colors[0];
		} else {
			element.innerText = adjectives[index];
			element.style.color = colors[index];
		index++;
		}
		
	}
	let interval = setInterval(changeText, 2000)




/* 
function changeText() {
		element.innerText = adjectives[index];
		index++;
		if(index > adjectives.length -1){
			element.innerText = adjectives[index];
			clearInterval(interval);
		} 
		
	}
	let interval = setInterval(changeText, 2000)
*/


/*********** 
 DESKTOP VERSION 
*/

// Education view button clicked
const button = document.querySelector("#edbutton");
const close = document.querySelector("#edclose");

button.addEventListener("click", function(){
	let ed = document.getElementById("displayeducationdesktop");
	ed.style.display = "flex";
	document.getElementById("displayskillsdesktop").style.display = "none";
});

close.addEventListener("click", function(){
	let ed = document.getElementById("displayeducationdesktop");
	ed.style.display = "none";
});

//Skills view button clicked
const buttonskills = document.querySelector("#skillsbutton");
buttonskills.addEventListener("click", function(){
	let ed = document.getElementById("displayskillsdesktop");
	let btn = document.getElementById("buttondisplay");
	ed.style.display = "flex";
	btn.style.display = "flex";
	document.getElementById("displayeducationdesktop").style.display = "none";
});

const closeskills = document.querySelector("#skillsclose");
closeskills.addEventListener("click", function(){
	let ed = document.getElementById("displayskillsdesktop");
	let btn = document.getElementById("buttondisplay");
	ed.style.display = "none";
	btn.style.display = "none";
});

//Portfolio view button clicked

const buttonport = document.querySelector("#portbutton");
buttonport.addEventListener("click", function(){
	let ed = document.getElementById("portfoliodisplaydesktop");
	ed.style.display = "flex";
	document.getElementById("displayskillsdesktop").style.display = "none";
});


const closeport = document.querySelector("#portclose");
closeport.addEventListener("click", function(){
	let ed = document.getElementById("portfoliodisplaydesktop");
	ed.style.display = "none";
});

/*********** 
 MOBILE VERSION 
*/

// Education view button clicked
const buttonmobile = document.querySelector("#edbuttonmobile");
const closemobile = document.querySelector("#edclosemobile");
//view
buttonmobile.addEventListener("click", function(){
	let ed = document.getElementById("displayeducationmobile");
	ed.style.display = "flex";
});
//close
closemobile.addEventListener("click", function(){
	let ed = document.getElementById("displayeducationmobile");
	ed.style.display = "none";
});

//Skills view button clicked
const buttonskillsmobile = document.querySelector("#skillsbuttonmobile");
const closeskillsmobile = document.querySelector("#skillsclosemobile");
//view
buttonskillsmobile.addEventListener("click", function(){
	let ed = document.getElementById("displayskillsmobile");
	let btn = document.getElementById("buttondisplay");
	ed.style.display = "flex";
	btn.style.display = "flex";
});
//close
closeskillsmobile.addEventListener("click", function(){
	let ed = document.getElementById("displayskillsmobile");
	let btn = document.getElementById("buttondisplay");
	ed.style.display = "none";
	btn.style.display = "none";
});

//Portfolio view button clicked

const buttonportmobile = document.querySelector("#portbuttonmobile");
const closeportmobile = document.querySelector("#portclosemobile");
//view
buttonportmobile.addEventListener("click", function(){
	let ed = document.getElementById("portfoliodisplaymobile");
	ed.style.display = "flex";
});
//close
closeportmobile.addEventListener("click", function(){
	let ed = document.getElementById("portfoliodisplaymobile");
	ed.style.display = "none";
});
