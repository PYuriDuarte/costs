import {useEffect, useState} from 'react';

import Inputjs from "../form/Input";
import Selectjs from "../form/Select";
import Submitjs from "../form/Submit";

function ProjectFormjs({handleSubmit, btnText, projectData}){

  const [project, setProject] = useState(projectData || {})
  const [categories, setCategories] = useState([])

  useEffect(() =>{
    fetch('http://localhost:5000/categories', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((resp) => resp.json())
    .then((data) => {setCategories(data)})
  },[]);

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(project)
  };

  function handleChange(e) {
    setProject({...project, [e.target.name]: e.target.value})
  };

  function handleCategory(e) {
    setProject({...project, category: {
      id: e.target.value,
      name: e.target.options[e.target.selectedIndex].text,
    },
    })
  };

  return (
    <>
      <form onSubmit={submit} className="form">
        <Inputjs 
          type="text" 
          text="Nome do projeto" 
          name="name" 
          placeholder="Insira o nome do projeto"
          handleOnChange={handleChange}
          value={project.name ? project.name : ''}
        />
        <Inputjs 
          type="number" 
          text="Orçamento do projeto" 
          name="budget" 
          placeholder="Insira o orçamento total"
          handleOnChange={handleChange}
          value={project.budget ? project.budget : ''}
        />
        <Selectjs 
          name="category_id" 
          text="Selecione a categoria" 
          options={categories}
          handleOnChange={handleCategory}
          value={project.category ? project.category.id : ''}
        />
        <Submitjs text={btnText} />
      </form>
    </>
  )

};

export default ProjectFormjs;