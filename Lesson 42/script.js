document.querySelector(".btn").addEventListener("click", () => addNewUser())
document.querySelector(".view_btn").addEventListener("click", () => showUsers())
let id = 0
let personArr = []

let addNewUser = () => {
    let name = document.querySelector(".user_name").value
    let age = document.querySelector(".user_age").value

    let date = new Date()
    let currentDate = date.getFullYear() + "." + (Number(date.getMonth()+1)) + "." + date.getDate()

    const person = {
        "id" : id,
        "name" : name,
        "age" : age,
        "createDate" : currentDate
    }
    id++
    personArr.push(person)
    document.querySelector(".user_age").value = ""
    document.querySelector(".user_name").value = ""
}

let showUsers = () => {
    let wrapper = document.querySelector(".wrapper")
    wrapper.innerHTML = ""
    personArr.forEach(person =>{
        let card = document.createElement("div")
        card.classList.add("card")
        card.setAttribute("id", person.id)
        card.insertAdjacentHTML("beforeend", `
            <div class="card_user_name">${person.name}</div>
            <div class="card_user_age">${person.age}</div>
            <div class="date">${person.createDate}</div>
            <div class="edit">x</div>
        `)
        card.querySelector(".edit").addEventListener("click", removeCard)
        wrapper.insertAdjacentElement("beforeend", card)
    })
}

function removeCard(){
    let card = this.closest(".card")
    let id = card.getAttribute("id")
    for (let i = 0; i<personArr.length; i++){
        if(personArr[i].id == id){
            personArr.slice(i, 1)
            console.log(personArr)
            break
        }
    }
    card.remove()
    
}