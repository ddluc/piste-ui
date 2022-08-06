import { keyframes } from 'styled-components';

const open = keyframes`

  0% {
    opacity: 0;
    transform: translateY(-120%);
  }
    
  100% {
    transform: translateY(0);
  }

`;

const close = keyframes`

  0% { 
    transform: scale(1);
    opacity: 1;
  }

  100% { 
    transform: scale(0.9);
    opacity: 0
  }
`;

const animations = { open, close };

export default animations;
