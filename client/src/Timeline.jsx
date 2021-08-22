import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ContentItem from "./ContentItem.jsx";
import ContentPanel from "./ContentPanel.jsx";


const Timeline = styled.div`    
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #001935;     
    
  @media(min-width: 450px){
        width: 100%;
        min-width: 450px;
    }
    
    @media(min-width: 700px){
        width: 100%;
        min-width: 700px;
    }

    @media(min-width: 1200px){
        width: 70%;
    }   
`;
export const TimelineItem = styled.div`    
    width: 90%;
    margin: 0 auto;
    display: flex;    
`;

const AvatarHover = styled.div`
  display: none;
  position: absolute;
  box-sizing: border-box;
  width: 20vh;
  height: 30vh;
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  bottom: -30vh;
  &:hover {
    display: block;
  }
`;

const AvatarSection = styled.div`
  position: relative;
  box-sizing: border-box;
  background-color: #0fcafa;
  width: 10vh;
  height: 8.2vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2vh;
  margin-top: 3vh;
  border-radius: 4px;
  cursor: pointer;
  &:hover ${AvatarHover} {
    display: none;
  }
  @media (min-width: 1200px) {
    height: 8.2vh;
  }
  @media (min-width: 450px) {
    height: 6.8vh;
  }
`;

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-transform: uppercase;
`;

const MainUrl = `https://api.unsplash.com/photos/`;

export default ({ content }) => {
  const [loading, setLoading] = useState(true);
  const [photos, setPhoto] = useState([]);
  const [page, setPage] = useState(1);

  const fetchImages =  () => {
    setLoading(true);
    let url = `${MainUrl}?client_id=_L58fCsi0-lwrlFt-UJkbskBT7EWP63zSs2RWdvusn8&page=${page}`;
    axios
      .get(url)
      .then((response) => {
        let myPhotos = [...photos, ...response.data];
        setPhoto(myPhotos);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log("err", err);
      });
  };
  
  useEffect(() => {
    fetchImages();
  }, [page]);
  
  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
      ) {
        setPage((oldPage) => oldPage + 1);
      }
    });
    return () => window.removeEventListener("scroll", event);
  }, []);
  const listOfItems = content.map((item) => {
    return (
      <TimelineItem key={item.id}>
        <AvatarSection>
          <Avatar>{item.author[0]}</Avatar>
          <AvatarHover />
        </AvatarSection>
        <ContentItem {...item} />
      </TimelineItem>
    );
  });

  const listOfPhotos = photos.map((item) => {
    return (
      <TimelineItem key={item.id}>
        {!loading && (
          <AvatarSection>
            <Avatar>{item.user.name[0]}</Avatar>
            <AvatarHover />
          </AvatarSection>
        )}
        {!loading ? (
          <ContentItem {...item} />
        ) : (
          <LoadingSection></LoadingSection>
        )}
      </TimelineItem>
    );
  });
  return <Timeline>{listOfPhotos}</Timeline>;
};

const LoadingSection = ({}) => {
  const AdSection = ItemSection.extend`
    box-shadow: 0px 0px 0px white;
  `;

  return (
    <AdSection>
      <ContentPanel type="top" />
      <Content>
        <img
          src="http://localhost:3000/assets/loading-gif.gif"
          alt="loading-gif"
          style={{ width: "100%", height: "auto" }}
        />
      </Content>
      <ContentPanel type="bottom" />
    </AdSection>
  );
};

const ItemSection = styled.div`
  margin-bottom: 2vh;
  margin-top: 3vh;
  background: white;
  width: 100%;
  border-radius: 5px;
  font-size: 14px;
  font-family: Helvetica;
  font-weight: bold;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 10px 10px 8px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
  background: lavender;
  height: auto;
  max-width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`;