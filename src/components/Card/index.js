import styled from 'styled-components';

const StyledCard = styled.div`
    display: inline-block;
    margin: 15px;
    width: 200px;
    transition: all .2s ease-in-out;

    :hover {
        transform: scale(1.1);
    }
`;

const Header = styled.div`
    background-color: ${props => props.backgroundColor};
    border-radius: 10px 10px 0px 0px;
    height: 80px
`;

const Body = styled.div`
    background: #FFFFFF;
    height: auto;
    padding-top: 55px;
    padding-bottom: 10px;
    border-radius: 0px 0px 10px 10px;

    h4 {
        color: #6278F7;
        font-size: 17px;
        font-weight: bold;
        margin-bottom: -10px;
    }

    h5 {
        font-size: 16px;
        color: #212121;
    }
`;

const UserImg = styled.img`
    margin: 0 auto;
    border-radius: 50%;
    width: 55%;
    position: relative;
    bottom: -20px;
    background-color: white;
`

const Card = ({nome, cargo, img, backgroundColor, user}) => {

    return(
        <StyledCard>
            <Header backgroundColor={backgroundColor}>
                <UserImg src={img} alt={nome} onError={({ currentTarget }) => {
                                                    currentTarget.onerror = null; 
                                                    currentTarget.src=user;
                                                }} 
                />
            </Header>
            <Body>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </Body>
        </StyledCard>
    )
}

export default Card;