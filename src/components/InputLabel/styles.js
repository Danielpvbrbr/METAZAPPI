import styled from "styled-components";

export const Container = styled.div`
    width: ${props => props.width}vw;
    height:${props => props.height + 5}px;
    display:flex ;
    flex-direction:column ;
    margin:5px 0px 5px ;

    label{
        font-size:10pt ;
        color:#fff ;
        margin-bottom:3px ;
    }
    input{
        width: ${props => props.width}vw;
        height: ${props => props.height}px ;
        border:none ;
        outline:none;
        border-radius:${props => props.radius}px ;
        padding-left:10px ;
    }
`;