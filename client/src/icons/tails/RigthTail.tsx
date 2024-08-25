import { SVGProps } from '../../common/interfaces/SVgProps.interface';

export const RigthTail = (props:SVGProps) => {
    const { ...otherProps} = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className='w-full h-full'
            data-name="Capa 2"
            viewBox="0 0 72.59 84.9"
            {...otherProps}
            >
            <g data-name="Capa 1">
                <path
                d="M72.59 24.66H7.67c-6.68 0-9.03 7.53-3.22 11.53L72.6 83.23V24.66Z"
                style={{
                    fill: '#fff',
                    strokeWidth: 0,
                }}
                />
                <path
                d="M0 0h72.59v84.9H0z"
                style={{
                    strokeWidth: 0,
                    fill: 'none',
                }}
                />
            </g>
        </svg>
    );
};