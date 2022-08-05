import React from 'react';
import { useTheme, Theme } from 'styled-components';
import { PaletteOption } from '../../types';
import { Skeleton, isSkeleton, BaseSkeletonProps } from '../Skeleton';
import { getBadgePallete } from './bin/Palette';
import { DefaultBadge, BadgeIcon, BadgeText } from './bin';

export interface BaseProps {
  text?: string
  icon?: React.ReactNode
  iconPosition?: 'right' | 'left'
  type?: PaletteOption
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

interface SkeletonProps extends BaseSkeletonProps {
  width: number,
}

export type Props = BaseProps | SkeletonProps;

const Badge = (props: Props): JSX.Element => {

  if (isSkeleton(props)) {
    const { width = 40 } = props;
    return (<Skeleton {...props} width={width} height={22} type="box" />);
  }

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
      as={isClickable ? 'button' : 'div'}
      onClick={onClick}
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
