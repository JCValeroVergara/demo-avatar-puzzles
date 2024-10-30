import { useContext } from 'react';
import { AvatarContext, colorRangeShoes, PropsOptions } from '../../common';
import { ButtonOption } from '../../components';
import { Shoes_01, Shoes_02, Shoes_03, Shoes_04, Shoes_05 } from '../../icons';


export const SelectShoes = () => {
    const context = useContext(AvatarContext);

    if (!context) {
        return <div>Error: AvatarContext no está disponible</div>;
    }

    const { avatarState, setAvatarState, ActiveForm } = context;

    const ColorShoes: string = ActiveForm === 'customAvatarChildren' ? avatarState.wardrobe_Small.shoesColor : avatarState.wardrobe.shoesColor;
    const color: PropsOptions = { color: ColorShoes };
    const colors = colorRangeShoes(color);

    const handleShoesSelect = (shoes: string) => {
        if (ActiveForm === 'customAvatarChildren') {
        setAvatarState({
            ...avatarState,
            wardrobe_Small: {
            ...avatarState.wardrobe_Small,
            shoes: shoes,
            },
        });
        return;
        }

        setAvatarState({
            ...avatarState,
            wardrobe: {
                ...avatarState.wardrobe,
                shoes: shoes,
            },
        });
    };

    return (
        <div className="w-full flex flex-col justify-center items-center p-[0.5vw]">
            <div className="flex flex-row w-full h-full justify-center items-center mb-[0.5vw]">
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handleShoesSelect('Shoes_01')}>
                        <Shoes_01 color2={color.color} color={colors.color2} />
                    </ButtonOption>
                </div>
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handleShoesSelect('Shoes_02')}>
                        <Shoes_02 color={colors.color2} color2={color.color} />
                    </ButtonOption>
                </div>
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handleShoesSelect('Shoes_03')}>
                        <Shoes_03 color={colors.color3} color2={colors.color4} />
                    </ButtonOption>
                </div>
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handleShoesSelect('Shoes_04')}>
                        <Shoes_04 color={colors.color3} color2={colors.color5} />
                    </ButtonOption>
                </div>
                <div className="flex justify-center w-full h-full ml-[0.5vw]">
                    <ButtonOption onClick={() => handleShoesSelect('Shoes_05')}>
                        <Shoes_05 color={color.color} color2={colors.color5} />
                    </ButtonOption>
                </div>
            </div>
        </div>
    );
};