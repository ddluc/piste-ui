import React from 'react';
import { OverlayContainer as Container } from './bin';
import { OverlayState } from '../../types';

import { OVERLAY_ANIMATION_DURATION } from './bin/animations';

export interface Props {
  preventScroll?: boolean
  children?: (props: { state: OverlayState, setState: React.Dispatch<React.SetStateAction<OverlayState>> }) => JSX.Element
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

  const onOverlayClick = (e: any) => {
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

  /**
   * Automate closing of overlay
   */
  React.useEffect(() => {
    if (state === 'closing') {
      const timer = setTimeout(() => {
        setState('closed');
        onClose();
      }, OVERLAY_ANIMATION_DURATION);
      return () => clearTimeout(timer);
    }
    return null;
  }, [state]);

  return (
    <Container state={state} onClick={onOverlayClick}>
      {children && children({ state, setState })}
    </Container>
  );
};

// Export the component as the default export
export default Overlay;
