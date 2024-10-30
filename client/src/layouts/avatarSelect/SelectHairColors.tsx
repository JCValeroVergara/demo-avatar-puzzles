import { useContext } from 'react';
import { AvatarContext } from '../../common';
import { ButtonColor } from '../../components';


export const SelectHairColors = () => {
    const context = useContext(AvatarContext);

    if (!context) {
        return <div>Error: AvatarContext no está disponible</div>;
    }

    const { avatarState, setAvatarState, ActiveForm } = context;

    const handleColorChange = (color: string) => {
        if (ActiveForm === 'customAvatarChildren') {
        setAvatarState({
            ...avatarState,
            avatar_Small: {
            ...avatarState.avatar_Small,
            hairColor: color,
            },
        });
        return;
        }

        setAvatarState({
            ...avatarState,
            avatar: {
                ...avatarState.avatar,
                hairColor: color,
            },
        });
    };

    return (
        <div className="w-full flex flex-row justify-center items-center p-[0.5vw]">
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonColor
                background="#382A22"
                onClick={() => handleColorChange('#382A22')}
                />
            </div>
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonColor
                background="#890606"
                onClick={() => handleColorChange('#890606')}
                />
            </div>
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonColor
                background="#CC5A29"
                onClick={() => handleColorChange('#CC5A29')}
                />
            </div>
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonColor
                background="#E5BD7F"
                onClick={() => handleColorChange('#E5BD7F')}
                />
            </div>
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonColor
                background="#CCD2E0"
                onClick={() => handleColorChange('#CCD2E0')}
                />
            </div>
        </div>
    );
};