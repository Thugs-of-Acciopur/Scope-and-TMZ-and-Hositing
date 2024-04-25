
// var a

// let a = 10 


// for(let i = 1; i<=1; i++){
//     // let a
//     // console.log("inner 1", a) 

//     let a = 20 
//     console.log("inner 2", a)
// }


// console.log("outer",a) // 20



var a = 100 
 


// for(let i = 1; i<=1; i++){
//     console.log("inner 1", a)
//     var a = 500
// }

function hello(){
    console.log("inner 1", a)
    var a = 500
}

hello()

console.log("outer",a) // 500