let id = 0;

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
    let novaTarefaDiv = document.createElement("div");
    divisoria.appendChild(novaTarefaDiv);
    let novaTarefaTexto = document.createElement("p");
    novaTarefaTexto.classList.add("task");
    novaTarefaTexto.textContent = novaTarefa;
    novaTarefaDiv.appendChild(novaTarefaTexto);
    novaTarefaTexto.setAttribute("id", id);
    novaTarefaTexto.setAttribute("onclick", "concluiTarefa(" + id + ")");
    console.log(id);
    id++;
}

function concluiTarefa(id) {
    let checkbox = document.getElementById(id);
    if (checkbox.classList.contains("disabled")) {
        checkbox.classList.remove("disabled");        
    } else {
        checkbox.classList.add("disabled");    
    }
}
