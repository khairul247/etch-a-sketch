const container = document.querySelector('#container');
const numberBoxes = Math.pow(16,2);

for (let i=0;i<numberBoxes;i++){
const box = document.createElement('div');
console.log(box)
box.classList.add("box");
container.appendChild(box);

box.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "black";
})
}
