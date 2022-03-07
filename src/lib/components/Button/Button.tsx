import React from 'react';
import { DefaultButton } from './bin/DefaultButton';
import { IntentButton } from './bin/IntentButton';
import { SecondaryButton } from './bin/SecondaryButton';
import { MinimalButton } from './bin/MinimalButton';

import { ButtonIcon } from './bin/Icon';
import { ButtonText } from './bin/Text';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variation?: 'default' | 'secondary' | 'minimal';
  intent?: 'success' | 'danger' | 'warning' | 'none';
  type: 'button' | 'submit';
  text?: string;
  icon?: React.ReactNode;
  iconPosition?: 'right' | 'left';
  disabled?: boolean;
  fluid?: boolean;
  color?: string;
}

const Button = (props: Props): JSX.Element => {

  const {
    variation = 'default',
    intent = null,
    icon,
    text,
    color,
    ...buttonProps
  } = props;

  const renderButtonContent = (): JSX.Element => (
    <>
      {icon && <ButtonIcon>{icon}</ButtonIcon>}
      {text && <ButtonText>{text}</ButtonText>}
    </>
  );

  if (intent && intent !== 'none') {
    return (
      <IntentButton intent={intent} variation={variation} {...buttonProps}>
        {renderButtonContent()}
      </IntentButton>
    );
  }

  if (variation === 'secondary') {
    return (
      <SecondaryButton {...buttonProps}>
        {renderButtonContent()}
      </SecondaryButton>
    );
  }

  if (variation === 'minimal') {
    return (
      <MinimalButton color={color} {...buttonProps}>
        {renderButtonContent()}
      </MinimalButton>
    );
  }

  return (
    <DefaultButton {...buttonProps}>
      {renderButtonContent()}
    </DefaultButton>
  );

};

// Export the component as the default export
export default Button;
