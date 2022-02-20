// let price = 10
// for(let n = 1; n <= 10; n++){

//     console.log(price*n)
// }

// let price = 10
// for (let i = 1.2; i <= 2; i+=0.2){
//     console.log(price*i)
// }


// let n = 5
// let result = 0
// for(let i = 0; i<=n; i++){
//     result +=(n+i)**2
//     console.log(result)
// }




// begin

// 25
// let x = prompt("Number")
// console.log(3*x**6-6*x**2-7)

// 26
// let x = prompt("Number")
// console.log(4*(x-3)**6-7*(x-3)**3+2)

// 33
// let x = prompt("килограм")
// let a = prompt ("цена")
// let y = prompt("килограм2 ")
// console.log(a/x) 
// //  за 1 кг
// console.log(a/x*y)
// // за у кг


// integer
// 19
// let x = prompt("Seconds")
// console.log(Math.floor(x/60))

// 24
// let k = prompt("Day")
// if(k%7 === 0){
//     console.log("Sunday")
// }
// else if(k%7 === 1){
//     console.log("Monday")
// }
// else if(k%7 === 2){
//     console.log("Tuesday")
// }
// else if(k%7 === 3){
//     console.log("Wednesday")
// }
// else if(k%7 === 4){
//     console.log("Thursday")
// }
// else if(k%7 === 5){
//     console.log("Friday")
// }
// else{
//     console.log("Saturday")
// }

// Boolean

// 13
// let a = prompt("A")
// let b = prompt("Б")
// let c = prompt("C")
// console.log(Boolean( a>0 || b>0 || c>0))

// 14
// let a = prompt("A")
// let b = prompt("Б")
// let c = prompt("C")
// console.log(Boolean( (a>0 && b<0 && c<0) || 
// (a<0 && b>0 && c<0) || 
// (a<0 && b<0 && c>0)))


// if

// 15
// let x = prompt("First")
// let y = prompt("Second")
// let z = prompt("Third")
// x = Number(x)
// y = Number(y)
// z = Number(z)
// if (x>z && y>z){
//     console.log(x+y)
// }
// else if (x>y && z>y){
//     console.log(x+z)
// }
// else {
//     console.log(y+z)
// }

// 28
// let x = prompt("Year")
// if ( x % 4 === 0 && ! x % 100 === 0 
//     && ! x % 400 === 0){
// console.log("366")
// } 
// else{
//     console.log("365")
// }


// for

// 13
// let x = prompt("Number")
// let result = 0
// for (let i = 1.1; i <= x; i+=0.1) {
//     result += i
//     result += -i
//     console.log(result)
// }

// 36
// let n = prompt("first")
// let k = prompt("second")
// let result = 0
// for (let i = 1; i <= n; i++) {
//     result += i**k
// }
// console.log(result)

// 38
// let n = prompt("Number")
// let result = 0
// for (let i = 1; i <= n; i++) {
//   for( let a = 1; a <= n ; a--)  
//     {
//         result += i**a
// }
// }
// console.log(result)

// 40
// let a = prompt("First")
// let b = prompt("Second")
// for( ; a<=b; a++){
//     for( let i = 0 ; i<=a; ++i){
//     console.log(a+i)
//     }
// }