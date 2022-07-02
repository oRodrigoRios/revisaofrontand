var button = document.querySelector("button");

button.onclick = function () {
    var nome = prompt("qual é o comando para entrar na pasta?");
    if ((nome == "cd")) {
        alert("Top! " + nome + ", Parabéns! Você acertou!!");
    }
    else {
        alert("Vish! " + nome + ", esse não é o comando correto.");
    }
    window.location="bonus.html";
}