import styled from "styled-components";
import Board from "./board.styled";

const Modal = styled.div`
    display: flex;
    position: fixed; 
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: hidden;
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4);
`

export default Modal;