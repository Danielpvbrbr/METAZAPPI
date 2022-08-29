import styled from "styled-components";

export const Container = styled.div`
    width: ${props => props.width}vw;
    height:98vh ;
    display:flex ;
    flex-direction:row ;
    justify-content:space-between ;
    align-items:center ;
    /* background-color:#4A4D4E ; */

`;
export const ListCard = styled.div`
    width: 21vw;
    height:98vh ;
    background-color:#4A4D4E ;
    box-shadow: 0 0 0.7em #4A4D4E;
    ${props => props.width && 'border-right:1px solid #C4C4C4 ;'} ;
`;
export const AreaHeader = styled.div`
    width: 21vw;
    height:6vh ;
    border-bottom: 1px solid #C4C4C4 ;
    display:flex ;
    flex-direction:row ;
    justify-content:space-evenly ;
    align-items:center ;
    background-color:#2B2B2B ;

    section{
        width: 17vw;
        height:3.6vh ;
        display:flex ;
        flex-direction:row ;
        justify-content:space-evenly ;
        align-items:center ;
        background-color:#fff ;
        padding: 2px;
        border-radius: 5px;
    }
    input{
        width: 15vw;
        height:3.5vh ;
        border:none ;
        outline:none
    }
`;
export const AreaBody = styled.div`
    width: 21vw;
    height:91.4vh ;
    display:flex ;
    flex-direction: column;
    align-items:center ;
 
`;


export const AreaChat = styled.div`
    width: 70vw;
    height:98vh ;
    background-color:#4A4D4E ;
    box-shadow: 0 0 0.7em #4A4D4E;

`;

export const AreaHeaderChat = styled.div`
    width: 70vw;
    height:7vh ;
    background-color:#2B2B2B ;

`;
export const AreaBodyChat = styled.div`
    width: 70vw;
    height:81vh ;

`;
export const AreaFooterChat = styled.div`
    width: 70vw;
    height:9vh ;
    background-color:#2B2B2B ;
`;
