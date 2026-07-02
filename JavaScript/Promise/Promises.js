const promise  = new Promise((resolve,reject) =>{
    let success = false;

    setTimeout(()=>{
        if(success){
            resolve("Success");
        }
        else{
            reject("Failed")

        }
    },1000)
});

promise.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("Promies complete");
})