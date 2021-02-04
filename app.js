
/*function itemlist(){
	var userinput = document.getElementById("items").value;
	var x = userinput + "Randon String";
	//sessionStorage.clear();
	sessionStorage.setItem(x, userinput);
	document.getElementById("items").value = "";
	document.getElementById("outputscreen").innerHTML = "";
	for (var count=0; count<sessionStorage.length; count +=1 ) {
		var itemarray = sessionStorage.key(count);
		var usersitems = sessionStorage.getItem(itemarray);

		document.getElementById("outputscreen").innerHTML += usersitems + "<br/>";
	}
	
	
	
}*/

//Elements are imported from html file as follows:
const userinput = document.getElementById("items");
const entrybutton = document.getElementById("entrybutton");
const ourbox = document.getElementById("outputscreen");
const ourlist = document.getElementById("ourlist");
const clearbutton = document.getElementById("clearbutton");

//Items are added to the list as follows:
entrybutton.addEventListener("click", ourfunction);

function ourfunction() {
	
	event.preventDefault();//This code is to prevent form from submitting/refreshing (applicable since you are using the form element).

	const listitem = document.createElement("li");
	const deletebutton = document.createElement("button");
	deletebutton.innerHTML = "X";
	const donebutton = document.createElement("button");
	donebutton.innerHTML = "Done";
	listitem.innerHTML = userinput.value;
	listitem.classList.add("entries");
	const DoneAndDeleteButton = document.createElement("div");
	DoneAndDeleteButton.classList.add("doneanddeletebutton");
	DoneAndDeleteButton.appendChild(deletebutton);
	DoneAndDeleteButton.appendChild(donebutton);
	const row = document.createElement("div");
	row.appendChild(listitem);
	row.appendChild(DoneAndDeleteButton);
	row.classList.add("ourrows");
	ourlist.appendChild(row);
	userinput.value = ""; 

	deletebutton.addEventListener("click", deletion);

	function deletion() {
		ourlist.removeChild(row);

	}

	donebutton.addEventListener("click", completion);

	function completion() {
		listitem.style.textDecoration = "line-through";
	}
	/*const para = createElement("p");
	para.innerHTML = "hi";
	ourbox.appendChild(para);
	*/
	//ourbox.innerHTML = "hello";	
}

//The list is cleared as follows:
clearbutton.addEventListener("click", clearinglist)

function clearinglist () {
	ourlist = [];
}