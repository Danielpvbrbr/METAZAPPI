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
    width: 100%;
    height:6vh ;
    background-color:#2B2B2B ;
    border-bottom: 1px solid #C4C4C4 ;
    display:flex ;
    flex-direction:row ;
    justify-content:space-between ;
`;
export const AreaPerfilName = styled.div`
    width: 20vw;
    height:6vh ;
    display:flex ;
    flex-direction:row ;
    align-items:center ;

    img{
        width:35px ;
        height:35px ;
        margin-left:10px ;
    }
    h4{
        margin-left:6px ;
        color:#fff ;
    }
`;
export const AreaFerram = styled.div`
    width: 17vw;
    height:6vh ;
    display:flex ;
    flex-direction:row ;
    align-items:center ;
    justify-content:space-evenly ;
    
    p{
        color:#fff ;
    }
`;

export const AreaBodyChat = styled.ul`
    width: 100%;
    height:85vh ;
    display:flex ;
    flex-direction:column ;
    margin:0 ;
    padding:0 ;
    background-image:url(${props => props.bg});
`;
export const AreaMSG = styled.li`
    width: 100%;
    list-style:none ;
    display:flex ;
    justify-content:${props => props.fromMe ? 'flex-end' : 'flex-start'} ;

    div{
        max-width: 40%;
        background-color:${props => props.color};
        overflow-wrap: break-word;  
        word-wrap: break-word; 
        word-break: break-word;
        padding:6px ;
        border-top-left-radius:${props => props.fromMe ? '10px' : '0px'};
        border-top-right-radius:${props => props.fromMe ? '0px' : '10px'};
        border-bottom-left-radius:10px;
        border-bottom-right-radius:10px;
        margin:20px ;
    }
    
    h4{
        color:${props => props.fromMe ? '#fff' : '#f1f1f1'};
        font-size:10pt ;
        margin:0 ;
        padding:0 ;
        margin-bottom: 2px;
        font-weight: normal;
    }
    p{
        color:${props => props.fromMe ? '#fff' : '#fff'};
        font-size:8pt ;
        text-align:end ;
        margin:0 ;
        padding:0 ;
    }
`;

export const AreaFooterChat = styled.div`
    width: 100%;
    height:7vh ;
    background-color:#2B2B2B ;
    display:flex ;
    justify-content:space-evenly ;
    align-items:center ;
    box-shadow: 0 0 0.7em #C4C4C4;

    input{
        width: 80%; 
        height:4.7vh ;
        border-radius: 5px;
        outline:none ;
        padding-left:6px ;
        font-size:12pt ;
        border:none ;
    }
`;
