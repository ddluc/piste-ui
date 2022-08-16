import { keyframes } from 'styled-components';

const slideInBottom = keyframes`

  0% {
    bottom: -1000px;
  }

  100% {
    bottom: 10px;
  }

`;

const slideOutBottom = keyframes`

  0% { 
    bottom: 10px; 
  }

  100% { 
    bottom: -1000px;
  }
`;

const slideInTop = keyframes`

  0% {
    top: -1000px;
  }

  100% {
    top: 200px;
  }

`;

const slideOutTop = keyframes`

  0% { 
    top: 200px; 
  }

  100% { 
    top: -1000px;
  }
`;

const animations = {
  slideInBottom,
  slideOutBottom,
  slideInTop,
  slideOutTop,
};

export default animations;
