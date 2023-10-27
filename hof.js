// higher order function = first class function 
// a function that returns a function and take another function as argument 

const powerTwo= (n)=>{
    return n ** 2
};
//console.log(powerTwo(2));
// js allows to pass a function as argument;
function powerCube (powerTwo,n){
     return powerTwo(n)*n
};
// console.log(powerCube(powerTwo,3));

function sayHello(){
    return ()=>{
        console.log("Hello Adarsh!"); //returning a function
    }
}

let guessValue= sayHello() // what will be the value in guessValyue??? It will we that arrow function which is returned in sayHello function
//console.log(guessValue); //it returns [Function (anonymous)]
//guessValue()               // it will return Hello Adarsh!



const higherOrder = n=>{
    const oneFun = m =>{
        const twoFun= p=>{
            return m+n+p;
        }
        return twoFun
    }
    return oneFun
}

console.log(higherOrder(2)(3)(4));// calling method

// use of it

const myNums =[2,3,4,5]
 const sumArray= arr =>{
    let total = 0
    arr.forEach(function(ele) {
        total+= ele
    });
    return total
 }
 
//  console.log(sumArray(myNums));

// function oneMoreHello(){
//     console.log("hello Adarsh!");
}
//  setInterval(oneMoreHello,2000);

// setTimeout(oneMore)
 