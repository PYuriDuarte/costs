
import {useNavigate} from 'react-router-dom';

import ProjectFormjs from '../project/ProjectForm';

function NewProjectsjs(){

  const navigate = useNavigate();

  function createPost(project){
    //initialize cost and services
    project.cost = 0;
    project.services=[];

    fetch('http://localhost:3000/projects',{
      method: 'POST',
      headers: { 'Contet-type': 'application/json'},
      body: JSON.stringify(project),
    }).then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        // redirect
        navigate('/projects', { state: {message: 'Projeto criado com sucesso!'} })
      }) 
      .catch((err) => console.log(err))
  }

  return (
    <div className="newproject_container">
      <h2>Criar Projeto</h2>
      <p>Crie seu projeto para depois adicionar os serviços.</p>
      <ProjectFormjs handleSubmit={createPost} btnText="Criar Projeto"/>
    </div>
  )

};

export default NewProjectsjs;