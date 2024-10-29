import { useContext } from 'react';
import { AvatarContext, colorRangeSkin } from '../../common';
import { ButtonOption } from '../../components';
import { Skin_1, Skin_2, Skin_3, Skin_4, Skin_5 } from '../../icons';


export const SelectSkinColors = () => {
    const context = useContext(AvatarContext);

    if (!context) {
        return <div>Error: AvatarContext no está disponible</div>;
    }

    const { avatarState, setAvatarState, ActiveForm } = context;


    const handleColorChange = (color: string) => {
        const colors = colorRangeSkin({ color });

        if (ActiveForm === 'customAvatarChildren') {
        setAvatarState({
            ...avatarState,
            avatar_Small: {
                ...avatarState.avatar_Small,
                skinColor: color,
                skinLine: colors.color2,
                face_4: colors.color4,
            },
        });
        return;
        }

        setAvatarState({
        ...avatarState,
            avatar: {
                ...avatarState.avatar,
                skinColor: color,
                skinLine: colors.color2,
                face_3: colors.color3,
                face_4: colors.color4,
            },
        });
    };

    return (
        <div className="w-full flex flex-row justify-center items-center p-[0.5vw]">
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonOption onClick={() => handleColorChange('#FFDDCF')}>
                <Skin_1 />
                </ButtonOption>
            </div>
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonOption onClick={() => handleColorChange('#FFCAA6')}>
                <Skin_2 />
                </ButtonOption>
            </div>
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonOption onClick={() => handleColorChange('#D69E70')}>
                <Skin_3 />
                </ButtonOption>
            </div>
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonOption onClick={() => handleColorChange('#8E5732')}>
                <Skin_4 />
                </ButtonOption>
            </div>
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonOption onClick={() => handleColorChange('#60301B')}>
                <Skin_5 />
                </ButtonOption>
            </div>
        </div>
    );
};