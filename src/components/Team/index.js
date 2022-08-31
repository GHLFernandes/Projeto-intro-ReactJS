import Card from '../Card';
import styled from 'styled-components';

const StyledTeam = styled.section`
    text-align: center;
    padding-top: 3px;
    height: auto;
    max-width: 100%;
    
    background-color: ${props => props.backgroundColor};


    h3 {
        justify-content: center;
        border-bottom-width: 4px;
        border-bottom-style: solid;
        display: inline-block;
        font-style: normal;
        font-weight: 500;
        line-height: 35px;
        font-size: 30px;
        color: #212121;
        border-bottom-color: ${props => props.borderColor};
    }
`;

const ContainerCards = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0 auto;
    text-align: center;
    padding: 10px 0;
    max-width: 73%;
`;

const Team = ({collaborators, user, nome, primaryColor, secundaryColor}) => {

    return(
        (collaborators.length > 0) && 
        <StyledTeam backgroundColor={secundaryColor} borderColor={primaryColor}>
            <h3>{nome}</h3>
            <ContainerCards>
                {collaborators.map(collaborator =>
                 <Card 
                    key={collaborator.nome}
                    user={user} 
                    nome={collaborator.nome} 
                    cargo={collaborator.cargo} 
                    img={collaborator.imagem} 
                    backgroundColor={primaryColor}
                />)}
            </ContainerCards>
        </StyledTeam>
    )
}

export default Team;