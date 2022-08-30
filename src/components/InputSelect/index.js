import './InputSelect.css';

const InputSelect = (props) => {

    return(
        <div className="inputSelect">
            <label>{props.label}</label>
            <select 
                name="select" 
                required={props.required} 
                onChange={e => props.onChange(e.target.value)}
                value={props.value}
            >
            <option value='' disabled key={0}>--Selecione--</option>
                {
                    props.itens.map(item => <option key={item}>{item}</option>)
                }
            </select>
        </div>
                );
}

export default InputSelect;