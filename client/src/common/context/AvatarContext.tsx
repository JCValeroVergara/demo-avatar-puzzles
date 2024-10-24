import { createContext } from 'react';
import { AvatarState } from '../interfaces';

export interface AvatarStateType {
    avatarState: AvatarState;
    setAvatarState: (avatarState: AvatarState) => void;
    ActiveForm: string;
    setActiveForm: (ActiveForm: string) => void;
    ResetAvatar: () => void;
}


export const AvatarContext = createContext<AvatarStateType | null>(null);

