import {useEffect, useState} from 'react';

import Inputjs from "../form/Input";
import Selectjs from "../form/Select";
import Submitjs from "../form/Submit";


function ProjectFormjs({btnText}){

  const [categories, setCategories] = useState([]);

  useEffect(() =>{
    fetch('http://localhost:3000/categories', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((resp) => resp.json())
    .then((data) => {setCategories(data)})
    .catch((err) => console.log(err))
  },[])

  return (
    <>
      <form className="form">
        <Inputjs 
          type="text" 
          text="Nome do projeto:" 
          name="name" 
          placeholder="Insira o nome do projeto"
        />
        <Inputjs 
          type="number" 
          text="Orçamento do projeto:" 
          name="budget" 
          placeholder="Insira o orçamento total"
        />
        <Selectjs 
        name="category_id" 
        text="Selecione a categoria" 
        options={categories}
        />
        <Submitjs text={btnText} />
      </form>
    </>
  )

};

export default ProjectFormjs;