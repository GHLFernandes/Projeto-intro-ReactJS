import './Card.css';

const Card = ({nome, cargo, img, backgroundColor, user}) => {

    const default_avatar = './';


    return(
        <div className='card'>
            <div className='header' style={{backgroundColor: backgroundColor}}>
                <img src={img} alt={nome} onError={({ currentTarget }) => {
                                                    currentTarget.onerror = null; 
                                                    currentTarget.src=user;
                                                }} 
                />
            </div>
            <div className='body'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Card;