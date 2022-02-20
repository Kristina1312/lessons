let allCards = document.querySelectorAll(".card")
let allWrappers = document.querySelectorAll(".wrapper")

let draggableCard
let dragOverWrapper

allCards.forEach(card => {
    card.addEventListener("dragstart", dragStart)
    card.addEventListener("dragend", dragEnd)
    card.addEventListener("dragenter", dragEnter)
})

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

function dragEnter(){

}