import {Link} from 'react-router-dom';

import Containerjs from './Container';

import logo from '../../img/costs_logo.png';

function Navbarjs(){

  return (
    <nav className='navbar'>
      <Containerjs>
        <Link to="/">
          <img src={logo} alt="logo costs"/>
        </Link>
        <ul className='list'>
          <li className='item'><Link to="/">Home</Link></li>
          <li className='item'><Link to="/projects">Projetos</Link></li>
          <li className='item'><Link to="/company">Empresa</Link></li>
          <li className='item'><Link to="/contact">Contato</Link></li>
          <li className='item'><Link to="/newprojects">Novos Projetos</Link></li>
        </ul>
      </Containerjs>
    </nav>
  )

};

export default Navbarjs;