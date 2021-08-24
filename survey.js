const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.question('What do you think of Node.js? ', (answer) => {
  input.push(answer)

  rl.question("What's your name? Nicknames are also acceptable : ", (answer) => {
    input.push(answer)

    rl.question("What's an activity you like doing? ", (answer) => {
      input.push(answer)

      rl.question("What do you listen to while doing that? ", (answer) => {
        input.push(answer)

        rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
          input.push(answer)

          rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
            input.push(answer)

            rl.question("Which sport is your absolute favourite? ", (answer) => {
              input.push(answer)

              rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
                input.push(answer)

                rl.close();

                const node = input[0];
                const name = input[1];
                const fav = input[2];
                const listen = input[3];
                const meal = input[4];
                const mealName = input[5];
                const sport = input[6];
                const power = input[7];

                console.log('\n')
                console.log(`I created this profile using node, its ${node} \nMy name is ${name}, I like to ${fav} while listening to ${listen} \nMy favourite meal is ${meal}, I love to eat ${mealName}... \nMy favourite sport is ${sport} \n...and i can ${power}`)
              });
            });
          });
        });
      });
    });
  });
});