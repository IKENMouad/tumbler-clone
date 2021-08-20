import ReactCircleModal from 'react-circle-modal'
import Search from "./img/search-icon.png";
import styled from 'styled-components'
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';

const SearchModal = ({ }) => {
    const [query, setQuery] = useState('')

    const searchHandel = (e) => {
        if (e.key === 'Enter') {
            console.log('enter key::', query)
        }
    }

    return (
        <ReactCircleModal
            backgroundColor="#53555fe6"
            toogleComponent={onClick => (
                <img onClick={onClick} src={Search} alt="search-icon.png" />
            )}
            // Optional fields and their default values
            offsetX={0}
            offsetY={0}
        >
            {(onClick) => (
                <div className="d-flex justify-content-between align-items-center" style={{ padding: '1em' }}>
                    <div></div>
                    <div   >
                        <SearchInput>
                            <Input placeholder="Search..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={e => searchHandel(e)}
                            />
                        </SearchInput>
                    </div>

                    <div className="close-modal" onClick={onClick} >
                        <AiOutlineClose style={{ fontSize: '40px', color: 'white', cursor: 'pointer' }} />
                    </div>
                </div>
            )}
        </ReactCircleModal>

    )
}

export default SearchModal

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #2d2e33;
  border-radius: 2.5rem;
  margin-top: 17px;
  height: 66px;
  width: 40rem;
`;
const Input = styled.input`
  outline: none;
  border: none; 
  color: #fff;
  min-width: 90%;
  background: none;
  font-size: 24px;
  &::placeholder {
    color: #828387;
  }
`;