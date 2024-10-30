import { useContext } from 'react';
import { AvatarContext, colorRangeShirt, PropsOptions } from '../../common';
import { ButtonOption } from '../../components';
import { Shirt_01, Shirt_02, Shirt_03, Shirt_06_S3, Shirt_04, Shirt_07_S3, Shirt_05 } from '../../icons';


export const SelectShirt = () => {
    const context = useContext(AvatarContext);

    if (!context) {
        return <div>Error: AvatarContext no está disponible</div>;
    }

    const { avatarState, setAvatarState, ActiveForm } = context;

    const ColorShirt: string = ActiveForm === 'customAvatarChildren' ? avatarState.wardrobe_Small.shirtColor : avatarState.wardrobe.shirtColor;
    const color: PropsOptions = { color: ColorShirt };
    const colors = colorRangeShirt(color);

    const handleShirtSelect = (shirt: string) => {
        if (ActiveForm === 'customAvatarChildren') {
        setAvatarState({
            ...avatarState,
            wardrobe_Small: {
            ...avatarState.wardrobe_Small,
            shirts: shirt,
            },
        });
        return;
        }
        setAvatarState({
            ...avatarState,
            wardrobe: {
                ...avatarState.wardrobe,
                shirts: shirt,
            },
        });
    };

    return (
        <div className="w-full flex flex-col justify-center items-center p-[0.5vw]">
            <div className="flex flex-row w-full h-full justify-center items-center mb-[0.5vw]">
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handleShirtSelect('Shirt_01')}>
                        <Shirt_01 color={color.color} />
                    </ButtonOption>
                </div>
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handleShirtSelect('Shirt_02')}>
                        <Shirt_02 color={colors.color2} color2={colors.color3} />
                    </ButtonOption>
                </div>
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handleShirtSelect('Shirt_03')}>
                        <Shirt_03 color={color.color} color2={colors.color4} />
                    </ButtonOption>
                </div>
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handleShirtSelect('Shirt_04')}>
                        {ActiveForm === 'customAvatarChildren' ? (
                        <Shirt_06_S3 color={color.color} color2={colors.color6} />
                        ) : (
                        <Shirt_04 color={color.color} color2={colors.color6} />
                        )}
                    </ButtonOption>
                </div>
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handleShirtSelect('Shirt_05')}>
                        {ActiveForm === 'customAvatarChildren' ? (
                        <Shirt_07_S3 color={colors.color7} color2={colors.color8} color3={colors.color9} />
                        ) : (
                        <Shirt_05 color={colors.color7} color2={colors.color8} color3={colors.color9} />
                        )}
                    </ButtonOption>
                </div>
            </div>
        </div>
    );
};