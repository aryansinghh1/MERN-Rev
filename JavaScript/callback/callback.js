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

// function login(callack) {
//   console.log("Logging in....");

//   setTimeout(() => {
//     console.log("logged in successfully");
//     callack();
//   }, 5000);
// }

// function getUser(callack) {
//   console.log("getting user....");
//   setTimeout(() => {
//     console.log("User details loaded");
//     callack();
//   }, 2000);
// }

// function getOrders(callack) {
//   console.log("Getting orders");

//   setTimeout(() => {
//     console.log("Orders loaded");
//     callack();
//   }, 1000);
// }

// function getOrderDetails() {
//   console.log("Getting order details.....");
//   setTimeout(() => {
//     console.log("Order details loaded");
//   }, 4000);
// }

// login(() => {
//   getUser(() => {
//     getOrders(() => {
//       getOrderDetails();
//     });
//   });
// });

//////////////////////////////callback hell////////////////////////////////////////////

function one(callack) {
  console.log("1");
  callack();
}
function two(callack) {
  console.log("2");
  callack();
}
function three(callack) {
  console.log("3");
  callack();
}
function four(callack) {
  console.log("4");
  callack();
}
function five(callack) {
  console.log("5");
  callack();
}
function six(callack) {
  console.log("6");
  callack();
}
function seven(callack) {
  console.log("7");
  callack();
}
function eight(callack) {
  console.log("8");
  callack();
}
function nine(callack) {
  console.log("9");
  callack();
}
function ten(callack) {
  console.log("10");
}

one(() => {
  two(() => {
    three(() => {
      four(() => {
        five(() => {
          six(() => {
            seven(() => {
              eight(() => {
                nine(() => {
                  ten();
                });
              });
            });
          });
        });
      });
    });
  });
});
