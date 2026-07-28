async function test() {
    console.log("Message:2");

    const response = await fetch("./studentdata.json");
    const stdn = await response.json();

    console.log(stdn);

    console.log("Message:3");
    return stdn;
}

test();

console.log("Message:4");