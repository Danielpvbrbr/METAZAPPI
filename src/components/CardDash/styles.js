import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    height:100px ;
    border-radius:8px ;
    box-shadow: 0 0 0.7em ${props => props.color};
    display:flex ;
    justify-content:space-between ;
    align-items:center ;
    flex-direction:row ;

    section{
        width:100px ;
        height:100px ;
        display:flex ;
        justify-content:center ;
        align-items:center ;
        border-top-left-radius:8px;
        border-bottom-left-radius:8px;
        background-color:${props => props.color} ;
    }
    div{
        width:200px ;
        height:100px ;
    }
    h1{
        font-size:10pt ;
    }
    
`;

export const AreaText = styled.div`
    width:200px ;
    height:100px ;
   
    h1{
        color:#fff ;
        font-size:11pt ;
        padding:6px 6px 0px ; 
        margin:0 ;

    }
    h2{
        padding-right:15px ;
        font-size:20pt ;
        text-align:end ;
        color:#fff ;

    }
    
`;
