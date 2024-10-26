import { ColorAccesory, ColorHair, ColorPants, ColorShirt, ColorShoes } from '../types';


export interface AvatarAccesoriesProps {
    accesories: string;
    colorAccesory: string;
    colorsAccesory: ColorAccesory;
    silhoutte: string;
}

export interface AvatarBeardProps {
    beardType: string;
    // hairColor: string;
    colors: ColorHair;
}

export interface AvatarBrownChildrenProps {
    color: string;
}

export interface AvatarEyesProps {
    eyeColor: string;
    silhoutte: string;
}

export interface AvatarFaceProps {
    face_3: string;
    face_4: string;
    silhoutte: string;
}

export interface AvatarHairProps {
    hairType: string;
    hairColor: string;
    colors: ColorHair;
    silhoutte: string;
}

export interface AvatarPantsProps {
    pants: string;
    colorsPants: ColorPants;
    colorPants: string;
    silhoutte: string;
}

export interface AvatarShirtsProps {
    shirt: string;
    colorsShirt: ColorShirt;
    colorShirt: string;
    silhoutte: string;
}

export interface AvatarShoesProps { 
    shoes: string;
    colorsShoes: ColorShoes;
    colorShoes: string;
    colorSkin: string;
    colorSkinLine: string;
    silhoutte: string;
}

export interface AvatarSkinsProps {
    skinColor: string;
    skinLine: string;
    silhoutte: string;
}
