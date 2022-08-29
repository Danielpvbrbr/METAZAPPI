import styled from "styled-components";

export const Container = styled.div`
    width:100vw ;
    height:100vh ;
    display:flex ;
    flex-direction:row ;

`;

export const Area = styled.div`
   width: ${props => props.isMenu ? '80vw' : '95vw'};
   height:100vh ;
   background-image: linear-gradient(to bottom right, #36C5FF, #23FC00);
   display:flex ;
   justify-content:center ;
   align-items:center ;
`;