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
    transform: scale(0.6);
    opacity: 0;
  }

  30% {
    transform: scale(0.6);
    opacity: 0;
  }

  60% {
    transform: scale(1);
  }

  100% { 
    transform: scale(1);
    opacity: 1
  }

`;

const slideOutTop = keyframes`

  0% { 
    transform: scale(1);
    opacity: 1;
  }

  75% { 
    transform: scale(0.6);
    opacity: 0
  }

  100% { 
    transform: scale(0.6);
    opacity: 0
  }
`;

const animations = {
  slideInBottom,
  slideOutBottom,
  slideInTop,
  slideOutTop,
};

export default animations;
