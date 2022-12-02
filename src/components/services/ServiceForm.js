import {useState} from 'react';

import Inputjs from '../form/Input';
import Submitjs from '../form/Submit';

function ServiceFormjs({handleSubmit, btnText, projectData}){

  const [service, setService] = useState({})

  function submit(e){
    e.preventDefault()
    projectData.services.push(service)
    handleSubmit(projectData)
  }

  function handleChange(e){
    setService({...service, [e.target.name] : e.target.value})
  }

  return (
    <form onSubmit={submit} className="form">
      <Inputjs
        type="text"
        text="Nome do serviço"
        name="name"
        placeholder="Insira o nome do serviço"
        handleOnChange={handleChange}
      />
      <Inputjs
        type="number"
        text="Custo do serviço"
        name="cost"
        placeholder="Insira o valor total"
        handleOnChange={handleChange}
      />
      <Inputjs
        type="text"
        text="Descrição do serviço"
        name="description"
        placeholder="Descreva o serviço"
        handleOnChange={handleChange}
      />
      <Submitjs text={btnText}/>
    </form>
  )

};

export default ServiceFormjs;