import styled from 'styled-components'; 

export const MainImage = styled.img`
  opacity: ${({opacity = 1}: { opacity: number}) => opacity };
  transition: opacity ease-in 500ms;
`; 