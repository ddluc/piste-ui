import { Body } from './bin/Body';
import { H1, H2, H3, H4, H5, H6 } from './bin/Heading';
import { Link } from './bin/Link';
import { ListItem, OrderedList, UnorderedList } from './bin/List';
/**
 * Export Text Components
 */
declare type TextComponents = {
    Body: typeof Body;
    Link: typeof Link;
    H1: typeof H1;
    H2: typeof H2;
    H3: typeof H3;
    H4: typeof H4;
    H5: typeof H5;
    H6: typeof H6;
};
export declare const Text: TextComponents;
/**
 * Export List Components
 */
declare type ListComponents = {
    Ordered: typeof OrderedList;
    Unordered: typeof UnorderedList;
    Item: typeof ListItem;
};
export declare const List: ListComponents;
export type { TextProperties as TextProps } from './types';
