import { useContext } from 'react';
import { AvatarContext } from '../../common';
import { ButtonColor } from '../../components';


export const SelectShoesColor = () => {
    const context = useContext(AvatarContext);

    if (!context) {
        return <div>Error: AvatarContext no está disponible</div>;
    }

    const { avatarState, setAvatarState, ActiveForm } = context;

    const handleColorChange = (color:string) => {
        if (ActiveForm === 'customAvatarChildren') {
        setAvatarState({
            ...avatarState,
            wardrobe_Small: {
            ...avatarState.wardrobe_Small,
            shoesColor: color,
            },
        });
        return;
        }

        setAvatarState({
            ...avatarState,
            wardrobe: {
                ...avatarState.wardrobe,
                shoesColor: color,
            },
        });
    };

    return (
        <div className="w-full flex flex-row justify-center items-center p-[0.5vw]">
        <div className="flex justify-center w-full h-full ml-[0.5vw]">
            <ButtonColor
            background="#E4E4EA"
            onClick={() => handleColorChange('#E4E4EA')}
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
            background="#255D8C"
            onClick={() => handleColorChange('#255D8C')}
            />
        </div>
        <div className="flex justify-center w-full h-full ml-[0.5vw]">
            <ButtonColor
            background="#A51717"
            onClick={() => handleColorChange('#A51717')}
            />
        </div>
        <div className="flex justify-center w-full h-full ml-[0.5vw]">
            <ButtonColor
            background="#353535"
            onClick={() => handleColorChange('#353535')}
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