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

`;
export const InpuArea = styled.div`
    width:99%;
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
    textarea{
        width:100% ;
        outline:none ;
        border:none ;
        background-color:#fff ;
        color: #000;
    }
`;
export const AreaOp = styled.div`
    width:99%;
    display:flex;
    flex-direction:column ;
    justify-content:center ;
    align-items: center;;
    margin-top:3px ;

    div{
        width:100%;
        display:flex;
        flex-direction:row ;
        justify-content:center ;
        align-items: center;
        border-radius:5px;
        margin-bottom:6px ;

        svg{
            margin:0px 10px;
        }
    }

    span{
        width:100%;
        display:flex;
        flex-direction:row ;
        justify-content:center ;
        align-items: center;
        border-radius:5px;
        padding:2px ;
        margin:2px 0px ;
        border:1px solid #fff ;
        
        svg{
            margin:0px 10px;
        }
    }
    
 
`;
export const NumberInput = styled.input`
    width:8% ;
    height:30px ;
    outline:none ;
    border:none ;
    background-color:#fff ;
    color: #000;
    text-align:center ;
    

`;
export const AcaoInput = styled.input`
    width:80% ;
    height:30px ;
    outline:none ;
    border:none ;
    background-color:#fff ;
    color: #000;

`;