import styled from "styled-components";

export const Container = styled.div`
    width: 20vw;
    height:9vh ;
    border-radius:5px ;
    margin-top:5px ;
    margin-bottom:5px ;
    display:flex ;
    flex-direction:row ;
    justify-content:space-around ;
    align-items:center ;
    background-image: linear-gradient(to left, #36C5FF, #23FC00) ;

    img{
        width:37px ;
        height:37px ;
        background-color:#4A4D4E ;
        padding:5px ;
        border-radius:30px ;
    }
   
`;
export const AreaInfo = styled.div`
    width: 15vw;
    height:9vh ;
    display:flex ;
    flex-direction:row ;

    div{
        width: 10vw;
        height:9vh ;
        display:flex ;
        flex-direction:column ;
    }

    section {
        width: 5vw;
        height:9vh ;
        display:flex ;
        align-items:center ;
        flex-direction:column ;
        justify-content: space-evenly;
        align-items:flex-end ;

    }
    section h4,h3,p{
        margin:0 ;
        padding:0 ;
    }
    section p{
        color:#fff ;
        font-size:9pt ;
    }
    section h4{
        color:#fff ;
        font-size:9pt ;
    }
    section h3{
      width:23px ;
      height:23px ;
      display:flex ;
      justify-content:center ;
      align-items:center ;
      font-size:9pt ;
      border-radius:30px ;
      background-color:#fff ;
    }
    
    div h3,h4{
        margin:0 ;
        padding:0 ;
    }

    div h3{
      font-size:10pt ;
      padding-top:8px ;
      padding-bottom:4px ;
      color:#fff ;
    }

    div h4{
      color:#fff ;
      font-size:9pt ;
      white-space: nowrap;
      width:12vw;
      overflow: hidden;   
      text-overflow: ellipsis;
    }

   
`;

