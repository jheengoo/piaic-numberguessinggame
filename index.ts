import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  "\n",
  chalk.white.bold.bgGreenBright('"`"`-._,-\'"`-._,-\'"`-._,-\'"`-._,-\''),
  "\n"
);
console.log(
  "\n",
  chalk.white.bold("Welcom to The Number Guessing Game."),
  "\n"
);

console.log(
  "\n",
  chalk.white.bold.bgGreenBright(
    "The desired number lies between 1 and 100. You have three turns. Press any key to start"
  ),
  "\n"
);

(async function runGame() {
  let numbertoG = Math.ceil(Math.random() * 100);

  let turn = 0;
  do {
    turn++;
    const res = await inquirer.prompt([
      {
        type: "number",
        name: "GuessedNumber",
        message: "Take a Guess",
        default: 0,
      },
    ]);
    console.log("ye res aya", res);
    const number = res.GuessedNumber;

    if (number === numbertoG) {
      console.log(
        chalk.blueBright(
          "Bingo, You got it right. The Number I had in mind was",
          numbertoG
        )
      );
      turn = 3;
    } else if (Math.abs(number - numbertoG) <= 10) {
      console.log(chalk.greenBright("OOOhhhh, So close"));
    } else if (Math.abs(number - numbertoG) <= 20) {
      console.log(chalk.cyanBright("OOOhhhh, Can be Closer"));
    } else {
      console.log(chalk.cyanBright("That was a pretty wild guess, ain't it?"));
    }
    if (number !== numbertoG && turn > 2) {
      console.log(
        chalk.redBright(
          "Better Luck Next Time. The Number I had in mind was",
          numbertoG
        )
      );
    }
  } while (turn <= 2);
})();
