import { BrowserRouter as Router, Link } from "react-router-dom";
import Homebtn from './images/homebtn.png'
import Regbtn from './images/registerbtn.png'

function myroutes() {
  return (
      <div className='Navbar'>
        <Link to="/">
           <img className='Homebtn' src={Homebtn} alt=''></img>
        </Link>
        <Link to="/Register">
           <img className='Regbtn' src={Regbtn} alt=''></img>
        </Link>
      </div>
  );
}
export default myroutes;