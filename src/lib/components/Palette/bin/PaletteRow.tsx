import styled from 'styled-components'; 

export const PaletteRow = styled.div`
  display: flex; 
  flex-direction: row; 
  width: 200px; 
`; 

export const GradientPaletteRow = styled.div`
  display: flex; 
  flex-direction: row; 
  width: 200px; 
  & :nth-child(1) {
    margin-right: 10px; 
  }
`; 