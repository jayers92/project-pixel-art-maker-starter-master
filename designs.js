const form = document.getElementById('sizePicker');
form.addEventListener('submit', function (event) {
    event.preventDefault();  
    const tblElement = document.getElementById('pixelCanvas');

    for (let x = 0; x < 31; x = x + 1);{
        const rowElement = document.createElement('tr');
        tblElement.appendChild(rowElement);
    }
        for(let j = 0; j < 31; j = j + 1);{
            const columnElement = rowElement.insertCell();
            rowElement.appendChild(columnElement);
        }
            columnElement.addEventListener('click', function(event) {
                const color = document.getElementById('colorPicker').value;
                event.target.style.backgroundColor = color;
            });
        });


