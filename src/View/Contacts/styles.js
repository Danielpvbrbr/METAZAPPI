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
  
export const AreaTableContc = styled.div`
    width:95%;
    height:90vh ;
    display:flex ;
    flex-direction:column ;
    justify-content:space-evenly ;
    align-items:center ;
    background-color:#1D2A2F ;
    border-radius:5px ;
`;
export const TableTools = styled.div`
    width:98%;
    height: 50px;
    display:flex ;
    flex-direction:row ;
    justify-content:space-between ;
    align-items:center ;
`;

export const TableList = styled.div`
    width:98%;
    height:80vh ;
    align-items:center ;
    background-color:#2F444C ;

    table{
        width:100% ; 
    }
    table,tr,th,td{
        border-spacing: 0.2px;
    }
    table th{
       background-color:#1D2A2F ;
       border:none ;
       height: 40px;
       color: #fff;
       text-align:start ;
       padding:3px ; 
    }
    table tr{
       background-image: linear-gradient(to right, #23FC00,#36C5FF) ;
       border:none ;
       height: 40px;
       padding:3px ;
    }
    table td{
       border:none ;
       height: 40px;
       padding:3px ;
    }
`;
