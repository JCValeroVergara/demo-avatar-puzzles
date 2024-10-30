import { useContext } from 'react';
import { AvatarContext } from '../../common';
import { ButtonColor } from '../../components';


export const SelectAccessoriesColor = () => {
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
            accessoryColor: color,
            },
        });
        return;
        }

        setAvatarState({
            ...avatarState,
            wardrobe: {
                ...avatarState.wardrobe,
                accessoryColor: color,
            },
        });
    };

    return (
        <div className="w-full flex flex-row justify-center items-center p-[0.5vw]">
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonColor
                background="#e5a74e"
                onClick={() => handleColorChange('#e5a74e')}
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
                background="#255d8c"
                onClick={() => handleColorChange('#255d8c')}
                />
            </div>
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonColor
                background="#a51717"
                onClick={() => handleColorChange('#a51717')}
                />
            </div>
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonColor
                background="#757575"
                onClick={() => handleColorChange('#757575')}
                />
            </div>
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
                <ButtonColor
                background="#ec2b7b"
                onClick={() => handleColorChange('#ec2b7b')}
                />
            </div>
        </div>
    );
};