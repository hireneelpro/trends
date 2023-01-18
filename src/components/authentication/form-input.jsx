    import "./form-input.scss";
    const InputForm = (props) => {
    //   console.log(props);
    const { label, ...otherProps } = props;
    //   console.log(otherProps);
    return (
        <div className="group">
        <input className="form-input" {...otherProps} />
        <label className= {`form-input-label ${props.value.length?'shrink':'' }`} >{label} </label>
        </div>
    );
    };

    export default InputForm;
