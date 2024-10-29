import { useContext } from 'react';
import { ButtonOption } from '../../components';
import { AvatarContext, colorRangeAccesories, PropsOptions } from '../../common';
import { Accesories_01, Accesories_02, Accesories_03, Accesories_04, Accesories_05, Accesories_06, Accesories_07, Accesories_08, Accesories_09, Accesories_10 } from '../../icons';


export const SelectAccessories = () => {
    const context = useContext(AvatarContext);

    if (!context) {
        return <div>Error: AvatarContext no está disponible</div>;
    }

    const { avatarState, setAvatarState, ActiveForm } = context;

    const ColorAccesory = ActiveForm === 'customAvatarChildren' ? avatarState.wardrobe_Small.accessoryColor : avatarState.wardrobe.accessoryColor;

    const color: PropsOptions = { color: ColorAccesory };
    const colors = colorRangeAccesories(color);

    const handleColorChange = (accessory:string) => {
        if (ActiveForm === 'customAvatarChildren') {
        setAvatarState({
            ...avatarState,
            wardrobe_Small: {
            ...avatarState.wardrobe_Small,
            accessory: accessory,
            },
        });
        return;
        }

        setAvatarState({
        ...avatarState,
        wardrobe: {
            ...avatarState.wardrobe,
            accessory: accessory,
        },
        });
    };

    return (
        <div className="w-full flex flex-col justify-center items-center p-[0.5vw]">
            <div className="flex flex-row w-full h-full justify-center items-center mb-[0.5vw]">
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handleColorChange('Accessory_01')}>
                        <Accesories_01 color={color.color} />
                    </ButtonOption>
                </div>
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handleColorChange('Accessory_02')}>
                        <Accesories_02 color={color.color} />
                    </ButtonOption>
                </div>
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handleColorChange('Accessory_03')}>
                        <Accesories_03 color={color.color} />
                    </ButtonOption>
                </div>
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handleColorChange('Accessory_04')}>
                        <Accesories_04 color={color.color} />
                    </ButtonOption>
                </div>
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handleColorChange('Accessory_05')}>
                        <Accesories_05 color={color.color} />
                    </ButtonOption>
                </div>
            </div>
        {/* _______________________________________________________________________________________ */}
            <div className="flex flex-row w-full h-full justify-center items-center mb-[0.5vw]">
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handleColorChange('Accessory_06')}>
                        <Accesories_06 color={color.color} color2={colors.color7} />
                    </ButtonOption>
                </div>
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handleColorChange('Accessory_07')}>
                        <Accesories_07 color={color.color} color2={colors.color3} color3={colors.color8} />
                    </ButtonOption>
                </div>
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handleColorChange('Accessory_08')}>
                        <Accesories_08 color={color.color} color2={colors.color4} color3={colors.color5} />
                    </ButtonOption>
                </div>
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handleColorChange('Accessory_09')}>
                        <Accesories_09 color={color.color} color2={colors.color6} />
                    </ButtonOption>
                </div>
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handleColorChange('Accessory_10')}>
                        <Accesories_10 color={color.color} />
                    </ButtonOption>
                </div>
            </div>
        </div>
    );
}