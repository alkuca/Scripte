import React, { Component } from 'react';
import './App.css';
import {Link} from "react-router-dom"

class Register extends Component{
    render(){
        return(
            <div className="register-container">
                <div className="register-content-wrapper">
                    <div className="register-content">
                        <h2>Ime:</h2>
                        <input type="text" />
                        <h2>Prezime:</h2>
                        <input type="text"/>
                        <h2>Email:</h2>
                        <input type="text" />
                        <h2>Password:</h2>
                        <input type="text"/>
                        <h2>Ponovi Password:</h2>
                        <input type="text"/>
                        <div className="register-buttons">
                            <button
                                className="button registracija-button-submit">
                                    Registriraj se
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;