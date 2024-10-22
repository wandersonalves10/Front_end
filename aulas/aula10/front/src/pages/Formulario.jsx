import { useForm } from 'react-hook-form';

function Formulario(props) {
    const {register, handleSubmit, formState: {errors}} = useForm();

    return <form onSubmit={handleSubmit(props.trataEnviar)}>
        <InputNome register={register} error={errors.nome} />
        <InputTelefone register={register} error={errorstelefone} />
        <button type='submit'>Salvar</button>
    </form>
}

export default Formulario;