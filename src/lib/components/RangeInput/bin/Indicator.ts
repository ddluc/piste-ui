import styled from 'styled-components';

type Props = {
  position: string
}

export const Indicator = styled.div<Props>`
  position: relative;
  height: 18px; 
  width: 36px; 
  padding: 2px 4px;
  font-size: 12px;
  background-color: ${({ theme }) => theme.palette.neutral[3]};
  border-radius: ${({ theme }) => theme.border.radius};
  text-align: center;
  position: absolute;
  top: 4px;
  transform: translateX(-50%);
  left: ${({ position }) => position};
  
  span:before{
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-top: 6px solid ${({ theme }) => theme.palette.neutral[3]};;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    top: 100%;
    left: 50%;
    margin-left: -8px;
    margin-top: -1px;
  }
`;
