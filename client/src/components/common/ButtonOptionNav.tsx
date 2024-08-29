//Botton para el menu de la navbar con hover, recibe 3 svg según el estado del menu
import { useState } from 'react';
import { PropsOptions } from '../../common/interfaces/components.interface';

export const ButtonOptionNav = (props: PropsOptions) => {
    const { onClick, children, disabled } = props;
    
    const [isHover, setIsHover] = useState(false);


    const handlerEnterMouse = () => {
        setIsHover(true);
    };

    const handlerLeaveMouse = () => {
        setIsHover(false);
    };

    const handlerClick = () => {
        if (onClick) onClick();
        setIsHover(false)
        setTimeout(() => {
        setIsHover(false);
        }, 300);
    };

    return (
        <button
        type="button"
        className={`w-full h-full rounded md:rounded-lg overflow-hidden relative ${disabled ? 'cursor-not-allowed opacity-60' :''}`}
        onClick={handlerClick}
        onMouseEnter={() => handlerEnterMouse()}
        onMouseLeave={() => handlerLeaveMouse()}
        disabled={disabled}
        >
        {children && children(isHover)}
        </button>
    );
};
