
// 1. Create an empty array, `names`
// 2. Find all the paragraph elements using `getElementsByClassName`
// 3. For each element found
	// Add the element's text to the array of names
// 4. Alert the final result

let names = [];

let elmo = "";
elmo = document.getElementsByClassName("name");

for (i = 0; i < elmo.length; i++) {
	names.push(elmo[i].innerHTML);

}
alert(names);
