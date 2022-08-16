import React from 'react';
import { ElevationLevel } from '../../types';
import { Card } from '../Card';
import { Block } from '../Block';
import { Header, Content, Dropdown } from './bin';

import ArrowIcon from './bin/assets/arrow.svg';

export interface Props {
  title: React.ReactNode
  id?: string
  controlled?: boolean
  open?: boolean
  elevation?: ElevationLevel
  children?: React.ReactNode
  height?: number
  onClick?: (id: string) => void
}

const Accordion = (props: Props): JSX.Element => {
  const {
    id,
    title,
    open,
    controlled,
    children,
    elevation,
    height = 400,
    onClick
  } = props;

  const [isOpen, setIsOpen] = React.useState(false);

  const handleHeaderClick = () => {
    if (controlled) {
      onClick(id);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const shouldRenderContent = () => (controlled ? open : isOpen);

  return (
    <Card elevation={elevation} padding={['0px', '0px', '0px', '0px']}>
      <Header onClick={handleHeaderClick}>
        <strong>{title}</strong>
        <Dropdown open={shouldRenderContent()}>
          <ArrowIcon height="16px" width="16px" />
        </Dropdown>
      </Header>
      <Content open={shouldRenderContent()} maxHeight={height}>
        {children}
      </Content>
    </Card>
  );
};

export default Accordion;
