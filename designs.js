const form = document.getElementById("sizePicker");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const tblElement = document.getElementById("pixelCanvas");
  tblElement.innerHTML = "";

  const numHeight = document.getElementById("inputHeight").value;

  for (let x = 0; x < numHeight; x = x + 1) {
    const rowElement = document.createElement("tr");
    tblElement.appendChild(rowElement);

    const numWidth = document.getElementById("inputWidth").value;

    for (let y = 0; y < numWidth; y = y + 1) {
      const columnElement = rowElement.insertCell();
      rowElement.appendChild(columnElement);

      columnElement.addEventListener("click", function (event) {
        const color = document.getElementById("colorPicker").value;
        event.target.style.backgroundColor = color;
      });
    }
  }
});
