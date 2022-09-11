import styled from "styled-components";

export const Container = styled.div`
    display:flex ;
    flex-direction:column ;
    justify-content: center;

    label{
        color:#fff ;
        font-size: 10pt;
        margin-bottom:7px
    }
    span{
        color:#23FC00 ;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif ;
        font-size: 6.9pt;
        margin-bottom:7px;

    }

`;
export const InpuCicle = styled.div`
    width:99%;
    height:40px ;
    display:flex;
    justify-content:start ;
    align-items: center;
    box-shadow: 0 0 0.7em #ffff;
    background-color:#fff ;
    border-radius:5px;
    padding:2px ;

    span{
        color: #fff;
        padding: 4px;
        background-image: linear-gradient(to right, #36C5FF,#23FC00);
        height:20px;
        border-radius:5px ;
        font-size: 11pt;
        margin: 1.5px;
        white-space: nowrap;
        cursor: pointer;
    }
    span:hover{
        background-image: linear-gradient(to right, #ff0000,#ff0000);
    }
    input{
        width:100% ;
        height:33px;
        outline:none ;
        border:none ;
        background-color:#fff ;
        color: #000;
    }
`;