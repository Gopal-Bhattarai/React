import { Link, useLocation, useNavigate } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import UserContext from './context/UserContext';
import NoteContext from './context/NoteContext';
import { useContext } from 'react';

const NavBar = () => {
    let location = useLocation();
    let navigate = useNavigate();
    const {firstName, user} = useContext(UserContext);
    const {setKeywords} = useContext(NoteContext);

    const handleSignout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      navigate("/inotes/login")
    }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/inotes">
            iNotes
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/inotes/notes" ? "active" : "" }`} to="/inotes/notes" >
                  My Notes
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/inotes/products" ? "active" : "" }`} to="/inotes/products" >
                  My Products
                </Link>
              </li>
              
                { user.role===1 ? 
                <>
                <li className="nav-item"><Link className={`nav-link ${location.pathname==="/signup" ? "active" : "" }`} to="/inotes/signup"> New User </Link></li> 
                <li className="nav-item"><Link className={`nav-link ${location.pathname==="/allUsers" ? "active" : "" }`} to="/inotes/users"> Users </Link></li> 
                <li className="nav-item"><Link className={`nav-link ${location.pathname==="/allUsers" ? "active" : "" }`} to="/inotes/managenotes"> Notes </Link></li> 
                </>
                : void 0 }
              

            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control"
                type="text"
                placeholder="Search"
                // value={search}
                onChange={(e)=>setKeywords(e.target.value)}
                />
            {/* <button className="btn btn-outline-success" onClick={searchMe(search)}>
                Search
              </button> */}
              {!localStorage.getItem('token') ? 
              <>
              <Link to="/inotes/login" className="btn btn-primary mx-1">Login</Link>
              <Link to="/inotes/signup" className="btn btn-primary mx-0">Signup</Link> 
              </> :  
              <>
              <button className="btn btn-primary mx-1" onClick={handleSignout}>Logout</button>
              <div className='btn btn-primary align-items-center'>
                <Link to="/inotes/profile"><CgProfile color={"white"}  /> </Link>
                <span><small style={{color: "white"}}>{firstName}</small></span>
              </div>
              </> }
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
