const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });

function getComputerChoice(arr) {
    const randonChoice = Math.floor(Math.random() * arr.length);
    return arr[randonChoice];
}


function getPersonChoice() {
	rl.question("Enter 1 choice from the list 'rock', 'paper', 'scissors': ", (choice) => {
		if (choice === 'rock') {
			console.log(`You chose: ${choice}`);
		}
		if (choice === 'paper') {
			console.log(`You chose: ${choice}`);
		} 
		if (choice === 'scissors') {
			console.log(`You chose: ${choice}`);

		}
		rl.close();
	});
};
console.log(getPersonChoice());
