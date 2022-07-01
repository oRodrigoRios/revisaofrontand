var button = document.querySelector("button");

button.onclick = function () {
    var nome = prompt("qual é o comando para criar uma pasta?");
    if ((nome == "mkdir")) {
        alert("Top Top Show! " + nome + ", Parabéns! Você acertou!!");
    }
    else {
        alert("Vish! " + nome + ", esse não é o comando correto para inicializar o Git.");
    }
    window.location="aula5.html";
}