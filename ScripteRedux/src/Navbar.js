import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component{


    render(){
        return(
            <div className="navbar">
                <div className="navbar-links">
                    <ul className="nav-links">
                        <li role="button" className="button-active" >Kolegiji</li>
                        <li role="button">Resursi</li>
                        <li role="button">Odjavi se</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;