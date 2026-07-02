function login() {
  console.log("Logging in....");

  return new Promise((resove, reject) => {
    setTimeout(() => {
      console.log("Logged in successfully");
      resove();
    }, 5000);
  });
}

function getUser() {
  console.log("Getting user....");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("User details loaded");
      resolve();
    }, 2000);
  });
}

function getOrders() {
  console.log("Getting orders");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Orders loaded");
      resolve();
    }, 1000);
  });
}

function getOrderDetails() {
  console.log("Getting order details.....");

  setTimeout(() => {
    console.log("Order details loaded");
  }, 4000);
}

async function load() {
    await login();
    await getUser();
    await getOrders();
    await getOrderDetails();
}

load();