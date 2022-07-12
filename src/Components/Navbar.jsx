import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1>Blog for us</h1>
        <div className="links">
          <Link to= "/">Home</Link>
          <Link to="/Create">Create</Link>
          <Link to="/">Login</Link>
        </div>
    </nav>
  )
}

export default Navbar