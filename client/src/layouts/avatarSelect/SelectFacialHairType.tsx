import { useContext } from 'react';
import { AvatarContext, colorRangeHair, PropsOptions } from '../../common';
import { ButtonOption } from '../../components';
import { FacialHair_01, FacialHair_02, FacialHair_03, FacialHair_04, FacialHair_05, FacialHair_06, FacialHair_07, FacialHair_08, FacialHair_09, FacialHair_10 } from '../../icons';


export const SelectFacialHairType = () => {
    const context = useContext(AvatarContext);

    if (!context) {
        return <div>Error: AvatarContext no está disponible</div>;
    }

    const { avatarState, setAvatarState, ActiveForm } = context;

    const ColorHair: string = ActiveForm === 'customAvatarChildren' ? avatarState.avatar_Small.hairColor : avatarState.avatar.hairColor;
    
    const color: PropsOptions = { color: ColorHair };
    const colors = colorRangeHair(color);

    const handleBeardType = (beardType: string) => {
        setAvatarState({
            ...avatarState,
            avatar: {
                ...avatarState.avatar,
                beardType: beardType,
            },
        });
    };

    return (
        <div className="w-full flex flex-col justify-center items-center p-[0.5vw]">
            <div className="flex flex-row w-full h-full justify-center items-center mb-[0.5vw]">
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handleBeardType('Beard_01')}>
                        <FacialHair_01 color3={colors.color4} color4={colors.color4} />
                    </ButtonOption>
                </div>
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handleBeardType('Beard_02')}>
                        <FacialHair_02 color3={colors.color4} color4={colors.color4} />
                    </ButtonOption>
                </div>
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handleBeardType('Beard_03')}>
                        <FacialHair_03 color3={colors.color4} color4={colors.color4} />
                    </ButtonOption>
                </div>
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handleBeardType('Beard_04')}>
                        <FacialHair_04 color3={colors.color4} color4={colors.color4} />
                    </ButtonOption>
                </div>
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handleBeardType('Beard_05')}>
                        <FacialHair_05 color3={colors.color4} color4={colors.color4} />
                    </ButtonOption>
                </div>
            </div>
            {/* _______________________________________________________________________________________ */}
            <div className="flex flex-row w-full h-full justify-center items-center mb-[0.5vw]">
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handleBeardType('Beard_06')}>
                        <FacialHair_06 color3={colors.color4} color4={colors.color4} />
                    </ButtonOption>
                </div>
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handleBeardType('Beard_07')}>
                        <FacialHair_07 color3={colors.color4} color4={colors.color4} />
                    </ButtonOption>
                </div>
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handleBeardType('Beard_08')}>
                        <FacialHair_08 color3={colors.color4} color4={colors.color4} />
                    </ButtonOption>
                </div>
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handleBeardType('Beard_09')}>
                        <FacialHair_09 color3={colors.color4} color4={colors.color4} />
                    </ButtonOption>
                </div>
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handleBeardType('Beard_10')}>
                        <FacialHair_10 color3={colors.color4} color4={colors.color4} />
                    </ButtonOption>
                </div>
            </div>
        </div>
    );
};