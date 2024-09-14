# cats_cli

## Description:
Code evals commands given to it but is based around catCoins. The user cannot run commands without the sufficient catCoins. catCoins can be obtained by watching ads.

## What I learnt:
- How to create a refresh console (live time console)
- How to write to the console using process.stdout... instead of console.log()

## Bugs along the way
- Had to swap from switch to if statements as I was unaware that switches could leak onto more cases if the conditions met (I forgot to use the break keyword)
- Cleaning the console was very painful as it would sometimes wipe the whole console but luckily a better .clearLine was found
- bun crashed on my WSL so I had to swap to NodeJS which doesn't support prompt() standalone, so I had to manually type my inputs
- forgot to add resolve() to the end of my promise so I spend ages around this