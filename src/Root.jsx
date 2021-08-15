import React from "react";
import {HashRouter as Router, Route, Link} from "react-router-dom";
import styled from "styled-components";
import App from "./App.jsx";
import Nav from "./Nav.jsx";
import Explore from "./Explore.jsx";
import Personal from "./Personal.jsx";
import { Fragment } from "react";
 
const Root = () => {
  const STX = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
  `;


  
  return (
    <Router>
      <Fragment>
        <Nav />
        <Route exact path="/" component={App} />
        <Route path="/explore" component={Explore} />
        <Route path="/personal" component={Personal} />
      </Fragment>
    </Router>
  );
};


export default Root;
