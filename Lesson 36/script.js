let begin1 = () => {
    userArr = []
    let a = prompt("Первое")
    let p = 4*a
    userArr.push(p)
    let answer = document.querySelector('.answer')
    answer.innerHTML = '';
    let li = '';
    for(let i = 0; i < userArr.length; i++){
        li += `<li>${userArr[i]}</li>`
    }
    answer.insertAdjacentHTML('afterbegin',li)
}


let begin5 = () => {
    let userArr = []
    a = prompt("Сторона")
    let V = a**3
    let S = 6*(a**2)
    userArr.push( V, S)
    let answer = document.querySelector('.answer1')
    answer.innerHTML = '';
    let li = '';
    for(let i = 0; i < userArr.length; i++){
        li += `<li>${userArr[i]}</li>`
    }
    answer.insertAdjacentHTML('afterbegin',li)
}


let begin8 = () => {
    userArr = []
    a = prompt("Первое")
    let b = prompt("Второе")
    let result = (a+b)/2
    userArr.push(result)
    let answer = document.querySelector('.answer2')
    answer.innerHTML = '';
    let li = '';
    for(let i = 0; i < userArr.length; i++){
        li += `<li>${userArr[i]}</li>`
    }
    answer.insertAdjacentHTML('afterbegin',li)
}


let begin10 = () => {
    userArr = []
    a = prompt("Первый")
    b = prompt("Второй")
    userArr.push(a**2+b**2, a**2-b**2, (a**2)*(b**2), (a**2)/(b**2))
    let answer = document.querySelector('.answer3')
    answer.innerHTML = '';
    let li = '';
    for(let i = 0; i < userArr.length; i++){
        li += `<li>${userArr[i]}</li>`
    }
    answer.insertAdjacentHTML('afterbegin',li)
}


let begin32 = () => {
    userArr = []
    a = prompt("В Цельсиях")
    userArr.push(a*9/5+32)
    let answer = document.querySelector('.answer4')
    answer.innerHTML = '';
    let li = '';
    for(let i = 0; i < userArr.length; i++){
        li += `<li>${userArr[i]}</li>`
    }
    answer.insertAdjacentHTML('afterbegin',li)
}


let integer1 = () => {
    userArr = []
    a = prompt("Сантиметры")
    userArr.push(Math.floor(a/100))
    let answer = document.querySelector('.integer')
    answer.innerHTML = '';
    let li = '';
    for(let i = 0; i < userArr.length; i++){
        li += `<li>${userArr[i]}</li>`
    }
    answer.insertAdjacentHTML('afterbegin',li)
}


let integer7 = () => {
    userArr = []
    a = prompt("Число")
    userArr.push((Math.floor(a/10))+a%10 , (Math.floor(a/10))*(a%10))
    let answer = document.querySelector('.integer1')
    answer.innerHTML = '';
    let li = '';
    for(let i = 0; i < userArr.length; i++){
        li += `<li>${userArr[i]}</li>`
    }
    answer.insertAdjacentHTML('afterbegin',li)
}


let integer9 = () => {
    userArr = []
    a = prompt("Число")
    userArr.push(Math.floor(a/100))
    let answer = document.querySelector('.integer2')
    answer.innerHTML = '';
    let li = '';
    for(let i = 0; i < userArr.length; i++){
        li += `<li>${userArr[i]}</li>`
    }
    answer.insertAdjacentHTML('afterbegin',li)
}



let integer18 = () => {
    userArr = []
    a = prompt("Число")
    a>999
    userArr.push(Math.floor((a%10000)/1000))
    let answer = document.querySelector('.integer3')
    answer.innerHTML = '';
    let li = '';
    for(let i = 0; i < userArr.length; i++){
        li += `<li>${userArr[i]}</li>`
    }
    answer.insertAdjacentHTML('afterbegin',li)
}

let integer20 = () => {
    userArr = []
    a = prompt("Секунды")
    userArr.push(Math.floor(a/3600))
    let answer = document.querySelector('.integer4')
    answer.innerHTML = '';
    let li = '';
    for(let i = 0; i < userArr.length; i++){
        li += `<li>${userArr[i]}</li>`
    }
    answer.insertAdjacentHTML('afterbegin',li)
}





let boolean1 = () => {
    userArr = []
    a = prompt("Number")
    userArr.push(Boolean(a>0))
    let answer = document.querySelector('.boolean')
    answer.innerHTML = '';
    let li = '';
    for(let i = 0; i < userArr.length; i++){
        li += `<li>${userArr[i]}</li>`
    }
    answer.insertAdjacentHTML('afterbegin',li)
}


let boolean5 = () => {
    userArr = []
    a = prompt("First")
    b = prompt("Second")
    userArr.push(Boolean(a>=0 || b<-2))
    let answer = document.querySelector('.boolean1')
    answer.innerHTML = '';
    let li = '';
    for(let i = 0; i < userArr.length; i++){
        li += `<li>${userArr[i]}</li>`
    }
    answer.insertAdjacentHTML('afterbegin',li)
}

let boolean10 = () => {
    userArr = []
    a = prompt("First")
    b = prompt("Second")
    userArr.push(Boolean(a%2 === 1 && b%2 ===0 || b%2 === 1 && a%2 ===0))
    let answer = document.querySelector('.boolean2')
    answer.innerHTML = '';
    let li = '';
    for(let i = 0; i < userArr.length; i++){
        li += `<li>${userArr[i]}</li>`
    }
    answer.insertAdjacentHTML('afterbegin',li)
}


let boolean12 = () => {
    userArr = []
    a = prompt("First")
    b = prompt("Second")
    c = prompt("Third")
    userArr.push(Boolean(a>0 && b>0 && c>0))
    let answer = document.querySelector('.boolean3')
    answer.innerHTML = '';
    let li = '';
    for(let i = 0; i < userArr.length; i++){
        li += `<li>${userArr[i]}</li>`
    }
    answer.insertAdjacentHTML('afterbegin',li)
}


let boolean16 = () => {
    userArr = []
    a = prompt("First")
    userArr.push(Boolean(a>=10 && a%2 === 0))
    let answer = document.querySelector('.boolean4')
    answer.innerHTML = '';
    let li = '';
    for(let i = 0; i < userArr.length; i++){
        li += `<li>${userArr[i]}</li>`
    }
    answer.insertAdjacentHTML('afterbegin',li)
}


let if1 = () => {
    userArr = []
    a = prompt("First")
    a = Number(a)
    result = 0
    if (a>0) {

        result = Number(a + 1)
    }
    else{
        result = a
    }
    userArr.push(result)
    let answer = document.querySelector('.if')
    answer.innerHTML = '';
    let li = '';
    for(let i = 0; i < userArr.length; i++){
        li += `<li>${userArr[i]}</li>`
    }
    answer.insertAdjacentHTML('afterbegin',li)
}


let if6 = () => {
    userArr = []
    a = prompt("First")
    b = prompt("Second")
    result = 0
    if (a>b) {

        result = a
    }
    else if (b>a){
        result = b
    }
    userArr.push(result)
    let answer = document.querySelector('.if1')
    answer.innerHTML = '';
    let li = '';
    for(let i = 0; i < userArr.length; i++){
        li += `<li>${userArr[i]}</li>`
    }
    answer.insertAdjacentHTML('afterbegin',li)
}


let if9 = () => {
    userArr = []
    a = prompt("First")
    b = prompt("Second")
    if (a>b) {

       a = b
       b = a
    }
    else if (b>a){
        a = a
        b = b
    }
    userArr.push(a , b)
    let answer = document.querySelector('.if2')
    answer.innerHTML = '';
    let li = '';
    for(let i = 0; i < userArr.length; i++){
        li += `<li>${userArr[i]}</li>`
    }
    answer.insertAdjacentHTML('afterbegin',li)
}


let if12 = () => {
    userArr = []
    a = prompt("First")
    b = prompt("Second")
    c = prompt("Third")
    result = 0
    if (a>b && c>b) {

        result = b
    }
    else if (c>a && b>a){
        result = a
    }
    else if(b>c && a>c){
        result = c
    }
    userArr.push(result)
    let answer = document.querySelector('.if3')
    answer.innerHTML = '';
    let li = '';
    for(let i = 0; i < userArr.length; i++){
        li += `<li>${userArr[i]}</li>`
    }
    answer.insertAdjacentHTML('afterbegin',li)
}


let if16 = () => {
    userArr = []
    a = prompt("First")
    b = prompt("Second")
    c = prompt("Third")
    if (c>b && b>a) {
        a = 2*a
        b = 2*b
        c = 2*c
    }
    else {
        a = -a
        b = -b
        c = -c
    }
    userArr.push(a , b ,c)
    let answer = document.querySelector('.if4')
    answer.innerHTML = '';
    let li = '';
    for(let i = 0; i < userArr.length; i++){
        li += `<li>${userArr[i]}</li>`
    }
    answer.insertAdjacentHTML('afterbegin',li)
}


let for6 = () => {
    userArr = []
    a = prompt("First")
    for (let i = 1.2; i<= 2; i+=0.2) {
        userArr.push(a*i)
        
    }
    let answer = document.querySelector('.for')
    answer.innerHTML = '';
    let li = '';
    for(let i = 0; i < userArr.length; i++){
        li += `<li>${userArr[i]}</li>`
    }
    answer.insertAdjacentHTML('afterbegin',li)
}




let for9 = () => {
    userArr = []
    a = prompt("First")
    b = prompt("Second")
    result = 0
    for (; a<= b; a++) {
        result += a**2
        
    }
    userArr.push(result)
    let answer = document.querySelector('.for1')
    answer.innerHTML = '';
    let li = '';
    for(let i = 0; i < userArr.length; i++){
        li += `<li>${userArr[i]}</li>`
    }
    answer.insertAdjacentHTML('afterbegin',li)
}


let for17 = () => {
    userArr = []
    a = prompt("First")
    n = prompt("Second")
    result = 0
    for ( let i = 0; i <= n; i++) {
        result += a**i
        
    }
    userArr.push(result)
    let answer = document.querySelector('.for2')
    answer.innerHTML = '';
    let li = '';
    for(let i = 0; i < userArr.length; i++){
        li += `<li>${userArr[i]}</li>`
    }
    answer.insertAdjacentHTML('afterbegin',li)
}


let for20 = () => {
    userArr = []
    n = prompt("First")
    result = 0
    for ( let i = 1; i <= n; i++) {
        result += i*i
        
    }
    userArr.push(result)
    let answer = document.querySelector('.for3')
    answer.innerHTML = '';
    let li = '';
    for(let i = 0; i < userArr.length; i++){
        li += `<li>${userArr[i]}</li>`
    }
    answer.insertAdjacentHTML('afterbegin',li)
}



let for37 = () => {
    userArr = []
    n = prompt("First")
    result = 0
    for ( let i = 1; i <= n; i++) {
        result += i*i
        
    }
    userArr.push(result)
    let answer = document.querySelector('.for4')
    answer.innerHTML = '';
    let li = '';
    for(let i = 0; i < userArr.length; i++){
        li += `<li>${userArr[i]}</li>`
    }
    answer.insertAdjacentHTML('afterbegin',li)
}