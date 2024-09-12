function InputSenha(props){
    return (
        <>
        <label htmlFor="=senha">{props.texto}</label>
        <input 
        type="password" 
        id="senha" 
        name="senha" 
        onChange={(e) => {props.mudaValor (e.target.value)} } />
        </>
    )
}

export default InputSenha;