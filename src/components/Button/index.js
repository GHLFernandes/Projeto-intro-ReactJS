import './Button.css';

const Button = (props) => {
    return(
        <button className="btn" type={props.type!=null?props.type: ''}>{props.children}</button>
    );

}

export default Button;