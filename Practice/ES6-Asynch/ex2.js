/*let calc=(a,b,operation)=>{
    if(operation==="sum"){
        return a+b;
}
if(operation==="multii"){
    return a*b;
}
}

let a=calc(20,30,"sum")
console.log(a)*/

let sum=(a,b)=>{return a+b}
let multi=(a,b)=>{return a*b}
let calc=(a,b,callback)=>{
    return callback (a,b)}

let a=calc(20,50,sum)
console.log(a)