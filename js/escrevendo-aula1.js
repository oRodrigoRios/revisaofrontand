var button = document.querySelector("button");

button.onclick = function () {
    var nome = prompt("Qual é o comando para iniciar o git?");
    if ((nome == "git init")) {
        alert("Opa! " + nome + ", Parabéns! Você acertou!!");
    }
    else {
        alert("infelizmente! " + nome + ", Esse não é o comando correto.");
    }
    window.location="aula2.html";
}