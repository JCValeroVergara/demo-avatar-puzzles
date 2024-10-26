
import { AvatarAccesoriesProps } from '../../common';
import { F_Accessory02, F_Accessory03, F_Accessory04, F_Accessory05, F_Accessory06, F_Accessory07, F_Accessory08, F_Accessory09, F_Accessory10, F_Accessory_12_S3, F_Accessory_13_S3, F_Accessory_14_S3, F_Accessory_15_S3, F_Accessory_16_S3, F_Accessory_17_S3, F_Accessory_18_S3, F_Accessory_19_S3, F_Accessory_20_S3 } from '../../frames';

type Silhoutte = 'Skin_01' | 'Skin_02' | 'Skin_03';

export const AvatarAccesories = (props: AvatarAccesoriesProps) => {
    const { accesories, colorAccesory, colorsAccesory, silhoutte } = props;

    const Silhoutte: Silhoutte = silhoutte as Silhoutte || 'Skin_01';

    const groupsAccesories: Record<Silhoutte, { id: string, component: JSX.Element}[]> = {
        Skin_01: [
            { id: 'Accessory_02', component: <F_Accessory02 className="h-full w-full" color={colorAccesory} /> },
            { id: 'Accessory_03', component: <F_Accessory03 className="h-full w-full" color={colorAccesory} /> },
            { id: 'Accessory_04', component: <F_Accessory04 className="h-full w-full" color={colorAccesory} /> },
            { id: 'Accessory_05', component: <F_Accessory05 className="h-full w-full" color={colorAccesory} /> },
            { id: 'Accessory_06', component: <F_Accessory06 className="h-full w-full" color={colorAccesory} color2={colorsAccesory.color7} /> },
            { id: 'Accessory_07', component: <F_Accessory07 className="h-full w-full" color={colorAccesory} color2={colorsAccesory.color3} color3={colorsAccesory.color8} /> },
            { id: 'Accessory_08', component: <F_Accessory08 className="h-full w-full" color={colorAccesory} color2={colorsAccesory.color4} color3={colorsAccesory.color5} /> },
            { id: 'Accessory_09', component: <F_Accessory09 className="h-full w-full" color={colorAccesory} color2={colorsAccesory.color6} /> },
            { id: 'Accessory_10', component: <F_Accessory10 className="h-full w-full" color={colorAccesory} /> },
        ],
        Skin_02: [
            { id: 'Accessory_02', component: <F_Accessory02 className="h-full w-full" color={colorAccesory} /> },
            { id: 'Accessory_03', component: <F_Accessory03 className="h-full w-full" color={colorAccesory} /> },
            { id: 'Accessory_04', component: <F_Accessory04 className="h-full w-full" color={colorAccesory} /> },
            { id: 'Accessory_05', component: <F_Accessory05 className="h-full w-full" color={colorAccesory} /> },
            { id: 'Accessory_06', component: <F_Accessory06 className="h-full w-full" color={colorAccesory} color2={colorsAccesory.color7} /> },
            { id: 'Accessory_07', component: <F_Accessory07 className="h-full w-full" color={colorAccesory} color2={colorsAccesory.color3} color3={colorsAccesory.color8} /> },
            { id: 'Accessory_08', component: <F_Accessory08 className="h-full w-full" color={colorAccesory} color2={colorsAccesory.color4} color3={colorsAccesory.color5} /> },
            { id: 'Accessory_09', component: <F_Accessory09 className="h-full w-full" color={colorAccesory} color2={colorsAccesory.color6} /> },
            { id: 'Accessory_10', component: <F_Accessory10 className="h-full w-full" color={colorAccesory} /> },
        ],
        Skin_03: [
            { id: 'Accessory_02', component: <F_Accessory_12_S3 className="h-full w-full" color={colorAccesory} /> },
            { id: 'Accessory_03', component: <F_Accessory_13_S3 className="h-full w-full" color={colorAccesory} /> },
            { id: 'Accessory_04', component: <F_Accessory_14_S3 className="h-full w-full" color={colorAccesory} /> },
            { id: 'Accessory_05', component: <F_Accessory_15_S3 className="h-full w-full" color={colorAccesory} /> },
            { id: 'Accessory_06', component: <F_Accessory_16_S3 className="h-full w-full" color={colorAccesory} color2={colorsAccesory.color7} /> },
            { id: 'Accessory_07', component: <F_Accessory_17_S3 className="h-full w-full" color={colorAccesory} color2={colorsAccesory.color3} color3={colorsAccesory.color8} /> },
            { id: 'Accessory_08', component: <F_Accessory_18_S3 className="h-full w-full" color={colorAccesory} color2={colorsAccesory.color4} color3={colorsAccesory.color5} /> },
            { id: 'Accessory_09', component: <F_Accessory_19_S3 className="h-full w-full" color={colorAccesory} color2={colorsAccesory.color6} /> },
            { id: 'Accessory_10', component: <F_Accessory_20_S3 className="h-full w-full" color={colorAccesory} /> },
        ],
    };

    //Toma el grupo de accesorios segun la silueta
    const accesoryGroup = groupsAccesories[Silhoutte];

    //Toma el accesorio segun la seleccion
    const accesorySelected = accesoryGroup.find(item => item.id === accesories);

    return (
        <div className="w-full h-full absolute" style={{ zIndex: 50 }}>
        {accesorySelected ? accesorySelected.component : null}
        </div>
    );
};