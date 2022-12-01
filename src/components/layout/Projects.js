import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';


import Container from './Container';

import Messagejs from "./Message";
import LinkButtonjs from './LinkButton';
import ProjectCardjs from '../project/ProjectCard';

function Projectsjs(){  
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [projectMessage, setProjectMessage] = useState('');
  

  const location = useLocation();
  let message = '';
  if(location.state){
    message = location.state.message
  }

  useEffect(() => {
    // Para ver o loading
    setTimeout(
      () =>
        fetch('http://localhost:5000/projects', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setProjects(data)
          }),
      100,
    )
  }, [])

  return (
    <div className="project_container">
      <div className="title_container">
        <h2>Meus Projetos</h2>
        <LinkButtonjs to="/newprojects" text="Criar Projeto"/>
      </div>
      {message && <Messagejs type="success" msg={message} />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCardjs
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category ? project.category.name : project.category}
              key={project.id}
            />
          ))}
      </Container>
    </div>
  )
};

export default Projectsjs;