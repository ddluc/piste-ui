import { BaseSkeletonProps } from '../../Skeleton';
export interface Props extends BaseSkeletonProps {
    lines?: number;
    lineHeight?: number;
    width?: number;
}
export declare const TextSkeleton: (props: Props) => JSX.Element;
