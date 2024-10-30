import { useContext } from 'react';
import { AvatarContext, colorRangeHair, PropsOptions } from '../../common';
import { ButtonOption } from '../../components';
import { Hair_01, Hair_02, Hair_03, Hair_04, Hair_05, Hair_06, Hair_07, Hair_08, Hair_09, Hair_10, Hair_11, Hair_12, Hair_13, Hair_14, Hair_15, Hair_16, Hair_17, Hair_18, Hair_19, Hair_20, Hair_21 } from '../../icons';


export const SelectHairType = () => {
    const context = useContext(AvatarContext);

    if (!context) {
        return <div>Error: AvatarContext no está disponible</div>;
    }

    const { avatarState, setAvatarState, ActiveForm } = context;
    
    const ColorHair: string = ActiveForm === 'customAvatarChildren' ? avatarState.avatar_Small.hairColor : avatarState.avatar.hairColor;
    
    const color: PropsOptions = { color: ColorHair };
    const colors = colorRangeHair(color);

    const handleHairType = (hairType: string) => {
        if (ActiveForm === 'customAvatarChildren') {
        setAvatarState({
            ...avatarState,
            avatar_Small: {
            ...avatarState.avatar_Small,
            hairType: hairType,
            },
        });
        return;
        }

        setAvatarState({
            ...avatarState,
            avatar: {
                ...avatarState.avatar,
                hairType: hairType,
            },
        });
    };

    return (
        <div className="w-full flex flex-col justify-center items-center p-[0.5vw]">
        <div className="flex flex-row w-full h-full justify-center items-center mb-[0.5vw]">
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonOption onClick={() => handleHairType('Hair_01')}>
                    <Hair_01 color={color.color} color2={colors.color4} />
                </ButtonOption>
            </div>
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonOption onClick={() => handleHairType('Hair_19')}>
                    {ActiveForm === 'customAvatarChildren' ? (
                    <Hair_21 color={color.color} color2={colors.color4} color3={colors.color2} />
                    ) : (
                    <Hair_19 color={color.color} color2={colors.color4} />
                    )}
                </ButtonOption>
            </div>
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonOption onClick={() => handleHairType('Hair_02')}>
                    <Hair_02 color={color.color} color2={colors.color4} />
                </ButtonOption>
            </div>
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonOption onClick={() => handleHairType('Hair_03')}>
                    <Hair_03 color={color.color} color2={colors.color4} />
                </ButtonOption>
            </div>
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonOption onClick={() => handleHairType('Hair_04')}>
                    <Hair_04 color={color.color} color2={colors.color4} color3={colors.color2} />
                </ButtonOption>
            </div>
        </div>
        {/* _______________________________________________________________________________________ */}
        <div className="flex flex-row w-full h-full justify-center items-center mb-[0.5vw]">
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonOption onClick={() => handleHairType('Hair_05')}>
                    <Hair_05 color={color.color} color2={colors.color4} />
                </ButtonOption>
            </div>
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonOption onClick={() => handleHairType('Hair_06')}>
                    <Hair_06 color={color.color} color2={colors.color4} />
                </ButtonOption>
            </div>
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonOption onClick={() => handleHairType('Hair_07')}>
                    <Hair_07 color={color.color} color2={colors.color4} />
                </ButtonOption>
            </div>
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonOption onClick={() => handleHairType('Hair_20')}>
                    <Hair_20 color={color.color} color2={colors.color4} />
                </ButtonOption>
            </div>
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonOption onClick={() => handleHairType('Hair_09')}>
                    <Hair_09 color={color.color} color2={colors.color4} />
                </ButtonOption>
            </div>
        </div>
        {/* _______________________________________________________________________________________ */}
        <div className="flex flex-row w-full h-full justify-center items-center mb-[0.5vw]">
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonOption onClick={() => handleHairType('Hair_11')}>
                    <Hair_11 color={color.color} color2={colors.color4} />
                </ButtonOption>
            </div>
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonOption onClick={() => handleHairType('Hair_12')}>
                    <Hair_12 color={color.color} color2={colors.color4} />
                </ButtonOption>
            </div>
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonOption onClick={() => handleHairType('Hair_13')}>
                    <Hair_13 color={color.color} color2={colors.color4} />
                </ButtonOption>
            </div>
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonOption onClick={() => handleHairType('Hair_14')}>
                    <Hair_14 color={color.color} color2={colors.color4} />
                </ButtonOption>
            </div>
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonOption onClick={() => handleHairType('Hair_15')}>
                    <Hair_15 color={color.color} color2={colors.color4} />
                </ButtonOption>
            </div>
        </div>
        {/* _______________________________________________________________________________________ */}
        <div className="flex flex-row w-full h-full justify-center items-center mb-[0.5vw]">
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonOption onClick={() => handleHairType('Hair_16')}>
                    <Hair_16 color={color.color} color2={colors.color4} />
                </ButtonOption>
            </div>
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonOption onClick={() => handleHairType('Hair_17')}>
                    <Hair_17 color={color.color} color2={colors.color4} />
                </ButtonOption>
            </div>
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonOption onClick={() => handleHairType('Hair_18')}>
                    <Hair_18 color={color.color} color2={colors.color4} />
                </ButtonOption>
            </div>
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonOption onClick={() => handleHairType('Hair_10')}>
                    <Hair_10 color={color.color} color2={colors.color4} />
                </ButtonOption>
            </div>
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonOption onClick={() => handleHairType('Hair_08')}>
                    <Hair_08 color={color.color} color2={colors.color4} />
                </ButtonOption>
            </div>
        </div>
        </div>
    );
};