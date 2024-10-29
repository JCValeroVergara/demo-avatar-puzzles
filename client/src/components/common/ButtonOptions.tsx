import { selecButtons } from '../../common';

export const ButtonOption = (props: selecButtons) => {
    const { children, onClick } = props;

    return (
        <button
        type="button"
        className="bg-tablero rounded-[0.6vw] overflow-hidden relative focus:ring-[0.4vw] focus:ring-primary focus:outline-none transition-all duration-300 ease-in-out"
        onClick={onClick}
        >
        {children}
        </button>
    );
};