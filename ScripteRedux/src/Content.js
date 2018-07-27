import React, { Component } from 'react';
import './Content.css';
import Card from "./Card";
import {connect} from "react-redux";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {fetchPersons, createPerson} from "./actions/personActions";

class Content extends Component{
    constructor(props){
        super(props);


        this.asd = this.asd.bind(this);
    }


    componentDidMount(){
        this.props.fetchPersons();
    }


    componentWillReceiveProps(nextProps) {
        if(nextProps.newPerson){
            this.props.persons.unshift(nextProps.newPerson)
        }
}



    asd()
    {
        this.props.createPerson({name:Math.floor((Math.random() * 1000) + 1),id:Math.floor((Math.random() * 1000) + 1)});
    }

    render(){
        return(
            <div className="content-wrapper">
                <div className="content">
                    <div className="content-filter-wrapper">
                        <h2>Moji Kolegiji</h2>
                        <div className="filter-button-wrapper">
                            <input onChange={(event) => {

                            }}
                                    className="search-input" type="text" placeholder="Pretraži kolegij..." />
                                <button onClick={this.asd} className="dodaj-kolegij-button">Dodaj Kolegij</button>
                        </div>
                    </div>
                    <div className="content-cards">
                        <ReactCSSTransitionGroup
                            transitionName="card"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={300}>
                        {this.props.persons.map((person) =>
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
    newPerson: state.persons.item
});

const mapActionsToProps = {
    fetchPersons: fetchPersons,
    createPerson: createPerson
};

export default connect(mapStateToProps,mapActionsToProps)(Content);

