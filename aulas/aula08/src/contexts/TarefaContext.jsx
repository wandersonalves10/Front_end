import { createContext, useState } from "react";

const TarefaContext = createContext();

function TarefaProvider(props) {
  const [tarefas, setTarefas] = useState([""]);

  const carregar = () => {
    fetch("http://localhost:3000/tarefas")
    .then((response) => console.log(response.json()))
    .catch((error) => console.log("Deu Ruim!! ", error.message));
  };

  const incluir = (tarefa) => {
    setTarefas([...tarefas, tarefa]);
  };

  const remover = (tarefa) => {
    setTarefas(tarefas.filter((item) => item != tarefa));
  }

  const contexto = { tarefas, incluir, remover, carregar }

  return (
    <TarefaContext.Provider value={contexto}>
      {props.children}
    </TarefaContext.Provider>
  );
}

export { TarefaContext, TarefaProvider };