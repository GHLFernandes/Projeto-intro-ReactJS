import InputText from '../InputText';
import InputSelect from '../InputSelect';
import Button from '../Button';
import './Form.css';

const Form = () => {
    return(
        <section className='form'>
            <h2>Preencha os dados para criar o card do colaborador.</h2>
                <form>
                    <InputText label="Nome" placeholder="Digite o seu nome"/>
                    <InputText label="Cargo" placeholder="Digite o seu cargo"/>
                    <InputText label="Imagem" placeholder="Digite o endereço da imagem"/>
                        <InputSelect label="Time"/>

                    <Button type="submit" text="Criar card"/>
                </form>
        </section>

    );
}

export default Form;