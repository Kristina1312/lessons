let btn = document.querySelector(".button")
let wrapper = document.querySelector(".wrapper")
let count = 1;
let x = 0
let draggableCard
wrapper.addEventListener('dragover', dragOver)

btn.addEventListener("click", () => add())

function remov() {
    this.remove()
    x--
}

let add = () => {
    if(x>=6) return
    let block = document.createElement("div")
    block.addEventListener("click", remov)
    block.classList.add("block")
    let color = document.querySelector(".color").value
    block.style.backgroundColor = color
    block.setAttribute("draggable" , true)
    block.addEventListener("dragstart", dragStart)
    block.addEventListener("dragend", dragEnd)
    block.insertAdjacentHTML('beforeend', `
            <div class="num">${count}</div>
    `)
    count++
    wrapper.insertAdjacentElement('beforeend', block)
    x++
}


function dragStart(){
    draggableCard = this
}

function dragEnd(){
    draggableCard = undefined
}

function dragOver(){
    this.append(draggableCard)
}

let allWrappers = document.querySelectorAll(".wrapper")

allWrappers.forEach(wrapper => {
    wrapper.addEventListener("dragover", dragOver)
})