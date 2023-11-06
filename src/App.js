import { Fragment } from "react";
import React from 'react';
import Home from "./Component/Home.js";
import About from "./Component/About.js";


function App(props) {
    return (
        <Fragment>
            <Home />
            <About />
        </Fragment>
    )
}

export default App;
