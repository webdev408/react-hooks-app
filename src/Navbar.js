import {Link}from 'react-router-dom'
function Navbar() {
  return (
    <nav>
      <ul className='list'>
         <li className='link'><Link to="/" className='item'>Home </Link></li>          
          <li className='link'><Link to="/users" className='item'>Users </Link></li>
          <li className='link'><Link to="/reference" className='item'> Reference </Link></li>
          <li className='link'><Link to="/focus" className='item'> Focus </Link></li>
        </ul>
    </nav>
  )
}

export default Navbar;