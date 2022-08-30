import './Team.css';
import Card from '../Card';

const Team = (props) => {
    
    return(
        <section className='time' style={{
            backgroundColor: props.secundaryColor
        }}>
            <h3 style={{
                borderBottomColor: props.primaryColor
             }}>{props.nome}</h3>
            <div className='cards'>
                {props.collaborators.map(collaborator => <Card 
                                                            user={props.user} 
                                                            nome={collaborator.nome} 
                                                            cargo={collaborator.cargo} 
                                                            img={collaborator.imagem} 
                                                            backgroundColor={props.primaryColor}/>)}
            </div>
        </section>
    )
}

export default Team;