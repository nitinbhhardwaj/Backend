//Create promise that will print username and password using and if useraname and password not found then it will call reject state and print error.......
new Promise((resolve, reject) => {
    setTimeout(function () {
        console.log("this is promises");
        let err = true;
        if (!err) {
            resolve();
        } else {
            reject();
        }
    }, 2000);
})
.then(() => {
    console.log();
})
.catch(() => {
    console.log();
});