import React, { Component } from 'react';
import './KolegijContent.css';

class KolegijContentCard extends Component{
    render(){
        return(
            <div className="resource-card">
                <div className="resource-card-content">
                    <h3 className="resource-card-content-kolegij">
                        {this.props.name}
                    </h3>
                    <p className="resource-card-content-type">
                        Kolokvij
                    </p>
                    <p className="resource-card-content-date">
                        18.{this.props.id}.2018
                    </p>
                    <p className="resource-card-content-name">
                        Ime Kolokvija
                    </p>
                    <div className="resource-card-content-buttons">
                        <button id="otvori-button">Otvori</button>
                        <button id="preuzmi-button">Preuzmi</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default KolegijContentCard;