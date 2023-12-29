import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import useAppContext from '../AppContext';

const Navbar = ({cartItems}) => {

const [currentUser, setCurrentUser] = useState(

//parse convert json data in java script

 JSON.parse(sessionStorage.getItem('user'))
);

const {LoggedIn,logout}= useAppContext();

  return (

    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/contactus">
                Contactus
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/aboutus">
                Aboutus
              </NavLink>
            </li>
            
            

            <li className="nav-item">
              <NavLink className="nav-link" to='/event'>
                Event Handling
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/state'>
                State Management 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/todo'>
                ToDo App
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/post'>
                Create Post
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/chat'>
                Chat Box
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/listpost'>
                List Post
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/manageuser'>
                Manage User
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/feedback'>
                Feedback
              </NavLink>
            </li>
            <h3>{cartItems}</h3>
    
          </ul>

         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
           {
            LoggedIn ?(
              <button className='btn btn-danger' onClick={logout}>Logout</button>
            ):
            (<>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/signup'>
                Signup
              </NavLink>
            </li>
            
            
            </>)
           }
         </ul>

        </div>
      </div>
    </nav>
  
  
  )
}

export default Navbar;