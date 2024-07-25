
// Wait for the DOM to be fully loaded before running the inside the
// function 
document.addEventListener('DOMContentLoaded', () => {
  const options = document.querySelectorAll('.option');

  const userPick = document.querySelector('.user-pick');
  const computerPick = document.querySelector('.computer-pick');

  const result = document.querySelector('.result');

  options.forEach(option => option.addEventListener('click', (elem) => {
    const userChoice = elem.target.id.replace('You pick: ', '');
    userPick.textContent = `You pick: ${userChoice}`;

    const computerChoice = getComputerPick();
    computerPick.textContent = `Computer pick: ${computerChoice}`;

    const gameResult = getGameResult(userChoice, computerChoice);
    result.textContent = `RESULT: ${gameResult}`;
  }));

    const getGameResult = (userChoice, computerChoice) => {
      if (userChoice === computerChoice) {
        return "It's a DRAW🤝"
      } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice=== 'rock')
      ) {
        return 'You WIN!'
      }
      return 'Computer Win'
      
    };

    const getComputerPick = () => {
      const options = ['rock', 'paper', 'scissors'];
      const getElement = Math.floor(Math.random() * options.length);
      return options[getElement];
    };
});
