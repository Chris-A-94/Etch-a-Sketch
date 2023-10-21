function randomRGBValue()
{
    let number = Math.random() * 256;
    number = Math.floor(number);
    return number;
}


function changeColor(square,brightness)
{   
    let red, blue, green;
    red = randomRGBValue();
    blue = randomRGBValue();
    green = randomRGBValue();

    square.style.backgroundColor = 'rgb('+red+','+green+','+blue+')';
    square.style.filter = 'brightness('+brightness+')';
}


function createSquare(row)
{
    const square = document.createElement('div');
    let brightness = 1;
    square.classList.add('square');
    square.style.border = 'solid';
    square.style.flex = '1';
    square.style.borderWidth = 'thin';
    square.style.borderColor = 'lightgray';
    square.style.backgroundColor = 'white';
    square.addEventListener('mouseenter',()=>{
        changeColor(square,brightness);
        if(brightness > 0)
          brightness = brightness - 0.1;
        
    });
    row.appendChild(square);
}

function createRow()
{
    const row = document.createElement('div');
    row.classList.add('row');
    row.style.flex = '1';
    row.style.display = 'flex';
    return row;
}

function createGrid(size)
{
    const mainSquare = document.getElementById('mainSquare');

    for (let i = 0; i < size; i++)
    {
      let row = createRow();
      for(let j = 0; j < size; j++)
            createSquare(row);
      mainSquare.appendChild(row);
    }
}

function deleteGrid()
{
    const mainSquare = document.getElementById('mainSquare');
    


    while(mainSquare.firstChild)
        mainSquare.removeChild(mainSquare.firstChild);
}

const boton = document.getElementById('gridSizer');
boton.addEventListener('click',()=>{
    let gridSize = +prompt("Ingrese numero de cuadrados por lado. Default: 16. Maximo: 99.");
    deleteGrid();
    if(gridSize > 0 && gridSize < 100)
        createGrid(gridSize);
    else
        createGrid(16);
})

createGrid(16);