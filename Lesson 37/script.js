// let b = []

// let addition = () => {
//     let a = prompt("Что то")
//     if ( a === null){
//         return
//     }
//     b.push(a)
// }
// let user = () => {
//     for(let i = 0; i < b.length; i++){
//         console.log(b)
//     }

// }



let inputBtn = document.querySelector(".input_btn")
let arr=[]
let inputText = document.querySelector(".input_text")
// inputText.addEventListener("change",() => add() )
inputBtn.addEventListener("click", () => addModel())

let addModel = () => {
    let body = document.querySelector("body")
    
    body.insertAdjacentHTML("afterbegin", `
    <div class="button">
    <div class="model">dfsas</div>
    <div class="input_btn1">Убрать</div>
    </div>
    `)
    let inputBtn1 = document.querySelector(".input_btn1")
    inputBtn1.addEventListener("click", () => addText())
    document.querySelector("input_ok").addEventListener("click", () => addText())
    // let text = inputText.value
    // if(text == "")return
    // arr.push(text)
    // console.log(arr)
    // inputText.value = ""
}

let addText = () => {
    document.querySelector(".button").remove()
    // let text = document.querySelector(".model_input_text").value
    // if(text == "") return
    // arr.push(text)
    // console.log(arr)
}