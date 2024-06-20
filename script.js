const container = document.querySelector('#container');
const button = document.querySelector('button');
let input = 16;

createGrid(input);

// function random_rgba() {
//     var o = Math.round, r = Math.random, s = 255;
//     return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
// }


function createGrid(input){

    while (container.firstChild) {
    container.removeChild(container.lastChild);}

    const numberBoxes = input * input;

    for (let i=0;i<numberBoxes;i++){
        const box = document.createElement('div');
        box.classList.add("box");
        box.style.cssText = `width: ${(1 / input) * 100}%; height: ${(1 / input) * 100}%;`;
        container.appendChild(box);

        let interactions = 0;

        box.addEventListener("mouseover", (event) => {
        interactions++;
        let opacity = interactions*0.1;
        event.target.style.backgroundColor = `rgba(255,0,0, ${opacity})`;

        if (opacity>1){
            opacity = 1;
        }
        })
    }
}

button.addEventListener('click', () => {

    let inputValue = prompt('Pick the number of squares per side. Choose only from 1 to 100: ');
    inputValue = Number(inputValue);
    createGrid (inputValue);

})
