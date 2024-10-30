import { useContext } from 'react';
import { AvatarContext } from '../../common';
import { ButtonColor } from '../../components';


export const SelectPantColor = () => {
    const context = useContext(AvatarContext);

    if (!context) {
        return <div>Error: AvatarContext no está disponible</div>;
    }

    const { avatarState, setAvatarState, ActiveForm } = context;

    const handleColorChange = (color: string) => {
        if (ActiveForm === 'customAvatarChildren') {
        setAvatarState({
            ...avatarState,
            wardrobe_Small: {
            ...avatarState.wardrobe_Small,
            pantsColor: color,
            },
        });
        return;
        }

        setAvatarState({
            ...avatarState,
            wardrobe: {
                ...avatarState.wardrobe,
                pantsColor: color,
            },
        });
    };

    return (
        <div className="w-full flex flex-row justify-center items-center p-[0.5vw]">
        <div className="flex justify-center w-full h-full ml-[0.5vw]">
            <ButtonColor
            background="#6E6E6E"
            onClick={() => handleColorChange('#6E6E6E')}
            />
        </div>
        <div className="flex justify-center w-full h-full ml-[0.5vw]">
            <ButtonColor
            background="#1B1B1B"
            onClick={() => handleColorChange('#1B1B1B')}
            />
        </div>
        <div className="flex justify-center w-full h-full ml-[0.5vw]">
            <ButtonColor
            background="#71AEBC"
            onClick={() => handleColorChange('#71AEBC')}
            />
        </div>
        <div className="flex justify-center w-full h-full ml-[0.5vw]">
            <ButtonColor
            background="#0E3B67"
            onClick={() => handleColorChange('#0E3B67')}
            />
        </div>
        <div className="flex justify-center w-full h-full ml-[0.5vw]">
            <ButtonColor
            background="#563935"
            onClick={() => handleColorChange('#563935')}
            />
        </div>
        <div className="flex justify-center w-full h-full ml-[0.5vw]">
            <ButtonColor
            background="#A18676"
            onClick={() => handleColorChange('#A18676')}
            />
        </div>
        </div>
    );
};