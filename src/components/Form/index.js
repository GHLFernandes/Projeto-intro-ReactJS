import React, { useState } from 'react';
import InputText from '../InputText';
import InputSelect from '../InputSelect';
import Button from '../Button';
import './Form.css';

const teams = ['Valor 1', 'Valor 2', 'Valor 3'];

const Form = (props) => {

    const [ nome, setNome ] = useState('');
    const [ cargo, setCargo ] = useState('');
    const [ imagem, setImagem ] = useState('');
    const [ time, setTime ] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSubmit({nome, cargo, imagem, time});
    }

    return(
        <section className='form'>
            <h2>Preencha os dados para criar o card do colaborador.</h2>
                <form onSubmit={handleSubmit}>
                    <InputText 
                        required={true} 
                        label="Nome" 
                        placeholder="Digite o seu nome"
                        onChange={value=> setNome(value)}
                        value={nome}
                    />
                    <InputText 
                        required={true} 
                        label="Cargo" 
                        placeholder="Digite o seu cargo"
                        onChange={value=> setCargo(value)}
                        value={cargo}
                    />
                    <InputText 
                        label="Imagem" 
                        placeholder="Digite o endereço da imagem"
                        onChange={value=> setImagem(value)}
                        value={imagem}
                    />
                    <InputSelect 
                        label="Time" 
                        itens={teams}
                        value={time}
                        onChange={value => setTime(value)}
                    />

                    <Button type="submit">Criar card</Button>
                </form>
        </section>

    );
}

export default Form;