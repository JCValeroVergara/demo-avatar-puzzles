import { useContext } from 'react';
import { AvatarContext, colorRangePants, PropsOptions } from '../../common';
import { ButtonOption } from '../../components';
import { Pant_06_S3, Pant_01, Pant_02, Pant_03, Pant_04, Pant_05 } from '../../icons';


export const SelectPant = () => {
    const context = useContext(AvatarContext);

    if (!context) {
        return <div>Error: AvatarContext no está disponible</div>;
    }

    const { avatarState, setAvatarState, ActiveForm } = context;
    
    const ColorPant: string = ActiveForm === 'customAvatarChildren' ? avatarState.wardrobe_Small.pantsColor : avatarState.wardrobe.pantsColor;
    const color: PropsOptions = { color: ColorPant };
    const colors = colorRangePants(color);

    const handlePantSelect = (pant: string) => {
        if (ActiveForm === 'customAvatarChildren') {
        setAvatarState({
            ...avatarState,
            wardrobe_Small: {
            ...avatarState.wardrobe_Small,
            pants: pant,
            },
        });
        return;
        }

        setAvatarState({
            ...avatarState,
            wardrobe: {
                ...avatarState.wardrobe,
                pants: pant,
            },
        });
    };

    return (
        <div className="w-full flex flex-col justify-center items-center p-[0.5vw]">
            <div className="flex flex-row w-full h-full justify-center items-center mb-[0.5vw]">
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handlePantSelect('Pant_01')}>
                        {ActiveForm === 'customAvatarChildren' ? (
                        <Pant_06_S3 color={color.color} color2={colors.color2} />
                        ) : (
                        <Pant_01 color={color.color} color2={colors.color2} />
                        )}
                    </ButtonOption>
                </div>
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handlePantSelect('Pant_02')}>
                        <Pant_02 color={color.color} color2={colors.color2} color3={colors.color3} />
                    </ButtonOption>
                </div>
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handlePantSelect('Pant_03')}>
                        <Pant_03 color={color.color} color2={colors.color4} color3={colors.color2} color4={colors.color5} />
                    </ButtonOption>
                </div>
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handlePantSelect('Pant_04')}>
                        <Pant_04 color2={colors.color2} color={color.color} />
                    </ButtonOption>
                </div>
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handlePantSelect('Pant_05')}>
                        <Pant_05 color2={colors.color2} color={color.color} />
                    </ButtonOption>
                </div>
            </div>
        </div>
    );
};