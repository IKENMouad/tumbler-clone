import ReactCircleModal from 'react-circle-modal'
import { BsPencil } from "react-icons/bs";
import styled from 'styled-components'
import { AiOutlineTwitter, AiFillFacebook, AiOutlineGithub, AiFillYoutube, AiFillInstagram, AiOutlineClose } from "react-icons/ai";
import { useRef, useState } from 'react';
import useOnClickOutside from './shared/UseOnClickOutside';


const CreateModal = () => {
    const ref = useRef();
    const [showModal, setShowModal] = useState(false);
    useOnClickOutside(ref, () => setShowModal(false));


    return (
        <ReactCircleModal
            backgroundColor="#53555fe6"
            toogleComponent={onClick => (
                <a onClick={onClick} href="#"   >
                    <BsPencil style={{ color: '#00b8ff', fontSize: '20px', cursor: 'pointer' }} />
                </a>
            )}
            offsetX={0}
            offsetY={0}
        >
            {(onClick) => (
                <CenterScreen>
                    <div className="wrapper">

                        <div className="icon">
                            <div className="type facebook">
                                <div className="tooltip">Facebook</div>
                                <span> <AiFillFacebook style={{ fontSize: '50px' }} /> </span>
                            </div>
                            <span className="icon-label" >Facebook</span>
                        </div>
                        <div className="icon ">
                            <div className="type twitter" >
                                <div className="tooltip">Twitter</div>
                                <span> <AiOutlineTwitter style={{ fontSize: '50px' }} /> </span>
                            </div>
                            <span className="icon-label" > Twitter</span>
                        </div>
                        <div className="icon">
                            <div className="type instagram" >
                                <div className="tooltip">Instagram</div>
                                <span> <AiFillInstagram style={{ fontSize: '50px' }} /> </span>
                            </div>
                            <span className="icon-label" >Instagram</span>
                        </div>
                        <div className="icon">
                            <div className="type github" >
                                <div className="tooltip">Github</div>
                                <span> <AiOutlineGithub style={{ fontSize: '50px' }} /> </span>
                            </div>
                            <span className="icon-label" >Github</span>
                        </div>
                        <div className="icon">
                            <div className="type youtube" >
                                <div className="tooltip">Youtube</div>
                                <span><AiFillYoutube style={{ fontSize: '50px' }} /></span>
                            </div>
                            <span className="icon-label" >Youtube</span>
                        </div>
                        <div class="vl"></div>
                        <div className="close-icon icon" onClick={onClick} >
                            <div className="type" >
                                <div className="tooltip">Youtube</div>
                                <span><AiOutlineClose style={{ fontSize: '50px', color: 'red' }} /></span>
                            </div>
                        </div>
                    </div>
                </CenterScreen>
            )}
        </ReactCircleModal>

    )
}

export default CreateModal

const CenterScreen = styled.div`
    position: absolute;
    top: 35%;
    width: 95rem; 
    height: 100px;
    display:flex ;
    justify-content:center; 
    align-items:center; 
`
