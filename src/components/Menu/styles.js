import styled from "styled-components";

export const Container = styled.div`
    width: ${props => props.isMenu ? '20vw' : '5vw'} ;
    height:100vh ;
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    background-color:#2B2B2B;

`;
export const PerfilArea = styled.div`
    width: 18vw ;
    height:7.2vh ;
    border-bottom:1px solid #C4C4C4 ;
    display:flex ;
    flex-direction:row ;
    align-items:center ;
    justify-content: ${props => props.isMenu ? 'space-between' : 'center'}   ;
    margin-bottom:4px ;

    svg{
        margin-right:4px ;
    }

    div{
        margin: 2px;
        height:6vh ;
        display:flex ;
        flex-direction:row ;
        align-items:center ;
        justify-content:space-between ;
    }
    

    img{
        background-color:#fff ;
        padding:5px ;
        border-radius:30px ;
        width:30px ;
        height:30px ;
        margin-right: 4px;
    }

    h1{
        color:#ffff;
        font-size:10pt ;
        margin:0 ;
    }

    p{
        color:#ffff;
        font-size:8pt ;
        margin:0 ;
        padding-top:4px ;
    }
`;

export const List = styled.ul`
    width: 17vw ;
    height:72.8vh ;
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    padding:0 ;
    margin-top: 0;
`;
export const ListOp = styled.ul`
    width: 17vw ;
    height:20vh ;
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    padding:0 ;
    margin-top: 0;
`;
