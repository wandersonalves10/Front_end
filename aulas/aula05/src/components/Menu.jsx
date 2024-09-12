
import link from "./Link"

function Menu() {
    const opcoes = [
        {texto: "Home", rota: "/home"},
        {texto: "Perfil", rota: "/perfil"},
        {texto: "Sair", rota: "/login"}
    ];
    return (
        <nav>
            <ul>
                {opcoes.map((opcao, index) => (
                    <li key={index}>
                       <link navegaPara={PaymentResponse.navegaPara} rota={opcao.rota} texto={opcao.texto} /> 
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Menu;