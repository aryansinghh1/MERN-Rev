/////////////////////////////////promises//////////////////////////////////////////////////////

// const promise  = new Promise((resolve,reject) =>{
//     let success = true;
//     // let success = false;

//     setTimeout(()=>{
//         if(success){
//             resolve("Success");
//         }
//         else{
//             reject("Failed")

//         }
//     },1000)
// });

// promise.then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{
//     console.log("Promies complete");
// })


///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function login(callack) {
  console.log("Logging in....");

  return new Promise((resove,reject)=>{
    setTimeout(() => {
    console.log("2.Logged in successfully");
    resove();
  }, 5000);
  })
  
}

function getUser(callack) {
  console.log("getting user....");
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
    console.log("User details loaded");
resolve();
    
  }, 2000);
  })
}

function getOrders(callack) {
  console.log("Getting orders");

  return new Promise((resolve,reject)=>{
    setTimeout(() => {
    console.log("Orders loaded");
    resolve();
  }, 1000);
  })
}

function getOrderDetails() {
  return new Promise((resolve,reject)=>{
    console.log("Getting order details.....");
  setTimeout(() => {
    console.log("Order details loaded");
    resolve();
  }, 4000);
  })
}