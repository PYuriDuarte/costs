function Selectjs({text, name, options, handleOnChange, value}){

  return (
    <div className="form_control">
      <label htmlFor={name}>{text}</label>
      <select id={name} name={name} onChange={handleOnChange} value={value}>
        <option>Selecione uma opção</option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select> 
    </div>
  )

};

export default Selectjs;