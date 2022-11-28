import './components/layout/css/main.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homejs from './components/pages/Home';
import Companyjs from './components/pages/Company';
import Contactjs from './components/pages/Contact';
import NewProjectsjs from './components/pages/NewProjects';
import Projectsjs from './components/layout/Projects';


import Containerjs from './components/layout/Container';
import Navbarjs from './components/layout/Navbar';
import Footers from './components/layout/Footer';


function App() {
  return (
    <Router>
      <Navbarjs/>      
      <Containerjs customClass="minHeight">
        <Routes>
          <Route path='/' exact='true' element={<Homejs/>}></Route>
          <Route path='/projects' exact='true' element={<Projectsjs/>}></Route>
          <Route path='/company' exact='true' element={<Companyjs/>}></Route>
          <Route path='/contact' exact='true' element={<Contactjs/>}></Route>
          <Route path='/newprojects' exact='true' element={<NewProjectsjs/>}></Route>      
        </Routes>
      </Containerjs>    
      <Footers/>
    </Router>
  );
};

export default App;
