var button = document.querySelector("button");

button.onclick = function () {
    var nome = prompt("Qual é o comando para iniciar o git?");
    if ((nome == "git init")) {
        alert("Opa! " + nome + ", Parabéns! Você acertou!!");
    }
    else {
        alert("Opa! " + nome + ", esse não é o comando correto para inicializar o Git.");
    }
    window.location="aula3.html";
}