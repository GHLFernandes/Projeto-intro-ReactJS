import React, { useState } from 'react';
import InputText from '../InputText';
import InputSelect from '../InputSelect';
import Button from '../Button';
import styled from 'styled-components';

const StyledForm = styled.section`
    display: block;
    margin: 0 auto;
    margin-top: 60px;
    margin-bottom: 60px;
    padding: 10px 80px;
    max-width: 55%;
    background: #F7F7F7;
    box-shadow: 7px 7px 15px rgba(0, 0, 0, 0.08);
    border-radius: 20px;

    h2 {
        font-family: 'Prata';
        font-style: normal;
        font-weight: 400;
        line-height: 43px;
        font-size: 32px;
        display: flex;
        align-items: center;
        color: #212121;
    }
`;

const Form = (props) => {

    const [ nome, setNome ] = useState('');
    const [ cargo, setCargo ] = useState('');
    const [ imagem, setImagem ] = useState('');
    const [ time, setTime ] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSubmit({nome, cargo, imagem, time});
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    return(
        <StyledForm>
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
                        itens={props.team}
                        value={time}
                        onChange={value => setTime(value)}
                    />

                    <Button type="submit">Criar card</Button>
                </form>
        </StyledForm>

    );
}

export default Form;