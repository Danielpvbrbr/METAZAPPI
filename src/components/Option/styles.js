import styled from "styled-components";

export const Container = styled.div`
    display:flex ;
    justify-content:center ;
    flex-direction:row ;
    align-items:center ;
    margin:6px 2px ;
    
    section{
        display:flex ;
        flex-direction:row ;
        justify-content:space-around ;
        align-items:center ;
        /* background-color: #ffff; */
        box-shadow: 0 0 0.7em #fff;
        border-radius:5px ;
        padding:1px ;
        width: 130px;
        margin-left:2px ;
    }
    select{
        width: 100px;
        height:20px ;
        border-radius: 3px;
        font-size: 10pt;
    }
    
`;
