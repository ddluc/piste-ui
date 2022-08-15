import React from 'react';
import { useTheme } from 'styled-components';
import {
  DialogueContainer as Container,
  DialogueFooter as Footer
} from './bin';
import CloseIcon from './bin/assets/close.svg';
import { Overlay } from '../Overlay';
import { Button } from '../Button';
import { Block } from '../Block';
import { useWindowSize } from '../../hooks/useWindowResize';

export interface Props {
  children: React.ReactNode
  showFooter?: boolean
  intent?: 'success' | 'danger' | 'warning' | 'none'
  confirmIcon?: React.ReactNode
  confirmText?: string
  cancelText?: string
  onClose?: () => void
  onConfirm?: () => void
}

// Declare the component
const Dialogue = (props: Props): JSX.Element => {
  const {
    children,
    intent = 'none',
    showFooter = true,
    confirmIcon,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    onClose,
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

  return (
    <Overlay preventScroll onClose={onClose}>
      {({ state, setState }) => (
        <Container state={state} onClick={onSideSheetClick}>
          <Block position="absolute" top="10px" right="10px">
            <Button
              type="button"
              variation="minimal"
              onClick={() => setState('closing')}
              icon={<CloseIcon width="16px" height="16px" fill={theme.palette.neutral[2]} />}
            />
          </Block>
          {children}
          { showFooter && (
            <Footer>
              <Button
                type="button"
                variation="secondary"
                text={cancelText}
                fluid={windowSize.width < 720}
              />
              <Button
                type="button"
                variation="default"
                text={confirmText}
                intent={intent}
                fluid={windowSize.width < 720}
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
