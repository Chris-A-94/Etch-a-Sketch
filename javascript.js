function changeColor(square)
{
    square.style.backgroundColor = 'black';
}

function createSquare(row)
{
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.border = 'solid';
    square.style.flex = '1';
    square.style.borderWidth = 'thin';
    square.addEventListener('mouseenter',()=>{
        changeColor(square);
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

const mainSquare = document.getElementById('mainSquare');

for (let i = 0; i < 16; i++)
{
    let row = createRow();
    for(let j = 0; j < 16; j++)
        createSquare(row);
    mainSquare.appendChild(row);
}