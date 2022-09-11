import styled from "styled-components";

export const Container = styled.div`
    display:flex ;
    justify-content:center ;
    flex-direction:column ;
    align-items:center ;
    margin:2px 2px ;
    
    section{
        display:flex ;
        flex-direction:row ;
        justify-content:center ;
        align-items:center ;
    }
    select{
        width: 100px;
        height:20px ;
        border-radius: 3px;
        font-size: 10pt;
    }
    svg{
        color: #fff;
    }
    svg:hover{
        color: #ff0000;
    }
`;
