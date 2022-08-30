import './InputText.css';

const InputText = (props) => {

    const handleChange = (e)=>{
        props.onChange(e.target.value);
    }

    return (
        <div className="inputText">
            <label>{props.label}</label>
            <input type="text" 
                required={props.required} 
                placeholder={props.placeholder}
                onChange={handleChange}
                value={props.value}
            />
        </div>
    );
}

export default InputText;