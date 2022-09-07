import styled from "styled-components";

export const Container = styled.div`
    width: ${props => props.width}vw;
    height:${props => props.height}vh ;
    display:flex ;
    flex-direction:row ;
    justify-content:space-evenly ;
    align-items:center ;
    background-color:#fff ;
    padding: 2px;
    border-radius: 5px;
    
    input{
        width: ${props => props.width -3}vw;
        height:3.5vh ;
        border:none ;
        outline:none;
    }
`;