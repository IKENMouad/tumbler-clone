import React, {Component} from "react";
import uuid from "uuid";
import styled from "styled-components";


const Presentation = styled.div`        
    margin-top: 6vh;
    display: grid;
    grid-template-columns: repeat(4, minmax(250px, 1fr));
    grid-auto-rows: 250px;    
    grid-gap: 2px;
    width: 1024px;    
    min-height: 500px;    
    box-sizing: border-box;    
`;

const ImageContainer = styled.img`
    background: lavender;    
    grid-column: span 1;
    width: 100%;
    height: 100%;
`;
class Explore extends Component{

    state = {
        links: [
            "https://royuone.netlify.com/images/one.jpg",
            "https://royuone.netlify.com/images/two.jpg",
            "https://royuone.netlify.com/images/three.jpg",
            "https://royuone.netlify.com/images/four.jpg",
            "https://royuone.netlify.com/images/five.jpg",
            "https://royuone.netlify.com/images/six.jpg",
            "https://royuone.netlify.com/images/seven.jpg",
            "https://royuone.netlify.com/images/eight.jpg",
            "https://images.unsplash.com/photo-1543721691-b328903d3d9d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f5b260c01b983965cad3eda8e536fd3&auto=format&fit=crop&w=2134&q=80",
            "https://images.unsplash.com/photo-1543674833-13ce46ba51eb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f123ed551a8eb1441f710731306810d9&auto=format&fit=crop&w=615&q=80",
            "https://images.unsplash.com/photo-1543727166-222902a0c7d2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8a2deab10739dd1c446a0e2ee4e140a6&auto=format&fit=crop&w=1355&q=80",
            "https://images.unsplash.com/photo-1543726222-90c1573fbc80?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3125b9422d3146b4858ab0503a8133b5&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1543722488-36eb7bab7046?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9dead032fd0e4357389f4b97dba3a553&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1543692277-0a9493612830?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b9a681aa5332a1aa143f9df7d3a429af&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1543679504-9cfa2db8d82d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c5473427d6bd7e5cd7ca902ec43334f9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1543662001-02c6994b994d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4106a230ab07605bdc2d7e90cfbe7516&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1543651425-3260f9c9ecfb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1595e9a7fd294c34528418442d5e29ad&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1543672709-3f4fd8d1e1ba?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ab7fbaaf85083888734f90f12a724813&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1543652553-b8bb30224d5a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8524eec9c72d525fc5c4404498d6d910&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1543563799-4276468cdca2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=984a48f5df31f14746d0fcafc4ca8b95&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1543572325-2a0899feb83d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=efc33819374e24c5cf7665b925d62c69&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1543585279-6927af942931?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d923830ca2552020139ad48c08dc5538&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1543647591-ff2e2f7573b9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d41f23daacda98262071f09d7e1fa538&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1543604502-9baac28067ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eac5c4cddc4fddec09558dbdf3c4b986&auto=format&fit=crop&w=500&q=60"
        ]
    }

    componentDidMount(){

    }
    render(){
      return (
        <Presentation>
            {
                this.state.links.map(item =>                     
                        <ImageContainer key = {uuid.v4()} src = {item}/>                    
                )
            }
        </Presentation>
    );
    }
}

export default Explore