import {BsFillTrashFill} from 'react-icons/bs'

function ServiceCardjs({id, name, cost, description, handleRemove}){

  const remove = (e) => {}

  return (
    <div className="project_card">
      <h4>{name}</h4>
      <p>
        <span>Custo Total:</span> R${cost}
      </p>
      <p>{description}</p>
      <div className="project_card_actions">
        <button onClick={remove}>
          <BsFillTrashFill />
          Excluir
        </button>
      </div>
    </div>
  )

};

export default ServiceCardjs;