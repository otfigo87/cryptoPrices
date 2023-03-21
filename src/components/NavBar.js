import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav">
        <Link to="/">
        <div>HOME</div>
        </Link>

        <Link to="/currencies">
            <div>CURRENCIES</div>
        </Link>
    </nav>
  )
}

export default NavBar