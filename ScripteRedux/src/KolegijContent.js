import React, { Component } from 'react';
import './KolegijContent.css';

class KolegijContent extends Component {
    render(){
        return(
            <div className="kolegij-content-wrapper">
                <div className="kolegij-content">
                    <div className="kolegij-content-filter-wrapper">
                        <h2>Strukture Podataka i Algoritmi  <span className="kolegij-details">/  3. godina informatike</span></h2>
                        <div className="kolegij-filter-button-wrapper">
                            <input className="resours-search-input" type="text" placeholder="Pretraži resurs (ime)..." />
                            <select
                                className="resours-type-select">
                                <option value="" disabled selected>Vrsta</option>
                                <option value="Ispit">Ispit</option>
                                <option value="Kolokvij">Kolokvij</option>
                                <option value="Zadaća">Zadaća</option>
                                <option value="Seminar">Seminar</option>
                            </select>
                            <select
                                className="resours-type-select something">
                                <option value="" disabled selected>Nesto</option>
                                <option value="Nesto">Nesto</option>
                                <option value="Nesto">Nesto</option>
                                <option value="Nesto">Nesto</option>
                            </select>
                            <select
                                className="resours-type-select year">
                                <option value="" disabled selected>Godina</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                            </select>
                            <button className="dodaj-resurs-button">Uploadaj Resours</button>
                        </div>
                    </div>
                    <div className="resource-content-cards">

                        <div className="resource-card">
                            <div className="resource-card-content">
                                <h3 className="resource-card-content-kolegij">
                                    Matematika
                                </h3>
                                <p className="resource-card-content-type">
                                    Kolokvij
                                </p>
                                <p className="resource-card-content-date">
                                    18.04.2018
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

                        <div className="resource-card">
                            <div className="resource-card-content">
                                <h3 className="resource-card-content-kolegij">
                                    Matematika
                                </h3>
                                <p className="resource-card-content-type">
                                    Kolokvij
                                </p>
                                <p className="resource-card-content-date">
                                    18.04.2018
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
                        <div className="resource-card">
                            <div className="resource-card-content">
                                <h3 className="resource-card-content-kolegij">
                                    Matematika
                                </h3>
                                <p className="resource-card-content-type">
                                    Kolokvij
                                </p>
                                <p className="resource-card-content-date">
                                    18.04.2018
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
                        <div className="resource-card">
                            <div className="resource-card-content">
                                <h3 className="resource-card-content-kolegij">
                                    Matematika
                                </h3>
                                <p className="resource-card-content-type">
                                    Kolokvij
                                </p>
                                <p className="resource-card-content-date">
                                    18.04.2018
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
                        <div className="resource-card">
                            <div className="resource-card-content">
                                <h3 className="resource-card-content-kolegij">
                                    Matematika
                                </h3>
                                <p className="resource-card-content-type">
                                    Kolokvij
                                </p>
                                <p className="resource-card-content-date">
                                    18.04.2018
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
                        <div className="resource-card">
                            <div className="resource-card-content">
                                <h3 className="resource-card-content-kolegij">
                                    Matematika
                                </h3>
                                <p className="resource-card-content-type">
                                    Kolokvij
                                </p>
                                <p className="resource-card-content-date">
                                    18.04.2018
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
                        <div className="resource-card">
                            <div className="resource-card-content">
                                <h3 className="resource-card-content-kolegij">
                                    Matematika
                                </h3>
                                <p className="resource-card-content-type">
                                    Kolokvij
                                </p>
                                <p className="resource-card-content-date">
                                    18.04.2018
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
                        <div className="resource-card">
                            <div className="resource-card-content">
                                <h3 className="resource-card-content-kolegij">
                                    Matematika
                                </h3>
                                <p className="resource-card-content-type">
                                    Kolokvij
                                </p>
                                <p className="resource-card-content-date">
                                    18.04.2018
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
                        <div className="resource-card">
                            <div className="resource-card-content">
                                <h3 className="resource-card-content-kolegij">
                                    Matematika
                                </h3>
                                <p className="resource-card-content-type">
                                    Kolokvij
                                </p>
                                <p className="resource-card-content-date">
                                    18.04.2018
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
                        <div className="resource-card">
                            <div className="resource-card-content">
                                <h3 className="resource-card-content-kolegij">
                                    Matematika
                                </h3>
                                <p className="resource-card-content-type">
                                    Kolokvij
                                </p>
                                <p className="resource-card-content-date">
                                    18.04.2018
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
                        <div className="resource-card">
                            <div className="resource-card-content">
                                <h3 className="resource-card-content-kolegij">
                                    Matematika
                                </h3>
                                <p className="resource-card-content-type">
                                    Kolokvij
                                </p>
                                <p className="resource-card-content-date">
                                    18.04.2018
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
                        <div className="resource-card">
                            <div className="resource-card-content">
                                <h3 className="resource-card-content-kolegij">
                                    Matematika
                                </h3>
                                <p className="resource-card-content-type">
                                    Kolokvij
                                </p>
                                <p className="resource-card-content-date">
                                    18.04.2018
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
                        <div className="resource-card">
                            <div className="resource-card-content">
                                <h3 className="resource-card-content-kolegij">
                                    Matematika
                                </h3>
                                <p className="resource-card-content-type">
                                    Kolokvij
                                </p>
                                <p className="resource-card-content-date">
                                    18.04.2018
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
                        <div className="resource-card">
                            <div className="resource-card-content">
                                <h3 className="resource-card-content-kolegij">
                                    Matematika
                                </h3>
                                <p className="resource-card-content-type">
                                    Kolokvij
                                </p>
                                <p className="resource-card-content-date">
                                    18.04.2018
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
                        <div className="resource-card">
                            <div className="resource-card-content">
                                <h3 className="resource-card-content-kolegij">
                                    Matematika
                                </h3>
                                <p className="resource-card-content-type">
                                    Kolokvij
                                </p>
                                <p className="resource-card-content-date">
                                    18.04.2018
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
                        <div className="resource-card">
                            <div className="resource-card-content">
                                <h3 className="resource-card-content-kolegij">
                                    Matematika
                                </h3>
                                <p className="resource-card-content-type">
                                    Kolokvij
                                </p>
                                <p className="resource-card-content-date">
                                    18.04.2018
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
                        <div className="resource-card">
                            <div className="resource-card-content">
                                <h3 className="resource-card-content-kolegij">
                                    Matematika
                                </h3>
                                <p className="resource-card-content-type">
                                    Kolokvij
                                </p>
                                <p className="resource-card-content-date">
                                    18.04.2018
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
                        <div className="resource-card">
                            <div className="resource-card-content">
                                <h3 className="resource-card-content-kolegij">
                                    Matematika
                                </h3>
                                <p className="resource-card-content-type">
                                    Kolokvij
                                </p>
                                <p className="resource-card-content-date">
                                    18.04.2018
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
                        <div className="resource-card">
                            <div className="resource-card-content">
                                <h3 className="resource-card-content-kolegij">
                                    Matematika
                                </h3>
                                <p className="resource-card-content-type">
                                    Kolokvij
                                </p>
                                <p className="resource-card-content-date">
                                    18.04.2018
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
                        <div className="resource-card">
                            <div className="resource-card-content">
                                <h3 className="resource-card-content-kolegij">
                                    Matematika
                                </h3>
                                <p className="resource-card-content-type">
                                    Kolokvij
                                </p>
                                <p className="resource-card-content-date">
                                    18.04.2018
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
                        <div className="resource-card">
                            <div className="resource-card-content">
                                <h3 className="resource-card-content-kolegij">
                                    Matematika
                                </h3>
                                <p className="resource-card-content-type">
                                    Kolokvij
                                </p>
                                <p className="resource-card-content-date">
                                    18.04.2018
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
                        <div className="resource-card">
                            <div className="resource-card-content">
                                <h3 className="resource-card-content-kolegij">
                                    Matematika
                                </h3>
                                <p className="resource-card-content-type">
                                    Kolokvij
                                </p>
                                <p className="resource-card-content-date">
                                    18.04.2018
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
                    </div>
                </div>
            </div>
        )
    }
}

export default KolegijContent;