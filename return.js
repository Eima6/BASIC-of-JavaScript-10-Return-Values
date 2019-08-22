// R E T U R N  V A L U E S 
// Okey when we've creating functions we've been doing inside function is logins something in the 
// console.but normally we dont want to doi it this, normaly we want to return a value from the
// function to us. 
// Npow we have the funcion to calculate the area of a circle and its working inside of the function,
// but we cant use it outside.
const calcArea= function(radius){
    let area=3.14*radius**2;
    console.log(area);
};

calcArea(5);
// Lets see. Here the console says area its not defined because area its defined inside of the function
// not outside. So we have to return the value of the area. We do it this with the reserved word
// return
// console.log(area); i comment this because if i dont comment the nex code its not working

const calCarea2=function(radius){
    let area2=3.14*radius**2;
    return area2;
}
// Probably you think its gonna work like this, but not. We have to do it on another way. 
 calCarea2(5);
 
//   We have  to return the value and do it something with it. So we have to store the value of 
//  the function in some kind of variable
 let area2= calCarea2(5);
 console.log(area2);

//  Now we can clean the code and do it more easy and fast.. We dont have to  de calrate a variable
// just return the piece of code we need.

const calCarea3=function(radius){
    return 3.14*radius**2;
}

let area3=calCarea3(8);
console.log(area3)





// const  mayusculas = function(texto){
    
//      return texto.toUpperCase();
//      console.log('hola');
// }

// var nombre = mayusculas('juan');
// mayusculas('Juan');
// console.log(nombre);
