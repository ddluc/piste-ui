import React from 'react';
import { Block } from '../Block';
import { Typography } from '../Typography';
import { ColorBox, BrandColorBox } from './bin/ColorBox';
import { PaletteRow } from './bin/PaletteRow';

const { Text } = Typography;

const Palette = () => (
  <Block margin={['20px', '0px', '50px', '0px']}>
    <Text>Primary</Text>
    <PaletteRow>
      <BrandColorBox color="primary" />
      <ColorBox color="primary" shade={0} />
      <ColorBox color="primary" shade={1} />
      <ColorBox color="primary" shade={2} />
      <ColorBox color="primary" shade={3} />
      <ColorBox color="primary" shade={4} />
    </PaletteRow>
    <Text>Accent</Text>
    <PaletteRow>
      <BrandColorBox color="accent" />
      <ColorBox color="accent" shade={0} />
      <ColorBox color="accent" shade={1} />
      <ColorBox color="accent" shade={2} />
      <ColorBox color="accent" shade={3} />
      <ColorBox color="accent" shade={4} />
    </PaletteRow>
    <Text>Success | Warning | Danger</Text>
    <PaletteRow>
      <ColorBox color="success" />
      <ColorBox color="warning" />
      <ColorBox color="danger" />
    </PaletteRow>
    <Text>Common</Text>
    <PaletteRow>
      <ColorBox color="white" border="#EDEDED" />
      <ColorBox color="black" />
      <ColorBox color="grey" />
      <ColorBox color="lightgrey" />
    </PaletteRow>
    <Text>Neutral</Text>
    <PaletteRow>
      <ColorBox color="neutral" shade={0} />
      <ColorBox color="neutral" shade={1} />
      <ColorBox color="neutral" shade={2} />
      <ColorBox color="neutral" shade={3} />
      <ColorBox color="neutral" shade={4} />
    </PaletteRow>
    <Text>Visualizations</Text>
    <PaletteRow>
      <ColorBox color="visualization" shade={0} />
      <ColorBox color="visualization" shade={1} />
      <ColorBox color="visualization" shade={2} />
      <ColorBox color="visualization" shade={3} />
      <ColorBox color="visualization" shade={4} />
    </PaletteRow>
  </Block>
);

export default Palette;
