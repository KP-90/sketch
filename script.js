const contain = document.querySelector("#container");
const btn = document.querySelector("#reset");

function removeBoard() {
    while (contain.firstChild) {
        contain.removeChild(contain.firstChild);
    }
}

function addEvents() {
    const boxes = document.querySelectorAll(".item");
    boxes.forEach(box => box.addEventListener('mouseover', function(e){
        this.classList.add("active");
    }))
}

function createDiv(x) {
    removeBoard()
    for(let i = 0; i < x; i++) {
        let row = document.createElement("div");
        row.setAttribute('class', 'row');
        for(let j = 0; j < x; j++) {
            let item = document.createElement("div");
            item.setAttribute('class', 'item');
            row.appendChild(item);
        }
        contain.appendChild(row);
    }
    addEvents();
}

createDiv(16); //Creates 16x16 grid of divs

btn.addEventListener("click", function() {
    let allItems = document.querySelectorAll(".active");
    allItems.forEach(item => item.classList.remove('active'));
    let user = 999;
    while(user > 99){
        user = parseInt(prompt("Enter new size <100: "));
    }
    createDiv(user);
})