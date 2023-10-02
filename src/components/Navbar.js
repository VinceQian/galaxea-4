import React from "react"; //import React library
import {Link} from 'react-router-dom'


export default function Navbar(props) {

    return (
        <nav className="navbar navbar-expand bg-info d-lg-block" id='navbar'>
            <div className="container-fluid">
                <ul className="navbar-nav p-1">
                    <li>
                        <Link className="nav-link" aria-current="page" to="/home">
                            <img className="app-logo navicon" alt="otter" src="img/otterlarger.png" />
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/home">
                           <p className = "navtext"><span className="nav-label">远方</span></p>
                        </Link>
                    </li> */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/plan">
                        <p className = "navtext"><span className="nav-label">+</span></p>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>)
}