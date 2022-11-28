import{FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';

function Footersjs(){

  return (
    <footer className='footer'>
      <ul className='social_list'>
        <li><FaFacebook/></li>
        <li><FaInstagram/></li>
        <li><FaLinkedin/></li>
      </ul>
      <p><span>Costs</span> &copy; 2021</p>
    </footer>
  )

};

export default Footersjs;