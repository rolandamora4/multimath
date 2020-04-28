function startGame() {
    // test
    var messageElement = document.getElementById('messages');
    messageElement!.innerText = "Welcome to multimath";
}

document.getElementById('startGame')!.addEventListener('click', startGame);