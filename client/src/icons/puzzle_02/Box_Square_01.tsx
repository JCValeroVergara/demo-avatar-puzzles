import { SVGProps } from "../../common/interfaces/SVgProps.interface";

export const Box_Square_01 = (props:SVGProps) => {
    const { ...otherProps} = props;
    
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Capa_2"
        className="w-full h-full"
        data-name="Capa 2"
        viewBox="0 0 191.07 263.31"
        {...otherProps}
        >
        <defs>
            <style>{'.cls-3{stroke-width:0;fill:#edc7ab}'}</style>
        </defs>
        <g id="Capa_1-2" data-name="Capa 1">
            <path
            d="M17.62 149.96h155.83V261.4H17.62z"
            style={{
                fill: '#edc7ab',
                strokeWidth: 0,
            }}
            />
            <path
            d="M17.63 149.96h155.83v29.42H17.63z"
            style={{
                fill: '#000',
                opacity: 0.1,
                strokeWidth: 0,
            }}
            />
            <path
            d="M9.69 142.22h171.69v22.45H9.69z"
            style={{
                fill: '#edc7ab',
                strokeWidth: 0,
            }}
            />
            <path
            d="M76.12 176.13h38.84v10.8H76.12z"
            style={{
                strokeWidth: 0,
                fill: '#895a43',
            }}
            />
            <rect
            width={37.68}
            height={37.68}
            x={75.34}
            y={201.08}
            rx={2.95}
            ry={2.95}
            style={{
                fill: '#ec5368',
                strokeWidth: 0,
            }}
            />
            <path
            d="M0 0h191.07v263.31H0z"
            style={{
                fill: 'none',
                strokeWidth: 0,
            }}
            />
        </g>
        </svg>
    );
};