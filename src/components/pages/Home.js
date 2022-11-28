import savings from '../../img/savings.svg'

import LinkButtonjs from '../layout/LinkButton';

function Homejs(){

  return (
    <section className="home_container">
      <h1>Bem-vindo ao <span>Costs</span></h1>
      <p>Comece a gerenciar seus projetos agora mesmo!</p>
      <LinkButtonjs to="/newprojects" text="Criar Projeto"/>
      <img src={savings} alt="Costs"/>
    </section>
  )

};

export default Homejs;