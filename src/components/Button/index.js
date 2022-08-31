import styled from 'styled-components';

const Btn = styled.button`
    display: block;
    background: #6278F7;
    border: none;
    padding: 15px 17px;
    border-radius: 10px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 15px;
    color: #FFFFFF;
    margin-bottom: 20px;

    :hover {
        background: #3149d1;
        cursor: pointer;
    }
`;

const Button = (props) => {
    return(
        <Btn type={props.type!=null?props.type: ''}>{props.children}</Btn>
    );
}

export default Button;