import './InputSelect.css';

const InputSelect = (props) => {
    return(
        <div className="inputSelect">
            <label>{props.label}</label>
            <select name="select" defaultValue={'DEFAULT'}  >
                <option value="DEFAULT" disabled>--Selecione--</option>
                <option value="valor1">Valor 1</option>
                <option value="valor2">Valor 2</option>
                <option value="valor3">Valor 3</option>
            </select>
        </div>
                );
}

export default InputSelect;