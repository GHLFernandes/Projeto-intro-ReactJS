import styled from 'styled-components';

const StyledFooter = styled.section`
    align-items: center;
    background: #6278f7;
    color: #fff;
    display: block;
    text-align: center;
    padding: 10px 20px;
    margin: 0 auto;

    ul li {
        display: inline-block;
        margin-right: 32px;
    }

    ul li:last-child {
        margin-right: 0;
    }
`;

const Footer = () => {
    return (<StyledFooter>
            <p>
                Desenvolvido por GFernandes.
            </p>
        </StyledFooter>)
}

export default Footer;