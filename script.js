

function getComputerChoice(arr) {
    const randonChoice = Math.floor(Math.random() * arr.length);
    return arr[randonChoice];
}
const arr = ["rock", "paper", "scissors"];
console.log(getComputerChoice(arr))
console.log(getComputerChoice(arr))
console.log(getComputerChoice(arr))
console.log(getComputerChoice(arr))