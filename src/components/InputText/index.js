import './InputText.css';


const InputText = (props) => {
    return (
        <div className="inputText">
            <label>{props.label}</label>
            <input type="text" placeholder={`Digite o seu ${props.label}`}/>
        </div>
    );
}

export default InputText;