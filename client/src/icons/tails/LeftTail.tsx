import { SVGProps } from "../../common/interfaces/SVgProps.interface";


export const LeftTail = (props:SVGProps) => {
    const { ...otherProps} = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Capa 2"
            className='w-full h-full'
            viewBox="0 0 84.98 44.71"
            {...otherProps}
            >
            <g data-name="Capa 1">
                <path
                d="M0 8.07h84.98v36.64H0z"
                style={{
                    strokeWidth: 0,
                    fill: 'none',
                }}
                />
                <path
                d="M32.58.52 13.84 38.55c-1.93 3.91 2.58 7.84 6.2 5.4L84.98 0l-52.4.52Z"
                style={{
                    fill: '#fff',
                    strokeWidth: 0,
                }}
                />
            </g>
        </svg>
    );
};