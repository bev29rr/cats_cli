console.log("Welcome to cats-cli🐈");
const coinFrames = ['💰', '💵']; 
const coinFrames2 = ['-', '\\', '|', '/'];

async function watchAd() {
    let progress = 0;
    let adChoice = Math.floor(Math.random() * 3);
    let reward = Math.floor(Math.random() * 5);
    return new Promise((resolve) => {
        const interval = setInterval(() =>  {
            if (progress < 20) {
                writeAd(adChoice, progress);
                let token = `${coinFrames[progress % coinFrames.length]}`;
                progress++;
            } else {
                console.log(` +${reward}`);
                clearInterval(interval);
                resolve(reward);
            }
        }, 100);
    });
}

async function writeAd(adChoice, progress) {
    let token = "";
    let message = "";
    if (adChoice == 0) {
            token = `${coinFrames[progress % coinFrames.length]}`;
            message = "BUY YOUR CATS NOW🐈";
    } else if (adChoice == 1) {
            token = `${coinFrames2[progress % coinFrames2.length]}`;
            message = "OWN YOUR OWN PET NOW FOR ONLY 50 TOKENS🐈";
    } else {
            token = `${coinFrames2[progress % coinFrames2.length]}`;
            message = "🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈";
    }
    process.stdout.write('\r');
    process.stdout.write(token + message + token);
}

async function timeout(time) {
    return new Promise(resolve => setTimeout(resolve, time * 1000));
}

let running = true;
let catCoins = 3;

(async function mainLoop() {
    while (running) {
        let command = prompt("Run Comand:");
        if (command.trim() == "watch ad") {
            let coinInc = await watchAd();
            catCoins += coinInc;
            continue;
        } else if (command.trim() == "check coins") {
            console.log("Coins: ", catCoins);
        } else if (command.trim() == "buy cat") {
            if (catCoins > 1) {
                console.log("Here you go: 🐈")
                catCoins--;
            } else {
                console.log("I'm sorry but you're too poor")
            }
        } else {
            if (catCoins > 1) {
                eval(command)
            } else {
                console.log("Buy more tokens to run commands")
            }
        }
    }
})();