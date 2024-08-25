export interface SVGProps<T =unknown> {
    width?: string;
    height?: string;
    className?: string;
    style?: React.CSSProperties;
    color1?: string;
    color2?: string;
    color3?: string;
    otherProps?: T;
}