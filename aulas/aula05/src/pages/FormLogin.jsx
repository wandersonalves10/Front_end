
import{useState} from 'react';
import Botao from "../components/Botao"
import InputSenha from "../components/InputSenha"
import InputEmail from "../components/InputEmail"

function FormLogin(props){
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const efetuaLogin = (e) => {
        e.preventDefault();
        props.navegaPara("/home");
    }
    
    return(
        <form onSubmit= {efetuaLogin}>
            <InputSenha texto="senha" valor={email} mudaValor={setEmail} />
            <InputEmail texto="email" valor={senha} mudaValor={setSenha} />
            <Botao texto="entrar"/>
        </form>
    )
}

export default FormLogin;