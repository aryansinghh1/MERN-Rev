//////////////////////////////////////learning scope and hoisting///////////////////////////////////////

// let a = 5;

// function sayHello() {
//     console.log("Hello");
// }

// sayHello();
// console.log(a);

// function scope() {
//     if(true){
//         // let num = 5;
//         // const num = 5;
//         var num = 5;
//         // console.log(num);  // it will print 5
//     }
//     // console.log(num);  // using let it would give you reference error : num is not defined
//     // console.log(num);  // using const it would give you reference error : num is not defined
//     // console.log(num);  // using var it will print num.
// }
// console.log(num);  // using let const and var it will not print num.

// scope();

//////////////////////////////////////////////////////////////////////

// console.log(num1);
// console.log(num2);
// console.log(num3);

// let num1 = 1;
// var num2 = 3;
// const num3 = 5;

////////////////////////////////////////////////////////////////////

//////////////////////////////////async////////////////////////////////

// console.log("2");

// setTimeout(()=>{
//     console.log("1");
// },3000);

// console.log("5");

// setTimeout(()=>{
//     console.log("4");
// },2000);

// console.log("3");

// setTimeout(()=>{
//     console.log("6");
// },1000);

////////////////////////////////////////////////////////////////////

// console.log("start");
// setTimeout(()=>{
//     console.log("hello");
// },0)
// console.log("end");

///////////////////////////////////////////////////////////////////

/////////////////////Promise//////////////////////////////////

// console.log("1");
// Promise.resolve().then(()=>{console.log("9")})
// console.log("2");
// setTimeout(()=>console.log("3"),3000)
// console.log("4");
// setTimeout(()=>console.log("5"),1000)
// Promise.resolve().then(()=>{console.log("8")})
// console.log("6");
// setTimeout(()=>console.log("7"),2000)

///////////////////////////////////callack///////////////////////
// function one(){
//     console.log("This is one");
// }

// function two(fn){
//  fn();
// }

// two(one);

///////////////////////////////////////////////

// function greet (name){
//     console.log(`hello ${name}`);
// }

// function callGreet(callback){
//     console.log("start");
//     // callback("aryan");
//     callback();
//     console.log("end");
// }

// callGreet(greet);
// callGreet(greet("jerry"));   //we can't do this

// callGreet(()=>{
//     greet("aryan");
// })

////////////////////////////////////////////////////

// setTimeout(()=>{
// console.log("hello");
// },1000)

////////////////////////////////////////////////

// function login(){
//     console.log("Logging in....");

//     setTimeout(() => {
//         console.log("logged in successfully");
//     }, 5000);
// }

// function getUser(){
//     console.log("getting user....");
//     setTimeout(() => {
//         console.log("User details loaded");
//     }, 2000);
// }

// function getOrders(){
//     console.log("getting orders");

//     setTimeout(() => {
//         console.log("Orders loaded");
//     }, 1000);
// }

// function getOrderDetails(){
//     console.log("Getting order details.....");
//     setTimeout(() => {
//         console.log("Order details loaded");
//     }, 4000);
// }

// login();
// getUser();
// getOrders();
// getOrderDetails();

///////////////////////////////////////////////////////////////////

function login(callack) {
  console.log("Logging in....");

  setTimeout(() => {
    console.log("logged in successfully");
    callack();
  }, 5000);
}

function getUser(callack) {
  console.log("getting user....");
  setTimeout(() => {
    console.log("User details loaded");
    callack();
  }, 2000);
}

function getOrders(callack) {
  console.log("Getting orders");

  setTimeout(() => {
    console.log("Orders loaded");
    callack();
  }, 1000);
}

function getOrderDetails() {
  console.log("Getting order details.....");
  setTimeout(() => {
    console.log("Order details loaded");
  }, 4000);
}

login(() => {
  getUser(() => {
    getOrders(() => {
      getOrderDetails();
    });
  });
});
