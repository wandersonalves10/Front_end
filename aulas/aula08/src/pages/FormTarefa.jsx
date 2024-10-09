import { useContext } from "react";
import { TarefaContext } from "../contexts/TarefaContext";

function FormTarefa() {
    const [tarefa, setTarefa] = useState("");
    const { incluir } = useContext(TarefaContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (tarefa) {
            incluir(tarefa);
            setTarefa('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Digite uma tarefa"
                value={tarefa}
                onClick={(e) => setTarefa(e.target.value)} 
            />
            <button type="submit">Adicionar</button>
        <form/>
    );   
}

export default FormTarefa;