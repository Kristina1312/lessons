let btn = document.querySelector(".button")
let btn1 = document.querySelector(".button1")
let btn2 = document.querySelector(".button2")
let wrapper = document.querySelector(".wrapper")
let body = document.querySelector(".body")
let count = 1;
let arr = []
btn.addEventListener("click", () => create() )
btn1.addEventListener("click", () => add() )
btn2.addEventListener("click", () => out())
let draggableCard

let add = () => {
    let wrapper = document.createElement("div")
    wrapper.classList.add("wrapper")
    wrapper.addEventListener('dragover', dragOver)
    body.insertAdjacentElement("afterbegin", wrapper)
}

let allWrappers = document.querySelectorAll(".wrapper")

let create = () => {
    let text = document.querySelector('.input').value
    if (text == '') return
    for(let i = 1; i<=text.length; i++){
        arr.push(text)
    }
    document.querySelector('.input').value = ''
   
}

let out = () => {
    let block = document.createElement("div")
    block.classList.add("block")
    block.setAttribute("draggable" , true)
    block.addEventListener("dragstart", dragStart)
    block.addEventListener("dragend", dragEnd)
    block.insertAdjacentHTML('beforeend', `
            <div class="num">${count}</div>
            <div class="text">${arr}</div>
    `)
    count++
    wrapper.insertAdjacentElement('beforeend', block)

}

allWrappers.forEach(wrapper => {
    wrapper.addEventListener("dragover", dragOver)
})

function dragStart(){
    draggableCard = this
}

function dragEnd(){
    draggableCard = undefined
}

function dragOver(){
    this.append(draggableCard)
}
