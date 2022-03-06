import React from 'react';
import styled from 'styled-components';
import { px } from '../../../util';

interface Props {
  error?: string;
  touched?: boolean;
}

const Text = styled.div<Props>`
  font-style: italic;
  margin-top: 4px;
  font-size: ${({ theme }) => px(theme.fonts.size.small - 2)};
  font-family: ${({ theme }) => theme.fonts.family.body};
  overflow-y: hidden; 
  color: ${({ error, touched, theme }) => ((error && touched) ? theme.palette.danger : theme.palette.neutral[0])};
  height: ${({ error, touched }) => ((error && touched) ? '20px' : '0px')};
  transition: height .1s ease-in, color 0s linear .2s; 
`;

const ErrorText = (props: Props): JSX.Element => {

  const { error, touched } = props;

  return (
    <Text error={error} touched={touched}>
      { touched && error ? error : '' }
    </Text>
  );

};

export default ErrorText;
