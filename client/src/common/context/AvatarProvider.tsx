import { useState } from 'react';
import { AvatarContext } from './AvatarContext';
import { AvatarProviderProps } from '../interfaces';

export const initialAvatarState = {
    skin: 'Skin_01',
    skinColor: '#FFFFFF',
    skinLine: '#7384A0',
    eyeColor: '#353B49',
    face_3: '#C0CFE2',
    face_4: '#7384A0',
    hairColor: '#353B49',
    hairType: '',
    beardType: 'Beard_01',
};

export const initialWardrobeState = {
    shirts: 'Shirt_01',
    shirtColor: '#C2C9d5',
    pants: 'Pant_01',
    pantsColor: '#A8A8A8',
    shoes: '',
    shoesColor: '#7384A0',
    accessory: '',
    accessoryColor: '#353535',
};

export const initialAvatar_Small_State = {
    skin: 'Skin_03',
    skinColor: '#FFFFFF',
    skinLine: '#7384A0',
    eyeColor: '#353B49',
    face_3: '#C0CFE2',
    face_4: '#7384A0',
    hairColor: '#353B49',
    hairType: '',
    beardType: 'Beard_01',
};

export const initialWardrobe_Small_State = {
    shirts: 'Shirt_01',
    shirtColor: '#C2C9d5',
    pants: 'Pant_01',
    pantsColor: '#A8A8A8',
    shoes: '',
    shoesColor: '#7384A0',
    accessory: '',
    accessoryColor: '#353535',
};

export const AvatarProvider = ({ children }: AvatarProviderProps) => {
    const [avatarState, setAvatarState] = useState({
        avatar: initialAvatarState,
        wardrobe: initialWardrobeState,
        avatar_Small: initialAvatar_Small_State,
        wardrobe_Small: initialWardrobe_Small_State,
    });

    const [ActiveForm, setActiveForm] = useState('');
    
    const ResetAvatar = () => {
        setAvatarState({
        avatar: initialAvatarState,
        wardrobe: initialWardrobeState,
        avatar_Small: initialAvatar_Small_State,
        wardrobe_Small: initialWardrobe_Small_State,
        });
    };

    return (
        <AvatarContext.Provider value={{ avatarState, setAvatarState, ActiveForm, setActiveForm, ResetAvatar }}>
        {children}
        </AvatarContext.Provider>
    );
}