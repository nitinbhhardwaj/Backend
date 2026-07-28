//Create promise that will print username and password using and if useraname and password not found then it will call reject state and print error.......
new Promise((resolve, reject) => {
    setTimeout(function () {
        console.log("this is promises");
        let err = true;
        if (!err) {
            resolve("Username and password found");
        } else {
            reject("Error....:data fail");
        }
    }, 2000);
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});