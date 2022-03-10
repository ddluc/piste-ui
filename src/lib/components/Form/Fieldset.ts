import styled from 'styled-components';

interface Props {
  border?: boolean;
  error?: boolean;
  direction?: 'horizontal' | 'vertical'
}

const Fieldset = styled.fieldset<Props>`
  display: flex;
  flex-direction: ${({ direction }) => (direction === 'horizontal' ? 'row' : 'column')};
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[2]}`};
  row-gap: ${({ theme }) => theme.spacing[2]};
  column-gap: ${({ theme }) => theme.spacing[4]};
  border: ${({ theme, border }) => (border ? `solid ${theme.border.width}` : 'none')}; 
  border-color: ${({ theme, error }) => (error ? theme.palette.danger : theme.palette.neutral[3])}; 
  border-radius: ${({ theme }) => theme.border.radius};
`;

export default Fieldset;
