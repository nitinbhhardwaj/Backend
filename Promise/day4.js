//Event loop concept
//Create one log syncronous task and give message syncronous task
// function main(){
//     //promises,settimeout,and then use callback outside
//     setTimeout(() => {
//     console.log("Message:1");
// }, 0);
// }

console.log("Synchronous task");
const f1=()=>{
    console.log("f1");
}

const f2=()=>{
    console.log("f2");
}

const f3=function main(){
    console.log("this event loop");
    setTimeout(f1,1000);
    setTimeout(f3,2000);
    new Promise((resolve,reject)=>{
        resolve("I am promise1");
    }).then((result)=>{
        console.log(result);
    })
    new Promise((resolve,reject)=>{
        resolve("this is promise2")
    }).then((res)=>{
        console.log(res);
    })
}
f3();
