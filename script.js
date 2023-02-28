
const gridCreateBtn = document.getElementById('gridCreateBtn');
const getColor = document.querySelector('#color-option');
let numberOfSquares = '';





gridCreateBtn.addEventListener('click', getSquareNumber);

function paintSquare(e){
   const colorClass = getColor.value;

 
   
   if(colorClass == 'random'){

     e.target.style.backgroundColor = getRandomColor();
   }

   if(colorClass == 'fade'){

    if(!e.target.classList.contains('been-here')){
        e.target.classList.add('been-here');
        e.target.classList.add('fade');
        e.target.style.opacity = 0.1;
    }else{
        e.target.style.opacity = e.target.style.opacity * 2;
    }

    /* let curOp = e.target.style.opacity;

    curOp += 0.1; */

    //
   
    
    console.log(curOp);
    
   
   }
   
   e.target.classList.add(colorClass);
}

function addSquares(numberOfSquares){
    const parent = document.getElementById('app');

    for(let i = 0; i < numberOfSquares;i++){
        let container = document.createElement('div');
        container.classList.add('flex-container');
        parent.appendChild(container);
        for(let i = 0; i < numberOfSquares; i++){
            let square = document.createElement('div');
            square.classList.add('single-square');
           
            container.appendChild(square);

            square.addEventListener('mouseenter', paintSquare);
            }
        }
        
    }

function getRandomColor(){
    let hexColor =  Math.floor(Math.random() * 16777215).toString(16);

    while(hexColor.length < 6){
        hexColor = "0" + hexColor;
    }

    return "#" + hexColor;
}   


function getSquareNumber(){
    numberOfSquares = Number(prompt('How many squares?'));
    if(numberOfSquares > 100) return alert('Too many Squares!');
    addSquares(numberOfSquares);
}



