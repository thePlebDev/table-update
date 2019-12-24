// COLLECTING THE UI ELEMENTS 

const buttons = document.querySelector(".buttons");
const addMountain = document.querySelector('.add-mountain');
const submits  = document.querySelector(".row");
const name = document.querySelector("#name");
const elevation = document.querySelector("#elevaltion");
const place = document.querySelector("#location");
const tableBody = document.querySelector(".tbody");
//LOAD EVENT LISTENERS FUNCTION CALL

loadEventListener();

//LOAD EVENT LISTENER FUNCTION CREATIONS

function loadEventListener(){
	buttons.addEventListener('click', popUp);
	addMountain.addEventListener('click',createMountain);

}


// THE POPUP FUNCTION
function popUp(e){
	submits.classList.remove('hide');
	buttons.classList.add('hide')
	e.preventDefault();
}

//Creating the new mountain
function createMountain(e){
	let tr = document.createElement("tr"); // creates a new table row
	createElement(name);
	createElement(elevation);
	createElement(place);


	e.preventDefault();

}

//FUCNTION THAT GETS CALLED BY CREATE ELEMENT
function createElement(mountain){
	//this function will be called everytime a new mountain is created 

	let tdName =document.createElement("td");  // creates a new table data
	tdName.appendChild(document.createTextNode(mountain.value)); // adds text node to tdName
	tr.appendChild(tdName) // adds the table data to the table row
	tableBody.appendChild(tr) // adds the newly created and updated tabled row to the table body

}
		
		