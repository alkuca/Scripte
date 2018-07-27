import React, { Component } from 'react';
import './App.css';
import Navbar from "./Navbar";
import Content from "./Content";
import {Provider} from "react-redux"
import store from "./store"

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className="App">
                <Navbar/>
              <Content/>
          </div>
        </Provider>
    );
  }
}

export default App;
