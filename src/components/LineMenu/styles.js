import styled from "styled-components";

export const Container = styled.li`
    width: 16.5vw ;
    height:40px;
    display:flex ;
    flex-direction:row ;
    justify-content:${props => props.isMenu ? 'start':'center'} ;
    align-items:center ;
    list-style:none ;
    margin:5px ;

    h1{
        color:#fff ;
        font-size:14pt ;
        margin-left: 10px;
        font-weight:400 ;
        cursor: pointer;
    }

`;