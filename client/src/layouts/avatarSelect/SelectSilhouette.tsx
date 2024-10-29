import { useContext } from 'react';
import { AvatarContext } from '../../common';
import { ButtonOption } from '../../components';
import { Silhouette_01, Silhouette_02 } from '../../icons';


export const SelectSilhouette = () => {
    const context = useContext(AvatarContext);

    if (!context) {
        return <div>Error: AvatarContext no está disponible</div>;
    }
    const { avatarState, setAvatarState } = context;

    const handleShoesSelect = (Silhoutte: string) => {
        setAvatarState({
        ...avatarState,
        avatar: {
            ...avatarState.avatar,
            skin: Silhoutte,
        },
        });
    };
    return (
        <div className="w-full flex flex-col justify-center items-center p-[0.5vw]">
        <div className="flex flex-row w-full h-full justify-center items-center mb-[0.5vw]">
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
            <ButtonOption onClick={() => handleShoesSelect('Skin_01')}>
                <Silhouette_01 />
            </ButtonOption>
            </div>
            <div className="flex justify-center w-full h-full ml-[0.5vw]">
            <ButtonOption onClick={() => handleShoesSelect('Skin_02')}>
                <Silhouette_02 />
            </ButtonOption>
            </div>
        </div>
        </div>
    );
};