import styled from "styled-components";

export const Container = styled.div`
    width: 100vw ;
    height:100vh ;
    display:flex ;
    flex-direction:row ;
    justify-content:center ;
    align-items:center ;
`;

export const LoginLateral = styled.div`
    width: 35vw ;
    height:100vh ;
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    background-color:#2B2B2B;
    border-right: 4px solid;
    border-image: linear-gradient(45deg,#00FF19,#00BCD4) 10;
`;

export const AreaLogo = styled.div`
    width: 25vw ;
    height:30vh ;
    display:flex ;
    align-items:center ;
    justify-content:center ;
    margin-top: 60px;
    margin-bottom: 20px;

    img{
        width:230px ;
        height:150px ;

    }
`;

export const InputLabel = styled.div`
    width: 25vw ;
    height:28vh ;
    display:flex ;
    flex-direction:column ;
    justify-content:space-between ;
    align-items:center ;

    button{
        width: 25.1vw ;
        height: 45px;
        display:flex ;
        flex-direction:column ;
        justify-content:center ;
        align-items:center ;
        color: #fff;
        background-color:#617177 ;
        cursor: pointer;
        border-width:1px ;
        /* border-image: linear-gradient(45deg, #00BCD4, #00FF19);
        border-image-slice: 1; */
        border-radius:5px ;
    }      
    button:active {
        border:none ;
    }

    section{
        width: 25vw ;
        height:17vh ;
        display:flex ;
        flex-direction:column ;
        justify-content:space-between ;
        align-items:center ;
    }
`;

export const LabelArea = styled.div`
    input{
        width:24.5vw ;
        height: 40px;
        display:flex ;
        flex-direction:column ;
        background-color:#617177 ;
        border-width:1px ;
        /* border-image: linear-gradient(45deg, #00BCD4, #00FF19); */
        border-radius:5px ;
        /* border-image-slice: 1; */
        padding-left:6px ;
        color:#fff ;
        font-size:12pt ;
        margin-top:2px ;
        outline:none;  

    }

    input::placeholder {
      color:#869297 ;
    }

    label{
        color:#fff ;
        font-size:10pt;
    }
`;

export const Area = styled.div`
   width: 90vw ;
   height:100vh ;
   background-color:#fff;
   display:flex ;
   justify-content:center ;
   align-items:center ;

   img{
    width:450px ;
    height:300px ;
   }
`;