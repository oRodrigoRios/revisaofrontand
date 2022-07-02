var button = document.querySelector("button");

button.onclick = function () {
    var nome = prompt("qual é o comando para listar as pastas?");
    if ((nome == "ls")) {
        alert("Top Top Show! " + nome + ", Parabéns! Você acertou!!");
    }
    else {
        alert("Vish! " + nome + ", esse não é o comando correto.");
       
    }
    window.location="aula4.html";
}