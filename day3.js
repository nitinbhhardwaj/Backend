//Promises - The promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. A Promise is in one of these states:
//Pending:initial state, neither fulfilled nor rejected.
//Fulfilled: meaning that the operation completed successfully.
//Rejected: meaning that the operation failed.


const promiseOne=new Promise((resolve,reject)=>{
 console.log("Promise task 1"); 
 resolve("Promise passed by using resolve");
});
let msg=true;
if(!msg==true){
    console.log("Message using promised failed");
}
else{
    console.log("error.....");
}
promiseOne.then((result)=>{
    console.log(result);
}
).catch((error)=>{
    console.log("error");
})