function startGame() {
    // test

    let playerName: string = 'Juan';
    // playerName= undefined;
    logPlayer(playerName);

    var messageElement = document.getElementById('messages');
    messageElement!.innerText = "Welcome to multimath";
}

function logPlayer(name) {
    console.log(`New game starting for player: ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);