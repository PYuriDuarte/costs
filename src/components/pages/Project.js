import { parse, v4 as uuidv4} from 'uuid'

import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

import Loading from '../layout/Loading';
import Container from '../layout/Container';
import Message from '../layout/Message'
import ProjectFormjs from '../project/ProjectForm'
import ServiceFormjs from '../services/ServiceForm';
import ServiceCardjs from '../services/ServiceCard';

function Projectjs(){

  const {id} = useParams();

  const [services, setServices] = useState([]);
  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [message, setMessage] = useState();
  const [type, setType] = useState();
  

  useEffect(() => {
    setTimeout(() =>{
      fetch(`http://localhost:5000/projects/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data)
        setServices(data.services)
      })
      .catch((err) => console.log(err))
    }, 100)
  },[id]);

  function editPost(project) {
    setMessage('')
    //validação
    if(project.budget < project.cost){
      setMessage('O orçamento não pode ser menor que o custo do projeto!')
      setType('error')
      return false
    }

    fetch(`http://localhost:5000/projects/${id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data)
        toggleProjectForm()
        setMessage('Projeto atualizado')
        setType('success')
      })
      .catch((err) => console.log(err))
  }

  function createService(project){
    setMessage('')

    const lastService = project.services[project.services.length - 1]

    lastService.id = uuidv4()

    const lastServiceCost = lastService.cost
    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

    if(newCost > parseFloat(project.budget)){
      setMessage('Orçamento ultrapassado, verifique o valor do serviço')
      setType('error')
      project.services.pop()
      return false
    }

    project.cost = newCost

    fetch(`http://localhost:5000/project/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    }).then((resp) => resp.json())
      .then((data) => {
        setShowServiceFrom(false)
      })
      .catch((err) => console.log(err))
  }

  function removeService(){}

  function toggleProjectForm(){
    setShowProjectForm(!showProjectForm)
  }

  function toggleServiceForm(){
    setShowServiceForm(!showServiceForm)
  }

  return (
    <div className='body_container'>
      {project.name ? 
      (<div className='project_details'>
        {message && <Message type={type} msg={message}/>}
        <Container customClass="column">
          <div className='details_container'>
            <h2>Projeto: {project.name}</h2>
            <button className='btn' onClick={toggleProjectForm}>{!showProjectForm ? 'Editar Projeto' : 'Fechar'}</button>
            {!showProjectForm ? (
              <div className='project_info'>
                <p>
                  <span>Categoria:</span> {project.category.name}
                </p>
                <p>
                  <span>Total de Orçamento:</span> R${project.budget}
                </p>
                <p>
                  <span>Total Utilizado:</span> R${project.cost}
                </p>
              </div>
            ) : (
              <div className='project_info'>
                <ProjectFormjs 
                handleSubmit={editPost} 
                btnText="Concluir edição"
                projectData={project}
                />
              </div>
            )}
          </div>
          <div className='service_form_container'>
            <h3>Adicione um serviço:</h3>
            <button className='btn' onClick={toggleServiceForm}>{!showServiceForm ? 'Adicionar serviço' : 'Fechar'}</button>
            <div className='project_info'>
              {showServiceForm && (
                <div>
                  <ServiceFormjs 
                  handleSubmit={createService}
                  btnText="Adicionar Serviço"
                  projectData={project}
                  />
                </div>
              )}
            </div>
          </div>
          <h3>Serviços:</h3>
          <Container customClass="start">
            {services.length > 0 &&
              services.map((service) => (
                <ServiceCardjs 
                  id={service.id}
                  name={service.name}
                  cost={service.cost}
                  description={service.description}
                  key={service.id}
                  handleRemove={removeService()}
                />
              ))
            }
            {services.length === 0 && <p>Não há serviços cadastrados.</p>}
          </Container>                
        </Container>
      </div>) 
      : (<Loading />)}
    </div>
  )

};

export default Projectjs;