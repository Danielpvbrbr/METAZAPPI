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
    flex-direction:row ;
    justify-content:space-between ;
    align-items:center ;
    border-radius:5px ;
`;

export const AreaForm = styled.div`
    width:40vw;
    height:80vh ;
    background-color:#2E3031 ;
    display:flex ;
    flex-direction: column;
    align-items:center ;
    justify-content:center ;

    img{
        width:80px ;
        height:80px ;
    }
`;
export const Form = styled.div`
    width:40vw;
    display:flex ;
    flex-direction: column;
    align-items:center ;
`;
export const AreaInputSct = styled.div`
    width:30vw;
    height:195px ;
    display:flex ;
    flex-direction: column;
    align-items:center ;
    background-color: #fff;
    margin-top: 10px;
    border-radius: 5px;

    select{
        width:30vw;
        height:70px ;
        outline:none ;
        border:none ;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        border-bottom:1px solid #C4C4C4 ;
    }
    
`;
export const AreaCardSct = styled.div`
  width:29vw;
  height:310px ;
  margin:5px ;
  background-color: #4A4D4E;
  display:flex;
  flex-direction:column ;
  align-items:center ;
  padding:2px ;
  border-radius:5px ;
  overflow-y:scroll ;
 
`;
export const AreaList = styled.div`
    width:35vw;
    height:80vh ;
    background-color:#2E3031 ;
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    justify-content:space-between ;
`;
export const AreaHeader = styled.div`
    width:35vw;
    height:54px ;
    border-bottom:1px solid #C4C4C4 ;
    background-color:#2E3031 ;
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    justify-content:center;

`;

export const List = styled.div`
    width:34vw;
    height:72vh ;
    background-color:#2E3031 ;
    overflow-y:scroll ;

    li{
        height:60px ;
        list-style:none ;
        color: #fff;
        display:flex ;
        flex-direction:row ;
        justify-content:space-evenly ;
        align-items:center ;
        background-image: linear-gradient(to right, #36C5FF,#23FC00);
        border-radius:5px ;
    }
    div{
        width:25vw;
        display:flex ;
        flex-direction:column ;
        justify-content:space-evenly ;
    }
    div h4{
        font-size:10pt ;
        padding:3px ;
        margin:0 ;
    }

    div section{
        height:20px ;
        display:flex ;
        flex-direction:row ;
        justify-content:space-evenly ; 
        align-items:center ;
        background-color:#23FC00;
        margin-left:2.5px ;
        border-radius:5px ;
    }
    div section p{
        font-size:7.5pt ;
        padding:3px ;
    }
    section{
        width:5vw ;
        display:flex ;
        flex-direction:row ;
        justify-content:space-evenly ; 
        align-items:center ;
    }
`;


