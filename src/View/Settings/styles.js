import styled from "styled-components";

export const Container = styled.div`
    width: ${props => props.width}vw;
    height:98vh ;
    display:flex ;
    flex-direction:column ;
    justify-content:space-evenly ;
    align-items:center ;
    background-color:#4A4D4E ;
    box-shadow: 0 0 0.7em #4A4D4E;
`;

export const AreaMult = styled.div`
    width:95%;
    height:90vh ;
    display:flex ;
    flex-direction:column ;
    justify-content:space-between ;
    align-items:center ;
    border-radius:5px ;
`;
export const AreaMenu = styled.div`
    width:100%;
    height:40px ;
    display:flex ;
    flex-direction: row;
    align-items:center ;
    justify-content:start ;
`;
export const CampoMenu = styled.section`
        width: 100%;
        height:39px ;
        background-color:#36C5FF ;
        margin-right: 4px;
        display:flex ;
        flex-direction:column ;
        justify-content:center ;
        align-items:center ;
        cursor: pointer;
    
    p{
        color:#fff ;
        font-size: 12pt;
       
    }
    div{
        width: 100%;
        height:3px ;
        border: ${props => props.IsColor && '1px solid #23FC00'} 
    }

`;
export const AreaInfo = styled.div`
    width:100%;
    height:83vh ;
    background-color:#2E3031 ;
    display:flex ;
    flex-direction: column;
    align-items:center ;
    justify-content:center ;

`;
