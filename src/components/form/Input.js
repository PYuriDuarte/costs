function Inputjs({type, text, name, placeholder, handleOnChange, value}){

  return (
    <div className="form_control">
      <label htmlFor={name}>{text}</label>
      <input 
        id={name} 
        type={type} 
        name={name} 
        placeholder={placeholder} 
        onChange={handleOnChange}
        value={value}
      />
    </div>
  )

};

export default Inputjs;