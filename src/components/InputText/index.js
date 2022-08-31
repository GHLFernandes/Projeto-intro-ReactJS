import styled from 'styled-components';

const StyledInputText = styled.div`
    margin: 24px 0;

    label {
        display: block;
        margin-bottom: 8px;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
    }
    
     input {
        background-color: #fff;
        box-shadow: 10px 10px 30px rgba(0, 0, 0, .06);
        width: 100%;
        border: none;
        font-size: 16px;
        padding: 20px;
        box-sizing: border-box;
    }
`;

const InputText = (props) => {

    const handleChange = (e)=>{
        props.onChange(e.target.value);
    }

    return (
        <StyledInputText>
            <label>{props.label}</label>
            <input type="text" 
                required={props.required} 
                placeholder={props.placeholder}
                onChange={handleChange}
                value={props.value}
            />
        </StyledInputText>
    );
}

export default InputText;