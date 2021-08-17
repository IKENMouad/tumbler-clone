import React from "react";
import styled from "styled-components";


const Search = styled.div`
    display: flex;    
    position: relative;    
    z-index:10;
`;

const SearchDropdownContainer = styled.div`
    display: none;        
    position: absolute;
    top: 5.5vh;
    background: white;
    width: 50vh;
    height: 25vh;    
    border: 1px solid rgba(0,0,0,0.1);    

    &:hover {
        display: block;
    }  
`;

const SearchItems = styled.div`
    height: 5vh;
    display: flex;
    flex-direction: column;   
    justify-content: center;        
`;

const SearchItemContainer = styled.div`
    background: white;
    display: flex;        
`;
const SearchAvatarContainer = styled.div`        
    height: 4vh;
    width: 4vh;
    background: #343434;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const SearchAvatarContent = styled.div`    
    color: white;    
`;

const SearchTitleContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 1vh;    
`;
const SearchTitleContent = styled.a`  
    text-decoration: none;
    background: white;
`;

const SearchInput = styled.input`     
    width: 50vh;
    box-sizing: border-box;
    font-size: 20px;
    padding-left: 2vh;
    border: 2px solid transparent;    
    
    &:focus ~ ${SearchDropdownContainer} {
        display: block;
    }
    
    &:focus{
        border-bottom: 2px solid black;
        outline: none;
    }  
`;

const dummy = ["Namtab", "Batman", "Robin", "Nightwing", "Signal"];

export default () => {
    return (
        <Search>
            <SearchInput type = "text" placeholder = "Search"/>                                            
            <SearchDropdownContainer>
                {
                dummy.map((content, index) => {
                    return (
                        <SearchItems>
                            <SearchItemContainer>
                                <SearchAvatarContainer>
                                    <SearchAvatarContent>{index}</SearchAvatarContent>                                    
                                </SearchAvatarContainer>
                                <SearchTitleContainer>
                                    <SearchTitleContent href = "http://www.engadget.com">{content}</SearchTitleContent>
                                </SearchTitleContainer>
                            </SearchItemContainer>
                        </SearchItems>
                    );
                })
                }                       
            </SearchDropdownContainer>
        </Search>
    );
}