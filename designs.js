const form = document.getElementById("sizePicker");
form.addEventListener("submit", function(event) {
	event.preventDefault();
	const tblElement = document.getElementById("pixelCanvas");
	tblElement.innerHTML = "";
//created a variable by grabbing the height input element
	const numHeight = document.getElementById("inputHeight").value;
//created a for loop to increase the number of rows and columns based on what the person submits
	for (let x = 0; x < numHeight; x = x + 1) {
		const rowElement = document.createElement("tr");
		tblElement.appendChild(rowElement);
////created a variable by grabbing the width input element
		const numWidth = document.getElementById("inputWidth").value;

		for (let y = 0; y < numWidth; y = y + 1) {
			const columnElement = rowElement.insertCell();
			rowElement.appendChild(columnElement);
//added an event listener method for a click function to change colors of the cells
			columnElement.addEventListener("click", function(event) {
				const color = document.getElementById("colorPicker").value;
				event.target.style.backgroundColor = color;
			});
		}
	}
});
