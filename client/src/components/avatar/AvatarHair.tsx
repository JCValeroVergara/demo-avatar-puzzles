import { AvatarHairProps } from '../../common';
import { F_Hair02, F_Hair03, F_Hair04, F_Hair05, F_Hair06, F_Hair07, F_Hair08, F_Hair09, F_Hair10, F_Hair11, F_Hair12, F_Hair13, F_Hair14, F_Hair15, F_Hair16, F_Hair17, F_Hair18, F_Hair19, F_Hair20, F_Hair_22_S3, F_Hair_23_S3, F_Hair_24_S3, F_Hair_25_S3, F_Hair_26_S3, F_Hair_27_S3, F_Hair_28_S3, F_Hair_29_S3, F_Hair_30_S3, F_Hair_31_S3, F_Hair_32_S3, F_Hair_33_S3, F_Hair_34_S3, F_Hair_35_S3, F_Hair_36_S3, F_Hair_37_S3, F_Hair_38_S3, F_Hair_39_S3, F_Hair_40_S3 } from '../../frames';

type Silhoutte = 'Skin_01' | 'Skin_03';

export const AvatarHair = (props: AvatarHairProps) => {
    const { hairType, hairColor, colors, silhoutte } = props;

    const Silhoutte: Silhoutte = silhoutte as Silhoutte || 'Skin_01';

    const groupsHair:Record<Silhoutte, { id: string, component: JSX.Element}[]> = {
        Skin_01: [
            { id: 'Hair_02', component: <F_Hair02 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_03', component: <F_Hair03 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_04', component: <F_Hair04 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_05', component: <F_Hair05 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_06', component: <F_Hair06 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_07', component: <F_Hair07 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_08', component: <F_Hair08 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_09', component: <F_Hair09 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_10', component: <F_Hair10 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_11', component: <F_Hair11 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_12', component: <F_Hair12 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_13', component: <F_Hair13 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_14', component: <F_Hair14 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_15', component: <F_Hair15 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_16', component: <F_Hair16 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_17', component: <F_Hair17 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_18', component: <F_Hair18 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_19', component: <F_Hair19 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_20', component: <F_Hair20 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
        ],
        Skin_03: [
            { id: 'Hair_02', component: <F_Hair_22_S3 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_03', component: <F_Hair_23_S3 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_04', component: <F_Hair_24_S3 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_05', component: <F_Hair_25_S3 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_06', component: <F_Hair_26_S3 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_07', component: <F_Hair_27_S3 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_08', component: <F_Hair_28_S3 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_09', component: <F_Hair_29_S3 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_10', component: <F_Hair_30_S3 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_11', component: <F_Hair_31_S3 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_12', component: <F_Hair_32_S3 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_13', component: <F_Hair_33_S3 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_14', component: <F_Hair_34_S3 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_15', component: <F_Hair_35_S3 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_16', component: <F_Hair_36_S3 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_17', component: <F_Hair_37_S3 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_18', component: <F_Hair_38_S3 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_19', component: <F_Hair_39_S3 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
            { id: 'Hair_20', component: <F_Hair_40_S3 className="h-full w-full" color={hairColor} color2={colors.color2} /> },
        ],
    };

    //Toma el grupo de cabellos segun la silueta
    const hairGroup = groupsHair[Silhoutte];

    //Toma el cabello segun la seleccion
    const hairSelected = hairGroup.find(item => item.id === hairType);

    return (
        <div className="w-full h-full absolute" style={{ zIndex: 30 }}>
        {hairSelected ? hairSelected.component : null}
        </div>
    );
};