import React, { Component } from 'react';
import './Content.css';
import Card from "./Card";
import {connect} from "react-redux";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {fetchPersons, createPerson, filterPerson} from "./actions/personActions";
class Content extends Component{
    constructor(props){
        super(props);

        this.setQuery = this.setQuery.bind(this);
        this.addNewRandomPerson = this.addNewRandomPerson.bind(this);
    }


    componentDidMount(){
        this.props.fetchPersons();
    }



    setQuery(query){
        this.props.filterPerson(query)
    }

    addNewRandomPerson(){
        this.props.createPerson({id:Math.floor((Math.random() * 1000) + 1),name:"Random Person"});
    }


    render(){
    let filteredPersons = this.props.persons.filter(a => a.name.toLowerCase().includes(this.props.query.toLowerCase()));
        return(
            <div className="content-wrapper">
                <div className="content">
                    <div className="content-filter-wrapper">
                        <h2>Moji Kolegiji</h2>
                        <div className="filter-button-wrapper">
                            <input onChange={(event) => {
                                this.setQuery(event.target.value);
                            }}
                                    className="search-input" type="text" placeholder="Pretraži kolegij..." />
                                <button onClick={this.addNewRandomPerson} className="dodaj-kolegij-button">Dodaj Kolegij</button>
                        </div>
                    </div>
                    <div className="content-cards">
                        <ReactCSSTransitionGroup
                            transitionName="card"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={300}>
                        {filteredPersons.map((person) =>
                            <Card
                                key={person.id}
                                name={person.name}
                                id={person.id}
                            />
                        )}
                        </ReactCSSTransitionGroup>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    persons: state.persons.items,
    query: state.persons.query
});

const mapActionsToProps = {
    fetchPersons: fetchPersons,
    createPerson: createPerson,
    filterPerson: filterPerson
};

export default connect(mapStateToProps,mapActionsToProps)(Content);

