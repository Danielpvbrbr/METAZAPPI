import styled from "styled-components";

export const Container = styled.div`
    width: ${props => props.width}vw;
    height:98vh ;
    display:flex ;
    flex-direction:column ;
    justify-content:space-around ;
    align-items:center ;
    background-color:#4A4D4E ;
    box-shadow: 0 0 0.7em #4A4D4E;

`;

export const AreaCards = styled.div`
    width: ${props => props.width}vw;
    height:100px ;
    display:flex ;
    flex-direction:row ;
    justify-content:space-between ;
    align-items: center;

`;
export const PainelDash = styled.div`
    width: ${props => props.width}vw;
    height:40px ;
    background-color: #2E3031;
    border-radius: 9px;
    box-shadow: 0 0 0.4em #000;
    padding:2px ;
    display:flex ;
    flex-direction:row ;
    justify-content:space-between ;
    align-items:center ;
    padding:3px ;
`;
export const Periodo = styled.div`
    width:250px;
    height:30px ;
    display:flex ;
    justify-content:space-between ;
    align-items:center ;
    
    p{
        color:#fff ;
    }

    input{
        height:25px ;
        background-color:#6AD4FF ;
        border-radius:3px;
        border: none;
        padding:2px ;
        color:#f2f2f2 ;
        cursor: pointer;
    }
`;
export const AreaRlt = styled.div`
    height:30px ;
    display:flex ;
    flex-direction:row ;
    justify-content:end ;
    align-items: center;

    button{
        width:100px;
        height:27px ;
        background-color:#6AD4FF ;
        border-radius:3px;
        border: none;
        padding:2px ;
        color:#f2f2f2 ;
        cursor: pointer;
        margin-right:15px ;
    }

    select{
        width:100px;
        height:27px ;
        background-color:#6AD4FF ;
        border-radius:3px;
        border: none;
        padding:2px ;
        color:#f2f2f2 ;
        cursor: pointer;

    }
`;
export const AreaDash = styled.div`
    width: ${props => props.width}vw;
    height:38vh ;
    display:flex ;
    flex-direction:row ;
    justify-content:space-between ;
    align-items: center;

`;
export const AreaDashBottom = styled.div`
    width: ${props => props.width}vw;
    height:32vh ;
    display:flex ;
    flex-direction:row ;
    justify-content:space-between ;
    align-items: center;

`;