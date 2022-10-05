import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height:82.5vh ;
    display:flex ;
    flex-direction:column ;
    justify-content:space-between ;
    background-color:#2E3031 ;
    box-shadow: 0 0 0.7em #4A4D4E;
`;

export const Controller = styled.div`
    width:45%;
    height:99% ;
    display:flex ;
    flex-direction:column ;
    border:1px solid #fff ;
    padding:6px ;
    overflow-y: scroll;
    pre{
        color:#fff ;
    }
`;
    