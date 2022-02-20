let userArr = [];

let addUser = () =>{
    let user = prompt('set user')
    if (user === null) {
        console.log('error')
        return
    }
    userArr.push(user)
}

let viewUser = () => {
    let wrapper = document.querySelector('.wrapper')
    wrapper.innerHTML = '';
    //wrapper.append(userArr)
    let li = '';
    for(let i = 0; i < userArr.length; i++){
        li += `<li>${userArr[i]}</li>`
    }
    
    wrapper.insertAdjacentHTML('afterbegin',li)


}