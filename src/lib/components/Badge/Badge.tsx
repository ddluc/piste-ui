import React, { isValidElement } from 'react';
import { useTheme, Theme } from 'styled-components';
import { PaletteOption } from '../../types';
import { getBadgePallete } from './bin/Palette';
import { DefaultBadge, BadgeIcon, BadgeText } from './bin';

export interface Props {
  text?: string
  icon?: React.ReactNode
  iconPosition?: 'right' | 'left'
  type?: PaletteOption
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Badge = (props: Props): JSX.Element => {
  const {
    text = '',
    icon,
    iconPosition,
    type = 'primary',
    disabled = false,
    onClick = null
  } = props;

  const theme: Theme = useTheme();

  const palette = getBadgePallete(theme);

  const isClickable = onClick !== null;

  const hasText = text !== '';

  return (
    <DefaultBadge
      palette={palette[type]}
      iconPosition={iconPosition}
      isClickable={isClickable}
      hasText={hasText}
      disabled={disabled}
    >
      {icon && <BadgeIcon>{icon}</BadgeIcon>}
      {text && <BadgeText>{text}</BadgeText>}
    </DefaultBadge>
  );
};

export default Badge;
