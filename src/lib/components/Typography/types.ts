export type TextProperties = { 
  size?: string; 
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  lineHeight?: string; 
  italic?: boolean; 
  disabled?: boolean; 
  editable?: boolean; 
  ellipsis?:	boolean; 
  decoration?: 'overline' | 'underline' | 'line-through'; 
  align?: 'right' | 'left' | 'center';
  spacing?: { 
    top: string, 
    bottom: string,
  }
}
