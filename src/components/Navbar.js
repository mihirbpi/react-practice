import {Link} from 'react-router-dom';

const Navbar  = () => {
    return (
        <nav className="navbar">
        <h1>Mihir Borkar's Website</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
        </div>
        <div className="info">Created with React</div>
        <div className="info">Last Updated April 2023</div>
      </nav>
    );
}

export default Navbar;