import { useState } from 'react';
import { PropsOptions } from '../../common/interfaces/components.interface';

export const ButtonAssistant = (props: PropsOptions) => {
    const { text, onClick, disabled } = props;
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
        setTimeout(() => {
        setIsFocused(false);
        }, 300);
    };

    return (
        <button
        type="button"
        className={`w-full h-full border-[0.15vw] border-tableroborder text-[2.8vh] md:text-[2vh] rounded-[0.5vw] text-primary bg-white hover:text-white hover:bg-primary hover:border-borderbutton font-semibold flex items-center justify-center leading-none ${
            isFocused ? 'focus:bg-borderbutton focus:border-primary' : ''
            }
        ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
        onClick={onClick}
        onFocus={handleFocus}
        disabled={disabled}
        >
        {text}
        </button>
    );
};

