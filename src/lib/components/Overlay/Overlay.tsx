import React from 'react';
import { OverlayContainer } from './bin';

type OverlayState = 'opening' | 'opened' | 'closing' | 'closed';

export interface Props {
  children?: React.ReactNode
  preventScroll?: boolean
  onClose?: () => void
}

const Overlay = (props: Props): JSX.Element => {

  const { children, onClose, preventScroll } = props;

  const [state, setState] = React.useState<OverlayState>('opening');

  const onEsc = React.useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setState('closing');
    }
  }, []);

  const onOverlayClick = () => {
    setState('closing');
  };

  /**
   * Set the initial state of the overlay to opened
   */
  React.useEffect(() => {
    if (state === 'opening') {
      setState('opened');
    }
  }, []);

  /**
   * Toggle body scroll based on overlay state
   */
  React.useEffect(() => {
    if (preventScroll) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [preventScroll]);

  /**
   * Toggle event key listener for escape key
   */
  React.useEffect(() => {
    if (state === 'opened') {
      document.body.addEventListener('keydown', onEsc, false);
    }
    if (state === 'closing') {
      document.body.removeEventListener('keydown', onEsc, false);
    }
  }, [state]);

  React.useEffect(() => {
    if (state === 'closing') {
      const timer = setTimeout(() => {
        setState('closed');
        onClose();
      }, 500);
      return () => clearTimeout(timer);
    }
    return null;
  }, [state]);

  return (
    <OverlayContainer state={state} onClick={onOverlayClick}>
      {children}
    </OverlayContainer>
  );
};

// Export the component as the default export
export default Overlay;
