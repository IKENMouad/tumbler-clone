import React from "react";
import {HashRouter as Router, Route, Link} from "react-router-dom";
import styled from "styled-components";
import App from "./App.jsx";
import Nav from "./Nav.jsx";
import Explore from "./Explore.jsx";
import Personal from "./Personal.jsx";
import './styles/styles.scss' 


const Root = () => {
  const STX = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
  `;

  const BorderNav = styled.div`
    border-bottom: 3px solid white;
  `;

  return (
    <Router>
      <STX>
        <Nav />
        <BorderNav>
        </BorderNav>
          <Route exact path="/" component={App} />
          <Route path="/explore" component={Explore} />
          <Route path="/personal" component={Personal} />
      </STX>
    </Router>
  );
};


export default Root;
