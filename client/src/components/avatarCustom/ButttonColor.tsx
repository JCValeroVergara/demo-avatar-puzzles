import { PropsOptions } from '../../common';


export const ButtonColor = (props: PropsOptions) => {
    const { background, onClick } = props;
    const borderColor = background === '#FFFFFF' ? '#c1c1c1' : 'transparent';

    const buttonStyle = {
        backgroundColor: background,
        borderColor: borderColor,
        borderWidth: '0.2vw',
    };

    return (
        <button
            type="button"
            className="w-full h-[6vh] rounded-[0.5vw] hover:text-primary focus:ring-[0.4vw] focus:ring-primary flex items-center justify-center"
            style={buttonStyle}
            onClick={onClick}
        ></button>
    );
};