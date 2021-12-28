import {Link} from 'react-router-dom'
import './index.css'


export function Navbar(){
  return(
    <div className="navbar">
      <Link to='/'>
        <h2>Practice Router Blog</h2>
      </Link>
      <div className="list-navbar">
        <ul>
          <li>
            <Link to='/About'>About</Link>
          </li>
          <li>
            <Link to='/Products'>Products</Link>
          </li>
          <li>
            <Link to='/Contactus'>Contact us</Link> 
          </li>
        </ul>
      </div>
    </div>
  )
}