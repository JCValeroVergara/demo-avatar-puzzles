import { useContext } from 'react';
import { AvatarContext } from '../../common';
import { ButtonColor } from '../../components';


export const SelectEyesColors = () => {
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
            eyeColor: color,
            },
        });
        return;
        }
        setAvatarState({
            ...avatarState,
            avatar: {
                ...avatarState.avatar,
                eyeColor: color,
            },
        });
    };

    return (
        <div className="w-full flex flex-row justify-center items-center p-[0.5vw]">
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonColor
                background="#353B49"
                onClick={() => handleColorChange('#353B49')}
                />
            </div>
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonColor
                background="#4C382B"
                onClick={() => handleColorChange('#4C382B')}
                />
            </div>
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonColor
                background="#663E22"
                onClick={() => handleColorChange('#663E22')}
                />
            </div>
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonColor
                background="#478391"
                onClick={() => handleColorChange('#478391')}
                />
            </div>
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonColor
                background="#375439"
                onClick={() => handleColorChange('#375439')}
                />
            </div>
        </div>
    );
};