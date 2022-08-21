import React from 'react';
import { useTheme } from 'styled-components';
import {
  DialogContainer as Container,
  DialogFooter as Footer
} from './bin';
import CloseIcon from './bin/assets/close.svg';
import { Overlay } from '../Overlay';
import { Button } from '../Button';
import { Block } from '../Block';
import { useWindowSize } from '../../hooks/useWindowResize';
import { OverlayState } from '../../types';

export interface Props {
  children: React.ReactNode
  show?: boolean
  footer?: boolean
  intent?: 'success' | 'danger' | 'warning' | 'none'
  confirmIcon?: React.ReactNode
  confirmText?: string
  cancelText?: string
  onClose?: () => void
  onCancel?: () => void
  onConfirm?: () => void
}

// Declare the component
const Dialogue = (props: Props): JSX.Element => {
  const {
    children,
    show = true,
    intent = 'none',
    footer = true,
    confirmIcon,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    onClose,
    onCancel,
    onConfirm
  } = props;

  const theme = useTheme();

  const windowSize = useWindowSize();

  /**
   * Prevent on click from closing overlay
   */
  const onSideSheetClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  /**
   * Close Dialog
   * @param e
   * @param setOverlayState
   */
  const onCancelClick = () => {
    onClose();
    onCancel();
  };

  /**
   * Confirm Dialog
   */
  const onConfirmClick = () => {
    onConfirm();
    onClose();
  };

  return (
    <Overlay preventScroll show={show} onClose={onClose}>
      {({ state, setState }) => (
        <Container state={state} onClick={onSideSheetClick}>
          <Block position="absolute" top="10px" right="10px">
            <Button
              type="button"
              variation="minimal"
              onClick={() => onCancelClick()}
              icon={<CloseIcon width="16px" height="16px" fill={theme.palette.neutral[2]} />}
            />
          </Block>
          {children}
          { footer && (
            <Footer>
              <Button
                type="button"
                variation="secondary"
                text={cancelText}
                fluid={windowSize.width < 720}
                onClick={() => onCancelClick()}
              />
              <Button
                type="button"
                variation="default"
                text={confirmText}
                intent={intent}
                icon={confirmIcon && confirmIcon}
                fluid={windowSize.width < 720}
                onClick={(e) => onConfirmClick()}
              />
            </Footer>
          )}
        </Container>
      )}
    </Overlay>
  );
};

// Export the component as the default export
export default Dialogue;
