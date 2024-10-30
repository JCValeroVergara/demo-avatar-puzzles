import { useContext } from 'react';
import { AvatarContext } from '../../common';
import { ButtonColor } from '../../components';


export const SelectShirtColor = () => {
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
            shirtColor: color,
            },
        });
        return;
        }

        setAvatarState({
        ...avatarState,
        wardrobe: {
            ...avatarState.wardrobe,
            shirtColor: color,
        },
        });
    };

    return (
        <div className="w-full flex flex-row justify-center items-center p-[0.5vw]">
        <div className="flex justify-center w-full h-full ml-[0.5vw]">
            <ButtonColor
            background="#353535"
            onClick={() => handleColorChange('#353535')}
            />
        </div>
        <div className="flex justify-center w-full h-full ml-[0.5vw]">
            <ButtonColor
            background="#FFFFFF"
            onClick={() => handleColorChange('#FFFFFF')}
            />
        </div>
        <div className="flex justify-center w-full h-full ml-[0.5vw]">
            <ButtonColor
            background="#EC2B7B"
            onClick={() => handleColorChange('#EC2B7B')}
            />
        </div>
        <div className="flex justify-center w-full h-full ml-[0.5vw]">
            <ButtonColor
            background="#F2AA19"
            onClick={() => handleColorChange('#F2AA19')}
            />
        </div>
        <div className="flex justify-center w-full h-full ml-[0.5vw]">
            <ButtonColor
            background="#124E89"
            onClick={() => handleColorChange('#124E89')}
            />
        </div>
        <div className="flex justify-center w-full h-full ml-[0.5vw]">
            <ButtonColor
            background="#AF6454"
            onClick={() => handleColorChange('#AF6454')}
            />
        </div>
        </div>
    );
};