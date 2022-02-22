/**
 *
 * Re-usable and utility types
 * ==================================================================
 */
/**
 * Defines the prop shape for skeleton components
 */
export declare type SkeletonProps = {
    skeleton: boolean;
    width?: string;
    height?: string;
};
/**
 * Typeguard to determine if props are skeleton props
 */
export declare const isSkeleton: (props: any) => props is SkeletonProps;
