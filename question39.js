try {
const str = "Enter a string$";
const checkString = "$";
if(str.indexOf(checkString) !== -1) {
    console.log(`The string contains ${checkString}`);
    throw "err";
} else {
    console.log(`The string does not contain ${checkString}`);
}
} catch (err) {
 console.log(`The string contains $`);
}