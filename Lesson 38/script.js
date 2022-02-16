// let input = document.querySelector(".input")
// input.addEventListener("click", () => addResult())
// let addResult = () => {
//     let inputText = document.querySelector(".input_text")
//     console.log(inputText.value*2)
//     }



let wrapper = document.querySelector(".wrapper")
let btn = document.querySelector(".button")
btn.addEventListener("click", () => create())

let create = () => {
    let size = document.querySelector(".input_text").value
    if (size<50 || size>500)
    return
    let block = document.createElement("div")
    block.classList.add(".block")
    block.style.width = size+"px"
    block.style.height = size+"px"
    wrapper.insertAdjacentElement("afterbegin", block)
}

// let btn = document.querySelector(".button")
// btn.addEventListener("click", () => numbers())
// let numbers = () => {
    
//     let first = document.querySelector(".first").value
//     let second = document.querySelector(".second").value
//     let arr = []
//     if (first<second){
//         for (; first <= second; first++) {
//         arr.push(first)
        
//     }}
//     else if (second<first){
//         for (; second <= first; second++) {
//             arr.push(second)
            
//         }
//     }
//     let wrapper = document.querySelector(".wrapper")
//     wrapper.innerHTML = ""
//     let li = ""
//     for (let i = 0; i < arr.length; i++){
//     li += `<li>${arr[i]}</li>`
//     }
//     wrapper.insertAdjacentHTML("afterbegin", li)
// }