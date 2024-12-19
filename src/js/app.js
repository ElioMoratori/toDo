function insereTarefa() {
    let novaTarefa = document.getElementById("task-name");
    if (novaTarefa.value == "") {
        alert("Insira sua tarefa");
    } else {
        console.log(novaTarefa.value);
        criarHtml(novaTarefa.value);
        novaTarefa.value = ""; 
           
    }
}

function criarHtml(novaTarefa) {
    let divisoria = document.getElementById("task-list");
    let novaTarefaTexto = document.createElement("p");
    novaTarefaTexto.addEventListener("click", concluiTarefa());
    novaTarefaTexto.classList.add("task");
    novaTarefaTexto.textContent = novaTarefa;
    divisoria.appendChild(novaTarefaTexto);
    
}

function concluiTarefa() {
    let checkbox = document.querySelector(".task");
    if (checkbox.classList.contains("disabled")) {
        checkbox.classList.remove("disabled");        
    } else {
        checkbox.classList.add("disabled");    
    }
}
