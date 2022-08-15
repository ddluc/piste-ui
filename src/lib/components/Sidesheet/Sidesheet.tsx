import React from 'react';
import { useTheme } from 'styled-components';
import {
  SideSheetContainer as Container
} from './bin';
import CloseIcon from './bin/assets/close.svg';
import { Overlay } from '../Overlay';
import { Button } from '../Button';
import { Block } from '../Block';

export interface Props {
  children: React.ReactNode
  onClose?: () => void
}

const Sidesheet = (props: Props): JSX.Element => {

  const { children, onClose } = props;

  const theme = useTheme();

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
        </Container>
      )}
    </Overlay>
  );

};

// Export the component as the default export
export default Sidesheet;
