import ProjectFormjs from '../project/ProjectForm'

function NewProjectsjs(){

  return (
    <div className="newproject_container">
      <h2>Criar Projeto</h2>
      <p>Crie seu projeto para depois adicionar os serviços.</p>
      <ProjectFormjs btnText="Criar Projeto"/>
    </div>
  )

};

export default NewProjectsjs;