import './Card.css';

const Card = ({nome, cargo, img, backgroundColor}) => {
    return(
        <div className='card'>
            <div className='header' style={{backgroundColor: backgroundColor}}>
                <img src={img} alt={nome}/>
            </div>
            <div className='footer'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Card;