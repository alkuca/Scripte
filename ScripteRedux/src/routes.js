/**
 * Created by Alen on 29.7.2018..
 */
import React from "react"
import Content from "./Content"
import App from "./App"
import {BrowserRouter, Route} from "react-router-dom"

export default () => (
    <BrowserRouter>
        <Route path="/" component={Content}/>
    </BrowserRouter>
);
