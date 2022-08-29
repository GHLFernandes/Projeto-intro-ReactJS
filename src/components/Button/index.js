import './Button.css';

const Button = (props) => {
    return(
        <button className="btn" type={props.type}>{props.text}</button>
    );

}

export default Button;