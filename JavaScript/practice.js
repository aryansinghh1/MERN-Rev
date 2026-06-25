// console.log('A');
// console.log('B');
// console.log('C');


// let a = 5; 

// function sayHello() {
//     console.log("Hello");
// }

// sayHello();
// console.log(a);


function scope() {
    if(true){
        // let num = 5;
        const num = 5;
        // console.log(num);  // it will print 5
    }
    // console.log(num);  // using let it would give you reference error : num is not defined
    console.log(num);  // using const it would give you reference error : num is not defined
}

scope();

