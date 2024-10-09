import { TarefaProvider } from "./contexts/TarefaContext";
import ListTarefa from "./pages/ListTarefa";


function App() {
  return (
    <TarefaProvider>
      <h1>Lista de Tarefa</h1>
      <FormTarefa />
      <ListTarefa />
      </TarefaProvider>
  )
}

export default App;