var button = document.querySelector("button");

button.onclick = function () {
    var nome = prompt("qual é o comando para criar uma pasta?");
    if ((nome == "mkdir")) {
        alert("Top Top Show! " + nome + ", Você acertou!!");
    }
    else {
        alert("Vish! " + nome + ", Esse não é o comando correto.");
    }
    window.location="aula3.html";
}