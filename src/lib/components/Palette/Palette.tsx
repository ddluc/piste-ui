import React from 'react'; 
import { ColorBox } from './bin/ColorBox';
import { PaletteRow, GradientPaletteRow } from './bin/PaletteRow';

const Palette = () => { 
  return (
    <div >
      <p>Primary</p>
      <GradientPaletteRow>
        <ColorBox color="primary" />
        <ColorBox color="primary" shade={0}/>
        <ColorBox color="primary" shade={1}/>
        <ColorBox color="primary" shade={2}/>
        <ColorBox color="primary" shade={3}/>
        <ColorBox color="primary" shade={4}/>
      </GradientPaletteRow>
      <p>Accent</p>
      <GradientPaletteRow>
        <ColorBox color="accent" />
        <ColorBox color="accent" shade={0}/>
        <ColorBox color="accent" shade={1}/>
        <ColorBox color="accent" shade={2}/>
        <ColorBox color="accent" shade={3}/>
        <ColorBox color="accent" shade={4}/>
      </GradientPaletteRow>
      <p>Success | Warning | Danger</p>
      <PaletteRow>
        <ColorBox color="success" />
        <ColorBox color="warning" />
        <ColorBox color="danger" />
      </PaletteRow>
      <p>Common</p>
      <PaletteRow>
        <ColorBox color="white" />
        <ColorBox color="black" />
        <ColorBox color="grey" />
        <ColorBox color="lightgrey" />
      </PaletteRow>
      <p>Visualizations</p>
      <PaletteRow>
        <ColorBox color="visualization" shade={0} />
        <ColorBox color="visualization" shade={1} />
        <ColorBox color="visualization" shade={2} />
        <ColorBox color="visualization" shade={3} />
        <ColorBox color="visualization" shade={4} />
      </PaletteRow>
    </div>
  ); 
}; 

export default Palette; 