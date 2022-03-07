import React from 'react';
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
declare const Button: (props: Props) => JSX.Element;
export default Button;
