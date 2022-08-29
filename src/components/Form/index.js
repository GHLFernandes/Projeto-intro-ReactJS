import InputText from '../InputText';
import Button from '../Button';
import './Form.css';

const Form = () => {
    return(
        <div className='form'>
            <h2>Preencha os dados para criar o card do colaborador.</h2>
            <form>
                <InputText label="Nome"/>
                <InputText label="Cargo"/>
                <InputText label="Imagem"/>

                <Button type="submit" text="Criar card"/>
            </form>
        </div>

    );
}

export default Form;