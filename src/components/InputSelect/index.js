import styled from 'styled-components';

const StyledInputSelect = styled.div`
    margin: 24px 0;

    label {
        display: block;
        margin-bottom: 8px;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
    }

    select {
        background-color: #fff;
        box-shadow: 10px 10px 30px rgba(0, 0, 0, .06);
        width: 100%;
        border: none;
        font-size: 16px;
        padding: 20px;
        box-sizing: border-box;
    }
`;

const InputSelect = (props) => {

    return(
        <StyledInputSelect>
            <label>{props.label}</label>
            <select 
                name="select" 
                required={props.required} 
                onChange={e => props.onChange(e.target.value)}
                value={props.value}
            >
            <option value='' disabled key={0}>--Selecione--</option>
                {
                    props.itens.map(item => <option key={item}>{item}</option>)
                }
            </select>
        </StyledInputSelect>
                );
}

export default InputSelect;