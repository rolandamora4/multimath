function startGame() {
    var messageElement = document.getElementById('messages');
    messageElement.innerText = "Welcome to multimath";
}
document.getElementById('startGame').addEventListener('click', startGame);
