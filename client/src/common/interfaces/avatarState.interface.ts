import { AvatarDetails } from './avatarDetails.interface';
import { WardrobeDetails } from './wardrobeDetails.interface';

export interface  AvatarState {
        avatar: AvatarDetails;
        wardrobe: WardrobeDetails;
        avatar_Small: AvatarDetails;
        wardrobe_Small: WardrobeDetails;
    };