
import { SVGProps } from '../../common/interfaces/SVgProps.interface';

export const CloseXClick = (props: SVGProps) => {
    const { ...otherProps } = props;
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Capa 2"
        viewBox="0 0 27.5 27.5"
        {...otherProps}
        >
        <g data-name="Capa 1">
            <rect
            width={27.5}
            height={27.5}
            rx={4.3}
            ry={4.3}
            style={{
                fill: '#e62e7b',
                strokeWidth: 0,
            }}
            />
            <path
            d="m20.99 19.35-5.61-5.61 5.61-5.61c.45-.45.45-1.19 0-1.64-.45-.45-1.19-.45-1.64 0l-5.61 5.61-5.61-5.61c-.45-.45-1.19-.45-1.64 0s-.45 1.19 0 1.64l5.61 5.61-5.61 5.61c-.45.45-.45 1.19 0 1.64.45.45 1.19.45 1.64 0l5.61-5.61 5.61 5.61c.45.45 1.19.45 1.64 0 .45-.45.45-1.19 0-1.64Z"
            style={{
                strokeWidth: 0,
                fill: '#fff',
            }}
            />
            <rect
            width={27.5}
            height={27.5}
            rx={4.06}
            ry={4.06}
            style={{
                fill: '#000',
                opacity: 0.2,
                strokeWidth: 0,
            }}
            />
        </g>
        </svg>
    );
};

