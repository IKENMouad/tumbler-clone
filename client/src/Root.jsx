import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import App from "./App.jsx"; 
import Explore from "./Explore.jsx";
import Personal from "./Personal.jsx";
import './styles/styles.scss' 
import { Fragment } from "react";
import Auth from "./Auth.jsx";
import MyNav from "./MyNav.jsx";


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
        <MyNav />
        <Route exact path="/" component={App} />
        <Route exact path="/auth" component={Auth} />
        <Route path="/explore" component={Explore} />
        <Route path="/personal" component={Personal} />
      </Fragment>
    </Router>
  );
};


export default Root;
