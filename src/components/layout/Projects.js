import {useLocation} from 'react-router-dom'

import Messagejs from "./Message";

function Projectsjs(){

  const location = useLocation();
  let message = '';
  if(location.state){
    message = location.state.message
  }

  return (
    <div className="body_container">
      <h2>Meus Projetos</h2>
      {message && <Messagejs type="success" msg={message} />}
    </div>
  )

};

export default Projectsjs;