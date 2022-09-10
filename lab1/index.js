
console.log("heeey");
const helloPrint = () => {
    console.log("hello printed by a function");
    }
const add = (a, b) => {
    return a + b;
}

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 10+12);
}
// console.log(generateRandomNumber());
module.exports = {
    helloPrint,
    add,
    generateRandomNumber
}
