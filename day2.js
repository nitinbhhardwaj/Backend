//Synchronus(blocking and non blocking task) and asynchronus
// console.log("task3");
// function hello(){
//     console.log("task1");
// }
// hello();
// console.log("task2");

// function hello(n1,n2,cb){
//     console.log("task1");
//     return n1+n2;
//     cb();
// }
// let a=10;
// let b=20;
// console.log(hello(a,b,hi()));
// function hi(){
//     console.log("sayhi");
// }
// hi();
// function demo(){
//     console.log("Demo");
// }

function call() {
    console.log("Learning FSD");
}

function display(cb) {
    console.log("Hello fsd");
    cb();
}

display(call);