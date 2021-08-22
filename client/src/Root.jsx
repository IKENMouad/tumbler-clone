import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import App from "./App.jsx"; 
import Explore from "./Explore.jsx";
import Personal from "./Personal.jsx";
import './styles/styles.scss' 
import { Fragment } from "react";
import Auth from "./Auth.jsx";
import MyNav from "./MyNav.jsx";
import Profile from "./Profile.jsx";
import Chat from "./chat/Chat.jsx";
import Home from "./Home.jsx";
import Posts from "./posts/Posts.jsx"; 
import Users from "./users/Users.jsx";

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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/dashborad" component={App} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/profile/:userId" component={Profile} />
          <Route exact path="/chat" component={Chat} />
          <Route path="/explore" component={Explore} />
          <Route path="/personal" component={Personal} />
        </Switch>
      </Fragment>
    </Router>
  );
};


export default Root;
