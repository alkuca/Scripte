import {FETCH_PERSONS, NEW_PERSON, REMOVE_PERSON} from "./types";

export const fetchPersons = () => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(result => result.json())
        .then(data =>
            dispatch({
                type: FETCH_PERSONS,
                payload:data
            }));
};

export const createPerson = (personData) => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(personData)
    })
        .then(result => result.json())
        .then(person => dispatch({
            type: NEW_PERSON,
            payload: person
        }));
};

export const removePerson = (userToRemove) => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/users/" + userToRemove, {
        method: "DELETE",
    })
        .then(dispatch({
            type: REMOVE_PERSON,
            payload: userToRemove
        }))

};

